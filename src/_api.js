import axios from 'axios';

export async function getCatFacts() {
  const getUrl = await axios.get('https://catfact.ninja/fact');
  const resGet = getUrl.data;
  // console.log(`resGet: `, resGet);
  return resGet;
};
