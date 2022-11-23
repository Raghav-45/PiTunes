import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SpotifyLogo from './assets/Spotify_Logo_RGB_Green.png'
import './App.css'
import { AiFillHome, AiFillHeart } from "react-icons/ai"
import { BiSearchAlt, BiLibrary } from "react-icons/bi"
import { BsFillPlusSquareFill } from "react-icons/bs"

function App() {
  const data = {
    pages: [
      {id: 'home', name: 'Home', icon: ''},
      {id: 'search', name: 'Search', icon: ''},
      {id: 'library', name: 'Library', icon: ''},
    ],
    setId: 'home',
    albums: [
      {name: 'drive'},
      {name: 'zombie'},
      {name: 'All New Indie'},
      {name: 'Mellow'},
      {name: 'Classic Road Trip Songs'},
      {name: 'Lana Del R'},
    ]
  }

  return (
    <div className='bg-dark h-screen'>
      <div className='flex' Style='height: 88vh;'>
        <div className='w-56 bg-black h-full flex-none'>
          <div className='p-6'>
            <img className='h-10' alt="Girl in a jacket" src={SpotifyLogo} Style='filter: brightness(0) invert(1);' ></img>
          </div>
          <div className="mx-2 mb-5">
            <button className='w-full font-semibold text-sm rounded px-3 py-2 flex items-center justify-start text-white hover:bg-light'>
              <i className='material-icons mr-3'> <AiFillHome color='white'/> </i>
              <p>Home</p>
            </button>
            <button className='w-full font-semibold text-sm rounded px-3 py-2 flex items-center justify-start text-white hover:bg-light'>
              <i className='material-icons mr-3'> <BiSearchAlt color='white'/> </i>
              <p>Search</p>
            </button>
            <button className='w-full font-semibold text-sm rounded px-3 py-2 flex items-center justify-start text-white hover:bg-light'>
              <i className='material-icons mr-3'> <BiLibrary color='white'/> </i>
              <p>Library</p>
            </button>
          </div>
          <div className='mx-5'>
            <h1 className='mb-3 text-xs text-lightest tracking-widest uppercase'>Playlists</h1>
            <button className='flex items-center justify-start opacity-75 hover:opacity-100 mb-2'>
              <i> <BsFillPlusSquareFill className='h-8 w-8 mr-3' color='white'/> </i>
              <p className='text-sm text-white font-semibold'>Create Playlist</p>
            </button>
            <button className='flex items-center justify-start opacity-75 hover:opacity-100'>
              <i> <AiFillHeart className='h-8 w-8 mr-3' color='white'/> </i>
              <p className='text-sm text-white font-semibold'>Liked Songs</p>
            </button>
            <div className='h-px w-full bg-light my-3'></div>
          </div>
          <div className="mx-5">
            <div className="w-full h-24 overflow-y-scroll">
              {/* <p className='text-lightest hover:text-white text-xs py-1'></p> */}
              <p className='text-lightest hover:text-white text-sm py-1'>drive</p>
              <p className='text-lightest hover:text-white text-sm py-1'>zombie</p>
              <p className='text-lightest hover:text-white text-sm py-1'>All New Indie</p>
              <p className='text-lightest hover:text-white text-sm py-1'>Mellow</p>
              <p className='text-lightest hover:text-white text-sm py-1'>Classic Road Trip Songs</p>
              <p className='text-lightest hover:text-white text-sm py-1'>Lana Del R</p>
            </div>
            <button className='flex items-center justify-start text-lightest hover:text-white'></button>
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
