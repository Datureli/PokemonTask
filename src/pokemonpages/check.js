

const urls = ['https://pokeapi.co/api/v2/pokemon/', 'https://pokeapi.co/api/v2/nature/'];
  try{
    let res = await Promise.all(urls.map(e => fetch(e)))
    let resJson = await Promise.all(res.map(e => e.json()))
    resJson = resJson.map(e => e.results[0].name.first)
    console.log(resJson)