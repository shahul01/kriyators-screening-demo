import axios from 'axios';

async function getCatFact() {
  const getUrl = await axios.get('https://catfact.ninja/fact');
  const resGet = getUrl.data;
  // console.log(`resGet: `, resGet);
  return resGet;
};

export async function getCatFacts(prop) {
  let currCount = prop.factsCount;
  let catFacts = [];

  while (currCount <= prop.requiredFacts) {
    const newCatFact = await getCatFact();
    catFacts = [...catFacts, newCatFact];
    console.log(`catFacts: `, catFacts);

    currCount+=1;
  };

  return catFacts;
}
