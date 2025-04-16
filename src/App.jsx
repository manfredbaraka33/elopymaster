import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';

function App() {
 

  return (
    <>
    <Home />
    <p className="text-center text-light mt-5 mb-3">
      &copy; {new Date().getFullYear()} Manfred Baraka — Built with brain cells, caffeine, and lots of console.logs.
    </p>

    </>
  )
}

export default App
