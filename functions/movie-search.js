const axios = require('axios');
const handler = async (event) => {
    const tmdb_key = process.env.tmdb_api_key;
  
  const { query } = event.queryStringParameters ;
  const tmdb_movie_url = `https://api.themoviedb.org/3/movie/${query}/keywords?api_key=${tmdb_key}`

 try{
  const { data } = await axios.get(tmdb_movie_url);
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
 }catch(error){
  const { status, statusText, headers, data } = error.response;
  return {
    statusCode: status,
    body: JSON.stringify({status, statusText, headers, data})
  }
 }
}

module.exports = { handler }