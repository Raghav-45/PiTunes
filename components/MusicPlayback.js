import React, { useState, useEffect, createContext, useContext } from 'react'

import { PlayerContext } from '../contexts/ContextApi'

import { AiFillHome, AiFillHeart, AiOutlineArrowDown } from "react-icons/ai"
import { FaPlay, FaPause, FaGg } from "react-icons/fa"
import { BiSearchAlt, BiLibrary, BiShuffle } from "react-icons/bi"
import { BsFillPlusSquareFill } from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp, MdKeyboardArrowDown, MdDevicesOther } from "react-icons/md"
import { RiPictureInPictureFill, RiPlayListFill } from "react-icons/ri"
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io"
import { HiVolumeUp } from "react-icons/hi"
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs"
import { FiRepeat } from "react-icons/fi"

export const MusicPlayback = ((props) => {
  const { MusicName, ArtistName, MusicSourceURL, IsPlaying, setIsPlaying, MusicDuration, setMusicDuration, MusicCurrentTime, setMusicCurrentTime } = PlayerContext()
  const [CurrentAudio, setCurrentAudio] = useState(typeof Audio !== "undefined" && new Audio("https://aac.saavncdn.com/459/b1b2eca1741fbdc13eead21e6978ec33_320.mp4"))

  const [SeekPos, setSeekPos] = useState('')

  function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600)
    var mins = ~~((duration % 3600) / 60)
    var secs = ~~duration % 60

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = ""

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "")
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  function setAudio(url) {
    CurrentAudio.pause()
    setIsPlaying(false)
    setCurrentAudio(null) // Deleting Current Audio
    var audio = new Audio(url)
    audio.ontimeupdate = () => {setMusicCurrentTime(audio.currentTime)}
    setCurrentAudio(audio)
  }
  function controlAudio() {
    IsPlaying ? CurrentAudio.pause() : CurrentAudio.play()
  }

  useEffect(() => {
    setAudio(MusicSourceURL)
  },[MusicSourceURL])

  useEffect(() => {
    setSeekPos(~~((MusicCurrentTime/MusicDuration)*100))
    console.log(SeekPos)
  }, [MusicCurrentTime])

  useEffect(() => {
    CurrentAudio.onloadedmetadata = () => {setMusicDuration(CurrentAudio.duration); console.log(CurrentAudio.duration);}
  }, [CurrentAudio])

  return (
    <div className='w-full h-[12vh] flex items-center justify-between px-3 bg-light border-t border-dark'>
      <div className="flex items-center w-1/4">
        <div>
          {/* <h1 className='text-sm text-white tracking-wide'>{SongName}</h1> */}
          <h1 className='text-sm text-white tracking-wide'>{MusicName}</h1>
          <h2 className='text-xs text-lightest tracking-wide'>{ArtistName}</h2>
          {/* <h2 className='text-xs text-lightest tracking-wide'>{MusicSourceURL}</h2> */}
        </div>
        <AiFillHeart className='text-xl text-green-500 mx-4'/>
        <RiPictureInPictureFill className='text-xl text-lightest hover:text-white'/>
      </div>
      <div className='flex flex-col justify-center w-2/4 items-center'>
        <div className='flex items-center'>
          <button className='text-lg mx-3 text-lightest hover:text-white'><BiShuffle/></button>
          <button className='text-lightest mx-3 hover:text-white'><BsFillSkipStartFill className='text-2xl'/></button>
          {/* <button onClick={() => {setIsPlaying(!IsPlaying); controlAudio();}} className='rounded-full h-8 w-8 flex items-center justify-center mx-5 border-lightest border text-lightest hover:text-white'>{IsPlaying ? <FaPause/> : <FaPlay/>}</button> */}
          {/* <button className='rounded-full h-8 w-8 flex items-center justify-center mx-5 border-lightest border text-lightest hover:text-white'><FaPlay/></button> */}
          {/* <div className='bg-green-500 rounded-full h-9 w-9 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-100'><FaPlay className='text-white text-sm'/></div> */}
          <button onClick={() => {setIsPlaying(!IsPlaying); controlAudio();}}><div className='bg-green-500 hover:bg-green-400 rounded-full h-9 w-9 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-100'>{IsPlaying ? <FaPause className='text-white text-sm'/> : <FaPlay className='text-white text-sm'/>}</div></button>
          <button className='text-lightest mx-3 hover:text-white'><BsFillSkipEndFill className='text-2xl'/></button>
          <button className='text-lg mx-3 text-lightest hover:text-white'><FiRepeat/></button>
        </div>
        <div className='w-3/4 flex items-center justify-center mt-1'>
          {/* <p className='text-xs text-lightest mr-1'>00:00</p> */}
          <p className='text-xs text-lightest mr-1'>{fancyTimeFormat(MusicCurrentTime)}</p>
          <div className="w-full h-1 bg-lightest rounded-full flex items-center">
            {/* <div className='h-1 rounded-full bg-green-500 w-[18%]'></div>(MusicCurrentTime/MusicDuration)*100 */}
            <div className='h-1 rounded-full bg-green-500 w-[0%] transition-all delay-0 duration-300 ease-in-out' Style={`width: ${SeekPos}%`}></div>
            <div className='h-4 w-4 bg-white rounded-full ml-1 -translate-x-3 shadow'></div>
          </div>
          <p className='text-xs text-lightest ml-1'>{fancyTimeFormat(MusicDuration)}</p>
          {/* <p className='text-xs text-lightest ml-1'>5:00</p> */}
        </div>
      </div>
      <div className="flex items-center w-1/4 justify-end">
        <RiPlayListFill className='text-lightest hover:text-white'/>
        <MdDevicesOther className='text-xl text-lightest mx-3 hover:text-white'/>
        <HiVolumeUp className='text-xl text-lightest hover:text-white'/>
        <div className='w-20 ml-1 bg-lightest rounded-full h-1'></div>
      </div>
    </div>
  )
})
MusicPlayback.displayName = 'MusicPlayback'