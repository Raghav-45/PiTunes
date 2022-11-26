import * as React from 'react'
import { MusicCard } from './cards/Music'

export const MusicSection = React.forwardRef((props) => {
  const data = props.Data
  const SectionTitle = props.SectionTitle
  return (
    <div className='px-6 py-3'>
      <div className='flex items-center justify-between'>
        <h1 className='pl-2 text-2xl font-semibold text-gray-900 dark:text-white tracking-wider hover:underline'>{SectionTitle}</h1>
        <h2 className='pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3'>See All</h2>
      </div>
      <div className='w-full flex flex-wrap'>
        {data.map((elem) => (
          <MusicCard Data={elem}/>
        ))}
      </div>
    </div>
  )
})