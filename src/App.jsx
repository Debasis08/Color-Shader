import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify';
import SingleColor from './SingleColor';
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
  const [color, setcolor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));


  window.onload = function() {
    toast("Debasis Welcomes You",
    {theme: "light",
    position: "top-center"
    }
  )
  }

const handleSubmit = (e) => {
  e.preventDefault();
  try {
    let colors = new Values(color).all(10)
    setList(colors);
    toast.success("Color Shades Generated",
    {theme: "light",
    position: "top-center"
    }
  )

  } catch (error) {
    setError(true)
    console.log(error)
    toast.error("Invalid Input",
    {theme: "light",
    position: "top-center"
    })
  } 
}

// const notify = () => {
//   toast("Color Shades Generated")
// }


  
  return (
    <>
      <section className='section01'>
      <h1 className =' font-mono'>
        Color Generator
      </h1>
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        value={color}
        onChange={(e) => setcolor(e.target.value)}
        placeholder='#f15025'
        className = {`${error ? 'error' : null}`}
        />
        <button 
        className='btn'
        type='submit'
        >
        Submit
        </button>
      </form>
      </section>
      <ToastContainer/>
      <section className='section02'>
        {list.map((color, index) => {
          return (
          <SingleColor
          key = {index} {...color} index = {index}
          hexColor={color.hex} />
        )})}
      </section>
    </>
  )
}

export default App
