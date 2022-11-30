import React from 'react'
import { PlayerContext } from '../contexts/ContextApi'
import { MusicCard } from '../components/cards/Music'

export default function SearchPage() {
  const { SearchResults, setMusicName, setArtistName, setMusicSourceURL } = PlayerContext()
  return (
    <div className='dark:text-white'>
      {!SearchResults.Tracks?.length == 0 ? 
        <div className='px-6 py-3'>
          <div className='flex items-center justify-between'>
            <h1 className='pl-2 py-1 text-2xl font-semibold text-gray-900 dark:text-white tracking-wider hover:underline'>Top Results</h1>
          </div>
          <div className='w-full flex flex-wrap'>
            {SearchResults.Tracks.map((elem) => (
              <MusicCard Name={elem.name} Artist={elem.artist} Image={elem.image[1].link} onPlayButton={() => {setMusicName(elem.name.replace(/&quot;/g, '\"')); setArtistName(elem.primaryArtists); setMusicSourceURL(elem.downloadUrl[elem.downloadUrl.length-1].link);}} />
            ))}
          </div>
        </div>
        :
        <p>Search Something...</p>}
    </div>
  )
}