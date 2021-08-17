import { useState, useEffect } from 'react';
import axios from 'axios';
import './MeaningCards.css';

function MeaningCards({ word, category, setMeanings, meanings }) {
  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;
  console.log(API_URL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(API_URL);
        console.log(data.data);
        setMeanings(data.data);
      } catch (error) {
        if (error.response) {
          // response status code falls out of 2xx range
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
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

  const content = meanings.map((meaning, index) => (
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
          <p style={{ paddingLeft: '1em' }}> [{meaning.phonetic}]</p>

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
  ));

  return(
<>{ word === '' ? (
   ( <div className="wrapper">
      <span>Type in your word in the search</span>
    </div>)
  ) : 
    (<>
      <div className="wrapper">
        <div class="dummyDiv"></div>
        <span>{content}</span>
        <div div class="dummyDiv"></div>
      </div>
    </>)
  }</>)

}

export default MeaningCards;
