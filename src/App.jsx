import { useState } from 'react'
import { getMovieData } from '../services/getMovies'

const App = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  const handleChange = (event) => {
    const value = event.target.value
    setQuery(value)
    getResults(value)
  }

  async function getResults (query) {
    const res = await getMovieData(query)
    setData(res)
  }

  return (
    <>
      <header className="flex flex-col justify-center items-center m-10">
        <h1 className="text-6xl m-5">The movie list</h1>
        <nav className="flex gap-5">
          <form >
            <input onChange={handleChange} value={query} type="text" className="border border-black" />
          </form>
        </nav>
      </header>
      <main>
        <section className="flex flex-wrap w-4/5 m-auto bg-red-200 gap-5 p-5 justify-center">
          {data.results?.map((movie) => (
            <div key={movie.id} className="flex flex-col  w-[200px]  bg-slate-700 p-5 rounded-xl">
              <img className="w-40" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
              <h2 className="text-xl font-bold text-white">{movie.title}</h2>
              <p className="bg-red-600 w-14 text-center p-1 rounded-full text-xs font-bold" >{movie.popularity}</p>
            </div>
          )
          )}
        </section>
      </main>
    </>
  )
}

export default App
