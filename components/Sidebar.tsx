import { FC } from 'react'
import {
  HomeIcon,
  MagnifyingGlassIcon,
  TokensIcon,
  PlusIcon,
  HeartFilledIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import {
  HeartIcon,
  HouseIcon,
  ListMusicIcon,
  SearchIcon,
  ShieldAlertIcon,
  SquarePlusIcon,
} from 'lucide-react'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="w-56 bg-gray-100 sticky top-0 dark:bg-black h-full flex-none">
      <div className="p-6">
        <img
          className="h-10"
          alt="Logo"
          src="https://pitunes.vercel.app/assets/Spotify_Logo_RGB_Green.png"
        />
      </div>
      <div className="flex flex-col gap-y-5 mx-2">
        <div>
          <Link
            href="/home"
            className="w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start text-green-500 dark:text-white dark:bg-light shadow-md"
          >
            <HouseIcon className="h-4 w-4 mr-3" />
            <p>Home</p>
          </Link>
          <Link
            href="/search"
            className="w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start dark:text-white dark:hover:bg-light"
          >
            <SearchIcon className="h-4 w-4 mr-3" />
            <p>Search</p>
          </Link>
          <Link
            href="/library"
            className="w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start dark:text-white dark:hover:bg-light"
          >
            <ListMusicIcon className="h-4 w-4 mr-3" />
            <p>Your Library</p>
          </Link>
          <Link
            href="/library"
            className="w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start dark:text-white dark:hover:bg-light"
          >
            <ShieldAlertIcon className="h-4 w-4 mr-3" />
            <p>About Us</p>
          </Link>
        </div>
        <div>
          <h6 className="mx-3 mb-2 text-xs text-gray-100 dark:text-lightest tracking-widest uppercase">
            PLAYLISTS
          </h6>
          <button className="w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start text-gray-500 dark:text-white hover:text-green-500 hover:bg-white dark:hover:bg-light">
            <SquarePlusIcon className="h-4 w-4 mr-3" />
            <p>Create Playlist</p>
          </button>
          <button className="w-full font-semibold focus:outline-none text-sm rounded-lg px-3 py-2 flex items-center justify-start text-gray-500 dark:text-white hover:text-green-500 hover:bg-white dark:hover:bg-light">
            <HeartIcon className="h-4 w-4 mr-3" />
            <p>Liked Songs</p>
          </button>
        </div>
      </div>

      <div className="flex mx-2 my-3">
        <span className="block bg-border h-[1px] w-full" />
      </div>

      <div className="flex flex-col mx-5">
        <p className="text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1">
          Welcome to Premium
        </p>
        <p className="text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1">
          Zombie Mood
        </p>
        <p className="text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1">
          Bass~1
        </p>
        <p className="text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1">
          All New Indie
        </p>
        <p className="text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1">
          Classic Road Trip Songs
        </p>
        <p className="text-gray-500 hover:text-gray-800 dark:text-lightest dark:hover:text-white text-sm py-1">
          Lana Del R
        </p>
      </div>
    </div>
  )
}

export default Sidebar
