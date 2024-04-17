import React, { useEffect, useState } from 'react'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import rgbToHex from './Utils'
// import rgbToHex from './utils';

function SingleColor({rgb, weight, index, hexColor}) {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`
    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 5000)
        return () => clearTimeout(timeout)        
    }, [alert])

  return (
    <article 
    className={`color ${index > 10 && 'color-light'}`} 
    style={{backgroundColor: `rgb(${bcg})` }}
    onClick={() => {
        toast.info("Copied to Clipboard",
        {theme: "light",
        autoClose: "2000",
        position: "top-center"
        })
        setAlert(true);
        navigator.clipboard.writeText(hexValue)
    }}
    >
      <p className='percent-value'>
        {weight}%
      </p>

      <p className='color-value'>
        {hexValue}
      </p>
      {alert && <p className='alert'>
        Copied to Clipboard
      </p>}

    </article>
  )
}

export default SingleColor
