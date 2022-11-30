import { useState } from 'react'
import { useRouter } from 'next/router'

import { AiFillHome, AiFillHeart, AiOutlineArrowDown } from "react-icons/ai"
import { FaPlay, FaPause } from "react-icons/fa"
import { BiSearchAlt, BiLibrary, BiShuffle, BiSearch } from "react-icons/bi"
import { BsFillPlusSquareFill } from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp, MdKeyboardArrowDown, MdDevicesOther } from "react-icons/md"
import { RiPictureInPictureFill, RiPlayListFill } from "react-icons/ri"
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io"
import { HiVolumeUp } from "react-icons/hi"
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs"
import { FiRepeat } from "react-icons/fi"
import { PlayerContext } from '../contexts/ContextApi'

export const TopBar = () => {
  const ProfilePic = '/assets/unnamed.jpg'
  const [ShowDropdown, setShowDropdown] = useState(false)
  const { SearchQuery, setSearchQuery, SearchResults } = PlayerContext()

  const router = useRouter()
  const isSearchPage = router.asPath === '/search'

  return (
    <div className='w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-white/50 dark:bg-dark/70 backdrop-blur-md z-10'>
      <div className="flex h-8 w-20 items-center justify-between">
        <button className='rounded-full bg-gray-100 dark:bg-black w-8 h-8 text-gray-500 dark:text-white opacity-50'>
          <MdKeyboardArrowLeft className='text-3xl'/>
        </button>
        <button className='rounded-full bg-gray-100 dark:bg-black w-8 h-8 text-gray-500 dark:text-white'>
          <MdKeyboardArrowRight className='text-3xl'/>
        </button>
      </div>

      <div className='flex-auto h-8 pl-4'>
        {isSearchPage && 
          <div className="relative h-full w-80">
            <span className="absolute inset-y-0 left-0 flex items-center">
              <BiSearchAlt className="p-1 focus:outline-none focus:shadow-outline w-full h-full"/>
            </span>
            <input value={SearchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} className="shadow appearance-none rounded-full h-full w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="What do you want to listen to?"/>
          </div>
        }
      </div>

      <div className='relative'>
        <button onClick={() => setShowDropdown(!ShowDropdown)} className='focus:outline-none bg-gray-100 dark:bg-light rounded-full h-auto py-1 px-1 w-auto flex items-center'>
          <img src={ProfilePic} className='rounded-full h-6 w-6 mr-2'></img>
          <p className='text-gray-900 dark:text-white font-semibold text-xs mr-2'>Raghav</p>
          {ShowDropdown ? <MdKeyboardArrowUp className='text-gray-900 dark:text-white'/> : <MdKeyboardArrowDown className='text-gray-900 dark:text-white'/>}
        </button>

        {ShowDropdown && 
          <div onClick={() => setShowDropdown(false)} className="absolute bg-gray-100 dark:bg-light w-full rounded mt-1">
            <button onClick={() => setShowDropdown(false)} className='focus:outline-none w-full text-sm py-2 hover text-gray-900 dark:text-white opacity-75 hover:opacity-100'>Account</button>
            <button onClick={() => setShowDropdown(false)} className='focus:outline-none w-full text-sm py-2 hover text-gray-900 dark:text-white opacity-75 hover:opacity-100'>Log Out</button>
            {/* <label onClick={() => setIsDarkMode(!IsDarkMode)} className="inline-flex relative items-center cursor-pointer">
              <input checked type="checkbox" value="" className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark</span>
            </label> */}
          </div>
        }
      </div>
    </div>
  )
}

TopBar.displayName = 'TopBar'
