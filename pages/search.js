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
              <MusicCard Name={elem.title} Artist={elem.artists[0].name} Image={elem.thumbnails[elem.thumbnails.length - 1].url} onPlayButton={() => {setMusicName(elem.title); setArtistName(elem.artists[0].name); setMusicSourceURL(elem.videoId);}} key={elem.key} />
            ))}
          </div>
        </div>
        :
        <p>Search Something...</p>}
    </div>
  )
}