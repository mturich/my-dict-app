import { useEffect } from 'react';
import axios from 'axios';
import './MeaningCards.css';
import ReactAudioPlayer from 'react-audio-player';

function MeaningCards({ word, category, setMeanings, meanings}) {
  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(API_URL);
        // console.log(data.data);
        setMeanings(data.data);
      } catch (error) {
        if (error.response) {
          // response status code falls out of 2xx range
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
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
  
  
  // const phonetic = (meanings[0].phonetics[0] === '') ? 'no audio available' : meanings[0].phonetics[0].audio;
  
  // console.log(meanings[0].phonetics[0]!=='')
  
  const content = meanings.map((meaning, index) => (
    <>
      <div class="Cards">
        <div class="CardHeading">
          <span style={{ padding: '1rem' }}>Meaning {index + 1}:</span>
          {meaning.word}
        </div>

        <div class="CardContext" key={meaning.label}
          value={meaning.label} >
          <>
            <>
              {meaning.meanings.map((typ) => (
                <>
                  <p style={{ textDecoration: 'underline', margin: '0rem 0' }}>
                    {typ.partOfSpeech}:
                  </p>
                  <p style={{ paddingLeft: '1em' }}>
                    {typ.definitions[0].definition}
                  </p>
                </>
              ))}
            </>

            <p style={{ paddingTop: '1rem', textDecoration: 'underline' }}>
              phonetic:
            </p>
             <p style={{ paddingLeft: '1em' }}>
              {' '}
              [{meaning.phonetic}]
              </p> 
            <p
              style={{ textDecoration: 'underline', paddingTop: '0.5rem' }}
              id="origin"
            >
              origin:
            </p>
            <p style={{ paddingLeft: '1em', paddingBottom: '1em' }}>
              {meaning.origin}
            </p>
          </>
        </div>
      </div>
    </>
  ));

  return (
    <>
      {/* If no word has been entered in search print hint how to use the app */}
      {word === '' ? (
        <div className="wrapper wrapper--large">
          <span className="emptyWrapperText">
            start word seach by typping in the search bar{' '}
          </span>
        </div>)
        : (category === 'en' && !!meanings[0]) ? (
          <>
            {/* If english is the language and the audio track is available, show audio track */ }
            <div
              class="wrapper wrapper--audio"
            >
            <audio controls src={meanings[0].phonetics[0].audio} style={{ height: '100%', width:'100%', borderRadius: 5, margin:'auto' }}>
                     Your browser does not support the audio tag.
                  </audio>
            </div>
            
             <div className="wrapper wrapper--large">
               {/* <div class="dummyDiv"></div> */}
               <span>{content}</span>
               {/* <div div class="dummyDiv"></div> */}
             </div>
           </>
        )
          : (<>
             {/* show no audio track for all other languages */ }
          <div className="wrapper wrapper--large">
            <div class="dummyDiv"></div>
            <span>{content}</span>
            <div div class="dummyDiv"></div>
          </div>
        </>
      )}
    </>
  );
}

export default MeaningCards;
