const axios = require('axios');
const handler = async (event) => {
 const tmdb_key = process.env.tmdb_api_key;
 const tmdb_search_endpoint = `https://api.themoviedb.org/3/search/movie?`;

  const {query, language, include_adult, include_video, page} = event.queryStringParameters ;
  const tmdb_search_url = `${tmdb_search_endpoint}api_key=${tmdb_key}&query=${query}&language=${language}&include_adult=${include_adult}&include_video=${include_video}&page=${page}}`;
 
  try{
  const { data } = await axios.get(tmdb_search_url);

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