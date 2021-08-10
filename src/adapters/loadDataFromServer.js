import { useState, useEffect } from 'react';
import axios from 'axios';

function GetDataFromServer({ apiURL }) {
  const [meanings, setMeanings] = useState([]);
  //const [word, setWord] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(apiURL);
        // console.log(data);
        setMeanings(data);
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
    <div className="meaningCard" style={{display: "flex", margin: "1rem"}}>
      <div key="1" style={{padding:"0 1rem"}}> Meaning {index+1}:</div>
      <div key="2" style={{padding:"0 1rem"}}> {meaning.origin} </div>
    </div>
  ));

  return (
    <div className="wrapper">
       <p> the meaning of the word <em>TESTWORD</em> is </p>
      {content}
    </div>
  );
}

export default GetDataFromServer;
