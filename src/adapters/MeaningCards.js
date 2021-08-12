import { useState, useEffect } from 'react';
import axios from 'axios';
import './MeaningCards.css';

function GetDataFromServer({ apiURL }) {
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(apiURL);
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
  }, [apiURL]);

  const content = meanings.map((meaning, index) => (
    <div id="CardsBackground">
      <div id="CardHeading">
          <span style={{ padding: '1rem' }}>Meaning {index + 1}:</span>{meaning.word}
            </div>
      
      <div
        key={meaning.label}
        value={meaning.label}
        id="CardContext">
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

  return (
    <>
      <div className="wrapper">
        <div class="dummyDiv" style={style}></div>
        {content}
        <div class="dummyDiv" style={style}></div>
      </div>
    </>
  );
}

// design for dummy divs in order to get a margin btw. the scrolling frame and the cards
const style = {
  height: '26rem',
  width: '0.1rem',
  margin: '0 0.1rem',
  border: '1px solid #ebe6e6',
  backgroundColor: '#ebe6e6',
};

export default GetDataFromServer;
