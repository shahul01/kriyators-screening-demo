import { useEffect, useRef, useState } from 'react';
import CatFacts from './components/CatFacts/CatFacts';
import { getCatFacts } from './_api';
import './App.css';

function App() {
  const [ catFacts, setCatFacts ] = useState([]);
  const factsCount = useRef(1);
  const requiredFacts = 10;

  useEffect(() => {
    fetchCatFacts();

  }, []);

  async function fetchCatFacts() {
    const prop = {
      factsCount: factsCount.current,
      requiredFacts: requiredFacts
    };
    const newFact = await getCatFacts(prop);
    setCatFacts(newFact);

    factsCount.current+=1;
  };

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      {
        catFacts.length === requiredFacts ? (
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
