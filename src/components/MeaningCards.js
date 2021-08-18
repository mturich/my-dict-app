import { useEffect } from 'react';
import axios from 'axios';
import './MeaningCards.css';
import ReactAudioPlayer from 'react-audio-player';

function MeaningCards({ word, category, setMeanings, meanings }) {
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

  console.log({ meanings });

  const content = meanings.map((meaning, index) => (
    <>
      {/* {console.log({meaning})} */}
      <div id="CardsBackground">
        <div id="CardHeading">
          <span style={{ padding: '1rem' }}>Meaning {index + 1}:</span>
          {meaning.word}
        </div>

        <div key={meaning.label} value={meaning.label} id="CardContext">
          <div style={{ maxHeight: '100%' }}>
            <div style={{ margin: '0' }}>
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
            </div>

            <p style={{ paddingTop: '1rem', textDecoration: 'underline' }}>
              phonetic:
            </p>
            <p style={{ paddingLeft: '1em' }}>
              {' '}
              [{meaning.phonetic}]
              {category === 'en' ? (
                <div style={{ float: 'right', padding: '0 3rem' }}>
                  {/* <audio controls>
                    <source
                      src={meaning.phonetics[0] && meaning.phonetics[0].audio}
                      style={{ height: '20px', borderRadius: 10 }}
                    />
                    {console.log(meaning.phonetics[0].audio)}         Your browser does not support the audio tag.
                  </audio> */}
                </div>
              ) : (
                ''
              )}
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
          </div>
        </div>
      </div>
    </>
  ));

  return (
    <>
      {word === '' ? (
        <div className="wrapper">
          <span className="emptyWrapperText">
            start word seach by typping in the search bar{' '}
          </span>
        </div>)
        : category === 'en' ? (
          <>
            <div
              style={{
                width: '90%',
                height: '2rem',
                background: '#ebe6e6',
                margin: '3rem auto 0',
              }}
            >
            <audio controls>
                    <source
                      src='{meanings.phonetics[0].audio}'
                      style={{ height: '20px', borderRadius: 10 }}
                    />
                    Your browser does not support the audio tag.
                  </audio>
            </div>
            
             <div className="wrapper">
               <div class="dummyDiv"></div>
               <span>{content}</span>
               <div div class="dummyDiv"></div>
             </div>
           </>
        )
        : (<>
          <div className="wrapper">
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
