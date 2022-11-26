import * as React from 'react'

import { AiFillHome, AiFillHeart, AiOutlineArrowDown } from "react-icons/ai"
import { FaPlay, FaPause } from "react-icons/fa"
import { BiSearchAlt, BiLibrary, BiShuffle } from "react-icons/bi"
import { BsFillPlusSquareFill } from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp, MdKeyboardArrowDown, MdDevicesOther } from "react-icons/md"
import { RiPictureInPictureFill, RiPlayListFill } from "react-icons/ri"
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io"
import { HiVolumeUp } from "react-icons/hi"
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs"
import { FiRepeat } from "react-icons/fi"

export const MusicSection = React.forwardRef((props) => {
  const data = props.Data
  const SectionTitle = props.SectionTitle
  return (
    <div className='px-6 py-3'>
      <div className='flex items-center justify-between'>
        <h1 className='pl-2 text-2xl font-semibold text-gray-900 dark:text-white tracking-wider hover:underline'>Recently Played</h1>
        <h2 className='pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3'>See All</h2>
      </div>
      <div className='w-full flex flex-wrap'>
        {data.map((elem) => (
          <div key={elem.key} className="group p-2 w-48 relative">
            <div className="bg-gray-300 dark:bg-light w-full h-auto p-4 rounded-lg shadow-md">
              {/* <div className='relative h-auto w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 rounded-md'> */}
              <div className='relative h-36 w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 rounded-md'>
                <div className='absolute playButton bg-green-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0'>
                  <button onClick={() => {setAudio();}}><FaPlay className='text-white text-1xl'/></button>
                </div>
                <img src={elem.src} className='h-full w-full rounded-md' />
              </div>
              <h1 className='text-sm font-semibold text-gray-900 dark:text-white tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis'>{elem.title}</h1>
              <h2 className='text-xs text-gray-500 dark:text-lightest tracking-wide pb-5'>{elem.artist}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})