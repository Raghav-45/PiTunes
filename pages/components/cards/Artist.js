import * as React from 'react'
import { FaPlay } from "react-icons/fa"

export const ArtistCard = React.forwardRef((props) => {
  const elem = props.Data
  return (
    <div key={elem.id} className="group p-2 w-48 relative">
      <div className="bg-light w-full h-auto p-4 rounded-lg shadow-md">
        <div className='relative h-36 w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 rounded-full'>
          <div className='absolute playButton bg-green-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0'>
            <button><FaPlay className='text-white text-1xl'/></button>
          </div>
          <img src={elem.image} className='h-full w-full rounded-full' />
        </div>
        <h1 className='text-sm font-semibold text-white tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis'>{elem.title}</h1>
        <h2 className='text-xs text-lightest tracking-wide pb-5'>{elem.subtitle}</h2>
      </div>
    </div>
  )
})