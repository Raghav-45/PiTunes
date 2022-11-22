import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className='bg-dark h-screen'>
      <div className='flex' Style='height: 88vh;'>
        <div className='w-56 bg-black h-full flex-none'>
          <h1 className="text-3xl bg-green font-bold underline">
            Hello world!
          </h1>
        </div>
        <div className='w-full h-full relative'>
          <div className='w-full stickey top-0 p-2'>
            
          </div>
        </div>
      </div>
      <div className='w-full bg-light' Style='height: 12vh;'>

      </div>
    </div>
  )
}

export default App
