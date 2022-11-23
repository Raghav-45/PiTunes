import React from 'react'
import { FaPlay } from "react-icons/fa"

export const MusicGroup = React.forwardRef((props, ref) => {
  const Heading = props.Heading
  const Data = props.Data

  return (
    <div className='px-6 py-3'>
      <div className='flex items-center justify-between'>
        <h1 className='pl-2 text-2xl font-semibold text-white tracking-wider hover:underline'>{Heading}</h1>
        <h2 className='pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3'>See All</h2>
      </div>
        <div className='w-full flex flex-wrap'>
          {Data.map((elem) => (
            <div className="p-2 w-48 relative">
              <div className="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100">
                <div className='bg-green rounded-full h-10 w-10 flex items-center justify-center'>
                  <FaPlay className='text-white text-1xl'/>
                </div>
              </div>
              <div className="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                <img src={elem.image} className='h-auto w-full shadow mb-2 rounded-sm' />
                <h1 className='text-sm font-semibold text-white tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis'>{elem.title}</h1>
                <h2 className='text-xs text-lightest tracking-wide pb-5'>{elem.type}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
})