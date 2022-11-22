import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SpotifyLogo from './assets/Spotify_Logo_RGB_Green.png'
import './App.css'
import { AiFillHome } from "react-icons/ai"

function App() {
  const pages = [
    {id: 'home', name: 'Home', icon: ''},
    {id: 'search', name: 'Search', icon: ''},
    {id: 'library', name: 'Library', icon: ''},
  ]
  return (
    <div className='bg-dark h-screen'>
      <div className='flex' Style='height: 88vh;'>
        <div className='w-56 bg-black h-full flex-none'>
          <div className='p-6'>
            <img className='h-10' alt="Girl in a jacket" src={SpotifyLogo} Style='filter: brightness(0) invert(1);' ></img>
          </div>
          <div className="mx-2">
            <button className='w-full font-semibold text-xs rounded px-3 py-2 flex items-center justify-start text-white hover:bg-light'>
              <i className='material-icons mr-3'> <AiFillHome color='white'/> </i>
              <p>Home</p>
            </button>
          </div>
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
