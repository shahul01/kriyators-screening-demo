import { useEffect, useRef, useState } from 'react';
import CatFacts from './components/CatFacts/CatFacts';
import { getCatFacts } from './_api';
import './App.css';

function App() {
  const [ catFacts, setCatFacts ] = useState([]);
  const factsCount = useRef(1);

  useEffect(() => {
    fetchCatFacts();

  }, []);

  async function fetchCatFacts() {
    // COMMT: will loop 10 times.
    while (factsCount.current < 10) {
      const newFact = await getCatFacts();
      setCatFacts(prev => [...prev, newFact]);

      factsCount.current+=1;
    };

  };

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      {
        catFacts?.map((currFact, idx) => (
          <CatFacts
            idx={idx}
            currFact={currFact}
          />

        ))
      }
    </div>
  );
}

export default App;
