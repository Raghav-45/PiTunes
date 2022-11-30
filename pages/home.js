import React from 'react'

import { AiFillHome, AiFillHeart, AiOutlineArrowDown } from "react-icons/ai"
import { FaPlay, FaPause } from "react-icons/fa"
import { BiSearchAlt, BiLibrary, BiShuffle } from "react-icons/bi"
import { BsFillPlusSquareFill } from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowDown, MdDevicesOther } from "react-icons/md"
import { RiPictureInPictureFill, RiPlayListFill } from "react-icons/ri"
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io"
import { HiVolumeUp } from "react-icons/hi"
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs"
import { FiRepeat } from "react-icons/fi"

export default function HomePage() {
  
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
      {src: '/assets/DailyMix1.png', title: 'Daily Mix 1', artist: 'By Spotify', key: 'spotify1'},
      {src: '/assets/DailyMix1.png', title: 'Daily Mix 2', artist: 'By Spotify', key: 'spotify2'},
      {src: '/assets/DailyMix1.png', title: 'Daily Mix 3', artist: 'By Spotify', key: 'spotify3'},
      {src: '/assets/DailyMix1.png', title: 'Daily Mix 4', artist: 'By Spotify', key: 'spotify4'},
      {src: '/assets/DailyMix1.png', title: 'Daily Mix 5', artist: 'By Spotify', key: 'spotify5'},
    ],
    customs: [
      {src: '/assets/DailyMix1.png', title: 'Daily Mix 1', artist: 'By Spotify', key: 'anotherspotify1'},
      {src: '/assets/DailyMix1.png', title: 'Daily Mix 2', artist: 'By Spotify', key: 'anotherspotify2'},
      {src: '/assets/DailyMix1.png', title: 'Daily Mix 3', artist: 'By Spotify', key: 'anotherspotify3'},
      {src: '/assets/DailyMix1.png', title: 'Daily Mix 4', artist: 'By Spotify', key: 'anotherspotify4'},
      {src: '/assets/DailyMix1.png', title: 'Daily Mix 5', artist: 'By Spotify', key: 'anotherspotify5'},
    ],
    play: true,
    Playback: {
      Music: {src: '', title: 'No Loss', artist: 'King'}
    }
  }

  return (<>
    {/* <div className='dark:text-white'>HomePage</div> */}
    <div className='px-6 py-3'>
      <div className='flex items-center justify-between'>
        <h1 className='pl-2 text-2xl font-semibold text-white tracking-wider hover:underline'>Recently Played</h1>
        <h2 className='pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3'>See All</h2>
      </div>
      <div className='w-full flex flex-wrap'>
        {data.recents.map((elem) => (
          <div key={elem.key} className="group p-2 w-48 relative">
            <div className="bg-light w-full h-auto p-4 rounded-lg shadow-md">
              {/* <div className='relative h-auto w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 rounded-md'> */}
              <div className='relative h-36 w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 rounded-md'>
                <div className='absolute playButton bg-green rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0'>
                  <button onClick={() => {setAudio();}}><FaPlay className='text-white text-1xl'/></button>
                </div>
                <img src={elem.src} className='h-full w-full rounded-md' />
              </div>
              <h1 className='text-sm font-semibold text-white tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis'>{elem.title}</h1>
              <h2 className='text-xs text-lightest tracking-wide pb-5'>{elem.artist}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* <div className='px-6 py-3'>
      <div className='flex items-center justify-between'>
        <h1 className='pl-2 text-2xl font-semibold text-white tracking-wider hover:underline'>Suggested artists</h1>
        <h2 className='pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3'>See All</h2>
      </div>
      <div className='w-full flex flex-wrap'>
        {HomepageData.data.results.artist_recos.slice(0, HomepageData.data.results.artist_recos.length).reverse().slice(0, 7).map((elem) => (
          <div key={elem.id} className="group p-2 w-48 relative">
            <div className="bg-light w-full h-auto p-4 rounded-lg shadow-md">
              <div className='relative h-36 w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 rounded-full'>
                <div className='absolute playButton bg-green rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0'>
                  <button><FaPlay className='text-white text-1xl'/></button>
                </div>
                <img src={elem.image} className='h-full w-full rounded-full' />
              </div>
              <h1 className='text-sm font-semibold text-white tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis'>{elem.title}</h1>
              <h2 className='text-xs text-lightest tracking-wide pb-5'>{elem.subtitle}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='px-6 py-3'>
      <div className='flex items-center justify-between'>
        <h1 className='pl-2 text-2xl font-semibold text-white tracking-wider hover:underline'>Radios</h1>
        <h2 className='pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3'>See All</h2>
      </div>
      <div className='w-full flex flex-wrap'>
        {HomepageData.data.results.radio.slice(0, 7).map((elem) => (
          <div key={elem.id} className="group p-2 w-48 relative">
            <div className="bg-light w-full h-auto p-4 rounded-lg shadow-md">
              <div className='relative h-36 w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 rounded-full'>
                <div className='absolute playButton bg-green rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0'>
                  <button><FaPlay className='text-white text-1xl'/></button>
                </div>
                <img src={elem.image} className='h-full w-full rounded-full' />
              </div>
              <h1 className='text-sm font-semibold text-white tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis'>{elem.title}</h1>
              <h2 className='text-xs text-lightest tracking-wide pb-5'>{elem.subtitle}</h2>
            </div>
          </div>
        ))}
      </div>
    </div> */}

    <div className='px-6 py-3'>
      <div className='pl-2'>
        <h1 className='text-2xl font-semibold text-white tracking-wider hover:underline'>Made for Raghav</h1>
        <h2 className=' text-lightest'>Get better recommendations the more you listen.</h2>
      </div>
      <div className='w-full flex flex-wrap'>
        {data.customs.map((elem) => (
          <div key={elem.key} className="group p-2 w-48 relative">
            <div className="bg-light w-full h-auto p-4 rounded-lg shadow-md">
              <div className='relative h-36 w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 rounded-md'>
                <div className='absolute playButton bg-green rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0'>
                  <button><FaPlay className='text-white text-1xl'/></button>
                </div>
                <img src={elem.src} className='h-full w-full rounded-md' />
              </div>
              <h1 className='text-sm font-semibold text-white tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis'>{elem.title}</h1>
              <h2 className='text-xs text-lightest tracking-wide pb-5'>{elem.artist}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* <div className='px-6 py-3'>
      <div className='flex items-center justify-between'>
        <h1 className='pl-2 text-2xl font-semibold text-white tracking-wider hover:underline'>Trending</h1>
        <h2 className='pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3'>See All</h2>
      </div>
      <div className='w-full flex flex-wrap'>
        {JB_Purpose.results.songs.map((elem) => (
          <div key={elem.id} className="group p-2 w-48 relative">
            <div className="bg-light w-full h-auto p-4 rounded-lg shadow-md">
              <div className='relative h-36 w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 rounded-md'>
                <div className='absolute playButton bg-green rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0'>
                  <button onClick={() => {setAudio(elem.downloadUrl[elem.downloadUrl.length-1].link);}}><FaPlay className='text-white text-1xl'/></button>
                </div>
                <img src={elem.image[1].link} className='h-full w-full rounded-md' />
              </div>
              <h1 className='text-sm font-semibold text-white tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis'>{elem.name}</h1>
              <h2 className='text-xs text-lightest tracking-wide pb-5'>{elem.artist}</h2>
            </div>
          </div>
        ))}
      </div>
    </div> */}
  </>)
}