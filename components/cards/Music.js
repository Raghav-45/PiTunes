import * as React from 'react'
import { FaPlay } from "react-icons/fa"

export const MusicCard = ((props) => {
  const elem = props.Data
  const Image = props.Image
  const Name = props.Name
  const Artist = props.Artist

  return (
    <div className="group p-2 w-48 relative">
      <div className="bg-gray-300 dark:bg-light w-full h-auto p-4 rounded-lg shadow-md">
        <div className='relative h-36 w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 rounded-md'>
          <div className='absolute playButton bg-green-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0'>
            {/* <button onClick={() => {setAudio();}}><FaPlay className='text-white text-1xl'/></button> */}
            {/* <button onClick={() => {setAudio(elem.downloadUrl[elem.downloadUrl.length-1].link);}}><FaPlay className='text-white text-1xl'/></button> */}
            <button onClick={props.onPlayButton} ><FaPlay className='text-white text-1xl'/></button>
          </div>
          <img src={Image} className='h-full w-full rounded-md' />
        </div>
        <h1 className='text-sm font-semibold text-gray-900 dark:text-white tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis'>{Name}</h1>
        <h2 className='text-xs text-gray-500 dark:text-lightest tracking-wide pb-5'>{Artist}</h2>
      </div>
    </div>
  )
})
MusicCard.displayName = 'MusicCard'