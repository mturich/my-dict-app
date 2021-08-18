import { useState, useEffect } from 'react';
import axios from 'axios';
import './GetMeaning.css';

function GetMeaning({ word, category, setMeanings }) {
  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;
  console.log(API_URL);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(API_URL);
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

}

export default GetMeaning;
