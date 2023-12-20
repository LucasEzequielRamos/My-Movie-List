const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRkN2I0NjhiMDFkZDcyOWNmY2YxY2JjOTRjZTdmZCIsInN1YiI6IjY0OTllODkzYmJkMGIwMDEwNjZmZGJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVRF0b2kv5eizCeIAK3VE4Lr-6LAVocMMHrWTDU9gfk'
  }
}

export async function getMovieData (query) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
  const data = await res.json()
  return data
}
