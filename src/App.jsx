import { useEffect, useRef, useState } from 'react';
import CatFacts from './components/CatFacts/CatFacts';
import { getCatFacts } from './_api';
import './App.css';

function App() {
  const requiredFacts = 10;
  const firstLoad = useRef(true);
  const [ catFacts, setCatFacts ] = useState([]);


  useEffect(() => {
    if (firstLoad.current) {
      fetchCatFacts();

      firstLoad.current = false;
    };

  }, []);

  async function fetchCatFacts() {
    const prop = {
      requiredFacts: requiredFacts
    };

    // COMMT: promise
    // function newFactProm() {
    //   return getCatFacts(prop);
    // };
    // newFactProm().then((res,rej) => {
    //   setCatFacts(res);
    // });

    // COMMT: await
    const fetchedData = await getCatFacts(prop);
    setCatFacts(fetchedData);

  };

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      {
        catFacts?.length === requiredFacts ? (
          catFacts?.map((currFact, idx) => (
            <CatFacts
              idx={idx}
              currFact={currFact}
            />
          ))
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  );
}

export default App;
