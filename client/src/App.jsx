import './App.css'



function App() {
  return (
    <div className="App">
      <h1 className='font-bold text-center mt-20 text-4xl'>Welcome To my App</h1>
      {/* add two links to the login and register pages */}
      <div className='flex justify-center mt-10'>
        <a href="/login" className='bg-slate-900 text-white font-bold py-2 px-4 rounded'>Login</a>
        <a href="/register" className='bg-slate-900  text-white font-bold py-2 px-4 rounded ml-4'>Register</a>
      <div/>
    </div>
  </div>
  )
}

export default App