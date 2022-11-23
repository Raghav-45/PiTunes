import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SpotifyLogo from './assets/Spotify_Logo_RGB_Green.png'
import NoLoss from './assets/NoLoss.jfif'
import IronManLogo from './assets/IronManLogo.jpg'
import DailyMix1 from './assets/DailyMix1.jfif'
import DailyMix2 from './assets/DailyMix1.jfif'
import DailyMix3 from './assets/DailyMix1.jfif'
import DailyMix4 from './assets/DailyMix1.jfif'
import DailyMix5 from './assets/DailyMix1.jfif'
import './App.css'
import { AiFillHome, AiFillHeart, AiOutlineArrowDown } from "react-icons/ai"
import { FaPlay } from "react-icons/fa"
import { BiSearchAlt, BiLibrary } from "react-icons/bi"
import { BsFillPlusSquareFill } from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md"
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io"

function App() {
  const [ShowDropdown, setShowDropdown] = useState(false)
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
    ],
    showDropdown: false,
    recents: [
      {src: DailyMix1, title: 'Daily Mix 1', artist: 'By Spotify'},
      {src: DailyMix2, title: 'Daily Mix 2', artist: 'By Spotify'},
      {src: DailyMix3, title: 'Daily Mix 3', artist: 'By Spotify'},
      {src: DailyMix4, title: 'Daily Mix 4', artist: 'By Spotify'},
      {src: DailyMix5, title: 'Daily Mix 5', artist: 'By Spotify'},
    ],
    customs: [
      {src: DailyMix1, title: 'Daily Mix 1', artist: 'By Spotify'},
      {src: DailyMix2, title: 'Daily Mix 2', artist: 'By Spotify'},
      {src: DailyMix3, title: 'Daily Mix 3', artist: 'By Spotify'},
      {src: DailyMix4, title: 'Daily Mix 4', artist: 'By Spotify'},
      {src: DailyMix5, title: 'Daily Mix 5', artist: 'By Spotify'},
    ],
  }

  return (
    <div className='bg-dark h-screen'>
      <div className='flex h-[88vh]'>
        <div className='w-56 bg-black h-full flex-none'>
          <div className='p-6'>
            <img className='h-10' alt="Girl in a jacket" src={SpotifyLogo} Style='filter: brightness(0) invert(1);' ></img>
          </div>
          <div className="mx-2 mb-5">
            <button className='w-full font-semibold focus:outline-none text-sm rounded px-3 py-2 flex items-center justify-start text-white hover:bg-light'>
              <i className='material-icons mr-3'> <AiFillHome color='white'/> </i>
              <p>Home</p>
            </button>
            <button className='w-full font-semibold focus:outline-none text-sm rounded px-3 py-2 flex items-center justify-start text-white hover:bg-light'>
              <i className='material-icons mr-3'> <BiSearchAlt color='white'/> </i>
              <p>Search</p>
            </button>
            <button className='w-full font-semibold focus:outline-none text-sm rounded px-3 py-2 flex items-center justify-start text-white hover:bg-light'>
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
            <button className='flex items-center justify-start text-lightest hover:text-white py-2'>
              <i className='mr-3 rounded-full border text-sm border-lightest'><AiOutlineArrowDown/></i>
              <p className='text-sm font-semibold'>Install App</p>
            </button>
          </div>
          <div className="relative pt-4">
            <div className="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 p-2 absolute">
              <div className="bg-black rounded-full h-6 w-6">
                <i className='text-white'><MdKeyboardArrowDown/></i>
              </div>
            </div>
            <img src={NoLoss} />
          </div>
        </div>
        <div className='w-full h-full relative overflow-y-scroll'>
          <div className='w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-dark'>
            <div className="flex items-center">
              <button className='rounded-full bg-black w-8 h-8 text-white mr-3'>
                <MdKeyboardArrowLeft className='text-3xl'/>
              </button>
              <button className='rounded-full bg-black w-8 h-8 text-white'>
                <MdKeyboardArrowRight className='text-3xl'/>
              </button>
            </div>
            <div className='relative'>
              <button onClick={() => setShowDropdown(!ShowDropdown)} className='focus:outline-none bg-light rounded-full py-1 px-2 flex items-center'>
                <img src={IronManLogo} className='rounded-full h-6 w-6 mr-2'></img>
                <p className='text-white font-semibold text-xs mr-3'>Raghav</p>
                {ShowDropdown ? <IoMdArrowDropup className='text-white'/> : <IoMdArrowDropdown className='text-white'/>}
              </button>
              {ShowDropdown && 
                <div onClick={() => setShowDropdown(false)} className="absolute bg-light w-full rounded mt-1">
                  <button onClick={() => setShowDropdown(false)} className='focus:outline-none w-full text-sm py-2 hover text-white border-b border-lightest opacity-75 hover:opacity-100'>Account</button>
                  <button onClick={() => setShowDropdown(false)} className='focus:outline-none w-full text-sm py-2 hover text-white border-b border-lightest opacity-75 hover:opacity-100'>Log Out</button>
                </div>
              }
            </div>
          </div>
          <div className='px-6 py-3'>
            <div className='flex items-center justify-between'>
              <h1 className='pl-2 text-2xl font-semibold text-white tracking-wider hover:underline'>Recently Played</h1>
              <h2 className='pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3'>See All</h2>
            </div>
              <div className='w-full flex flex-wrap'>
                {data.recents.map((elem) => (
                  <div className="p-2 w-48 relative">
                    <div className="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100">
                      <div className='bg-green rounded-full h-10 w-10 flex items-center justify-center'>
                        <FaPlay className='text-white text-1xl'/>
                      </div>
                    </div>
                    <div className="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                      <img src={elem.src} className='h-auto w-full shadow mb-2' />
                      <h1 className='text-sm font-semibold text-white tracking wide'>{elem.title}</h1>
                      <h2 className='text-xs text-lightest tracking-wide pb-5'>{elem.artist}</h2>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className='px-6 py-3'>
            <div className='pl-2'>
              <h1 className='text-2xl font-semibold text-white tracking-wider hover:underline'>Made for Raghav</h1>
              <h2 className=' text-lightest'>Get better recommendations the more you listen.</h2>
            </div>
              <div className='w-full flex flex-wrap'>
                {data.customs.map((elem) => (
                  <div className="p-2 w-48 relative">
                    <div className="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100">
                      <div className='bg-green rounded-full h-10 w-10 flex items-center justify-center'>
                        <FaPlay className='text-white text-1xl'/>
                      </div>
                    </div>
                    <div className="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                      <img src={elem.src} className='h-auto w-full shadow mb-2' />
                      <h1 className='text-sm font-semibold text-white tracking wide'>{elem.title}</h1>
                      <h2 className='text-xs text-lightest tracking-wide pb-5'>{elem.artist}</h2>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[12vh] bg-light'>

      </div>
    </div>
  )
}

export default App
