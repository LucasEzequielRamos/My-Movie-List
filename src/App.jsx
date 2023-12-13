const App = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center m-10">
        <h1 className="text-6xl m-5">The movie list</h1>
        <nav className="flex gap-5">
          <form >
            <input type="text" className="border border-black" />
          </form>
        </nav>
      </header>
      <main>
        <section className="flex w-4/5 m-auto bg-red-200">
          <div className="flex flex-col bg-slate-700 p-5 rounded-xl">
            <img className="w-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXUTkGriCUtWlEEaOVIfO69qrUUp5vH7uQ_DMvgtIvA&s" alt="" />
            <h2 className="text-xl font-bold text-white">Avengers</h2>
            <p className="bg-red-600 w-10 text-center p-1 rounded-full text-xs font-bold" >210</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
