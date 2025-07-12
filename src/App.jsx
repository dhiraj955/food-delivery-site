import React from 'react'
import Home from './pages/Home'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-'>
      <Home/>
      <Footer/>
      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  )
}

export default App
