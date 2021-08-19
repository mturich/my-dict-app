function Content({ meanings, LightMode }) {
  return meanings.map((meaning, index) => (
    <div class="Cards">
      <div
        class="card--head"
        style={{
          color: LightMode ? 'black' : 'black',
          backgroundColor: LightMode ? '#fff' : '#727272',
        }}
      >
        {`Meaning ${index + 1}: ${meaning.word}`}
      </div>

      <div
        class="card--context"
        key={meaning.label}
        value={meaning.label}
        style={{
          backgroundColor: LightMode ? '#fff' : '#727272',
          color: LightMode ? 'black' : 'black',
          scrollbarColor: LightMode ? '#473e29 #fff' : '#fff #727272',
        }}
      >
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
        </>
      </div>
    </div>
  ));
}

export default Content;
