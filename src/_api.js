import axios from 'axios';

async function getCatFact() {
  const getUrl = await axios.get('https://catfact.ninja/fact');
  const resGet = getUrl.data;
  // console.log(`resGet: `, resGet);
  return resGet;
};

export async function getCatFacts(prop) {
  const catFacts = new Array(prop.requiredFacts).fill({});

  const catFactsRes = await Promise.all(
    catFacts?.map(async () => {
      return await getCatFact();
    }
  ));

  return catFactsRes;
};
