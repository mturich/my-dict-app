import { useState, useEffect } from 'react';
import axios from 'axios';
import './MeaningCards.css';
import Content from './data/CardTemplate';
import ReactAudioPlayer from 'react-audio-player';


function MeaningCards({ word, category, setMeanings, meanings, LightMode}) {
  const [err, setErr] = useState(false);

  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Array = await axios.get(API_URL);
        // console.log(data.data);
        setMeanings(Array.data);
      } catch (error) {
        if (error.response) {
          // response status code falls out of 2xx range
          const { data, status, headers } = error.response;
          console.log({ data, status, headers });
          setErr(error);
        } else if (error.request) {
          // after request was made no response was recieved
          console.log(error.request);
        } else {
          // all other errors
          console.log(error.message);
        }
        
      }
    };

    fetchData();
  }, [API_URL, setMeanings]);

  console.log([word, err, !!err,]);
 

  let output;
  /* if no word has been typed in
  
  */
  if (word === '') {
    output = (
      <div className="wrapper wrapper--large" style={{ backgroundColor: LightMode ? '#f0f0f0' : '#727272' }}>
        <p className="emptyWrapperText">
          start word seach by typing in the search bar!
        </p>
      </div>
    );
  } else {
       if (category === 'en' && !!meanings[0]) {
        /* If english is the language and the audio track is available, show audio track */
        output = (
          <>
            <div class="wrapper wrapper--audio" >
              <ReactAudioPlayer
                className="audioplayer"
                src={meanings[0].phonetics[0].audio}
                controls
              >
                Your browser does not support the audio tag.
              </ReactAudioPlayer>
            </div>

            <div className="wrapper wrapper--large"
              style={{ backgroundColor: LightMode ? '#f0f0f0' : '#727272' }}>
              <Content meanings={meanings} LightMode={LightMode}/>
            </div>
          </>
        );
      } else {
        /* show no audio track for all other languages */
        output = (
          <div className="wrapper wrapper--large"
            style={{ backgroundColor: LightMode ? '#f0f0f0' : '#727272' }}>
           <Content meanings={meanings} LightMode={LightMode}/>
          </div>
        );
      }
    }
   

  return output;
}

export default MeaningCards;
