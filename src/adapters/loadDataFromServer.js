import { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div
      className="Cards"
      style={{
        fontFamily: 'Caveat, sans-serif',
        fontSize: 'clamp(1rem,1.2rem,1.5rem)',
        display: 'flex',
        flexDirection: 'column',
        // width: '40rem',
        width: '80%',
        minHeight: '26rem',
        // minHeight: 'clamp(60%,70%,80%)',
        maxHeight: '80%',
        overflowX: 'auto',

        margin: 'auto 6rem',

        backgroundColor: '#FFFF88',
        border: '1px solid black',
        scrollSnapAlign: 'center',
        scrollSnapStop: 'always',
      }}
    >
      <div
        key={meaning.label}
        value={meaning.label}
        className="CardMeaning"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '15%',
          margin: 'auto',
          borderBottom: '1px solid black',
          fontSize: '1.5rem',
          textDecoration: 'underline'
        }}
      >
        <span style={{ padding: '1rem',  }}>Meaning {index + 1}:</span>
        <p>{meaning.word}</p>
      </div>

      <div
        key={meaning.label}
        value={meaning.label}
        className="CardOrigin"
        style={{
          height: '80%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          overflowX: 'auto',
          margin: 'auto',
          padding: ' 0.5em 1em',
        }}
      >
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

          <p style={{ textDecoration: 'underline', paddingTop: '0.5rem' }} id="origin">
            origin:
          </p>
          <p style={{ paddingLeft: '1em', paddingBottom:'1em' }}>{meaning.origin}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {/* <div>
        <p style={{ padding: '3em 5em 1em', textTransform: 'uppercase' }}>
          the meaning of the word is
        </p>
      </div> */}
      <div
        className="wrapper"
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '32rem',
          width: '90%',

          backgroundColor: '#ebe6e6',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          margin: '0 auto',
        }}
      >
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
  width: '2rem',
  margin: '0 1rem',
  border: '1px solid #ebe6e6',
  backgroundColor: '#ebe6e6',
};

export default GetDataFromServer;
