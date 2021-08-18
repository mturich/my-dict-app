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
      {/* <div class="dummyDiv"></div> */}
      <span>{content}</span>
      {/* <div div class="dummyDiv"></div> */}
    </div>
  </>
)}
</>