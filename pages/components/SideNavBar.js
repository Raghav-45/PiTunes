import { AiFillHome, AiFillHeart, AiOutlineArrowDown } from "react-icons/ai"
import { BiSearchAlt, BiLibrary, BiShuffle } from "react-icons/bi"
import { BsFillPlusSquareFill } from "react-icons/bs"

const SideBar = () => {
  const SpotifyLogo = '/assets/Spotify_Logo_RGB_Green.png'
  const DailyMix1 = '/assets/DailyMix1.png'
  const DailyMix2 = '/assets/DailyMix1.png'
  const DailyMix3 = '/assets/DailyMix1.png'
  const DailyMix4 = '/assets/DailyMix1.png'
  const DailyMix5 = '/assets/DailyMix1.png'
  const TestAudio = '/assets/TestAudio.mp3'
  
  return (
    <div className='w-56 bg-gray-100 dark:bg-black h-full flex-none'>
      <div className='p-6'>
        <img className='h-10' alt="Girl in a jacket" src={SpotifyLogo}></img>
      </div>
      <div className="mx-2 mb-5">
        <button className='w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start text-green-500 dark:text-white dark:bg-light shadow-md'>
          <i className='material-icons'> <AiFillHome className='h-4 w-4 mr-3'/> </i>
          <p>Home</p>
        </button>
        <button className='w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start text-gray-500 dark:text-white hover:text-green-500 hover:bg-white dark:hover:bg-light'>
          <i className='material-icons'> <BiSearchAlt className='h-4 w-4 mr-3'/> </i>
          <p>Search</p>
        </button>
        <button className='w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start text-gray-500 dark:text-white hover:text-green-500 hover:bg-white dark:hover:bg-light'>
          <i className='material-icons'> <BiLibrary className='h-4 w-4 mr-3'/> </i>
          <p>Library</p>
        </button>
      </div>

      <div className='mx-2'>
        <h1 className='mb-3 text-xs text-gray-100 dark:text-lightest tracking-widest uppercase'>Playlists</h1>
        <button className='w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start text-gray-500 dark:text-white hover:text-green-500 hover:bg-white dark:hover:bg-light'>
          <i> <BsFillPlusSquareFill className='h-4 w-4 mr-3'/> </i>
          <p>Create Playlist</p>
        </button>
        <button className='w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start text-gray-500 dark:text-white hover:text-green-500 hover:bg-white dark:hover:bg-light'>
          <i> <AiFillHeart className='h-4 w-4 mr-3'/> </i>
          <p>Liked Songs</p>
        </button>
        <div className='h-px w-full bg-gray-200 dark:bg-light my-3'></div>
      </div>
      <div className="mx-5">
        <div className="w-full h-60 overflow-y-scroll">
          <p className='text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1'>Welcome to Premium</p>
          <p className='text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1'>Zombie Mood</p>
          <p className='text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1'>Bass~1</p>
          <p className='text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1'>All New Indie</p>
          <p className='text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1'>Classic Road Trip Songs</p>
          <p className='text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1'>Lana Del R</p>
        </div>
        <button className='flex items-center justify-start text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white py-2'>
          <i className='mr-3 rounded-full border text-sm border-gray-500 dark:border-lightest'><AiOutlineArrowDown/></i>
          <p className='text-sm font-semibold'>Install App</p>
        </button>
      </div>
    </div>
  )
}

export default SideBar