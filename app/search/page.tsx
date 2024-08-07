'use client'

import Cards from '@/components/Cards'
import SectionHeading from '@/components/SectionHeading'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Define interfaces for the API response
interface Image {
  quality: string
  url: string
}

interface Album {
  id: string
  title: string
  image: Image[]
  artist: string
  url: string
  type: string
  description: string
  year: string
  language: string
  songIds: string
}

interface Song {
  id: string
  title: string
  image: Image[]
  album: string
  url: string
  type: string
  description: string
  primaryArtists: string
  singers: string
  language: string
}

interface Artist {
  id: string
  title: string
  image: Image[]
  type: string
  description: string
  position: number
}

interface Playlist {
  id: string
  title: string
  image: Image[]
  url: string
  language: string
  type: string
  description: string
}

interface TopQuery {
  id: string
  title: string
  image: Image[]
  album: string
  url: string
  type: string
  description: string
  primaryArtists: string
  singers: string
  language: string
}

interface SearchResults {
  albums: {
    results: Album[]
    position: number
  }
  songs: {
    results: Song[]
    position: number
  }
  artists: {
    results: Artist[]
    position: number
  }
  playlists: {
    results: Playlist[]
    position: number
  }
  topQuery: {
    results: TopQuery[]
    position: number
  }
}

interface ApiResponse {
  success: boolean
  data: SearchResults
}

const searchSongs = async (query: string): Promise<ApiResponse | null> => {
  try {
    const response = await fetch(`https://saavn.dev/api/search?query=${query}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: ApiResponse = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

export default function Search() {
  const [data, setData] = useState<SearchResults | null>(null)
  const [query, setQuery] = useState<string>('')

  const handleSearch = async () => {
    const result = await searchSongs(query)
    if (result && result.success) {
      setData(result.data)
    }
  }

  return (
    <div>
      <div className="flex-auto h-8 pl-4">
        <div className="relative h-full w-80">
          <span className="absolute inset-y-0 left-0 flex items-center">
            <SearchIcon className="p-1 focus:outline-none text-black focus:shadow-outline w-full h-full" />
          </span>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
            className="shadow appearance-none rounded-full h-full w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="What do you want to listen to?"
          />
        </div>
      </div>
      <button onClick={handleSearch}>Search</button>
      {data && (
        <div>
          {data.topQuery.results.length > 0 && (
            <>
              <SectionHeading name="Top Queries" />
              <div className="w-full flex flex-wrap mb-8">
                {data.topQuery.results.map((elem) => (
                  <Link key={elem.id} href={`/artist/${elem.id}`}>
                    <Cards
                      key={elem.id}
                      name={elem.title}
                      extra={elem.description}
                      image={elem.image[elem.image.length - 1].url}
                      isPlayable={false}
                      rounded={elem.type == 'artist'}
                    />
                  </Link>
                ))}
              </div>
            </>
          )}

          {data.songs.results.length > 0 && (
            <>
              <SectionHeading name="Songs" />
              <div className="w-full flex flex-wrap mb-8">
                {data.songs.results.map((song) => (
                  <Cards
                    key={song.id}
                    name={song.title}
                    extra={song.primaryArtists}
                    image={song.image[song.image.length - 1].url}
                    isPlayable={true}
                    videoId={'elem.videoId'}
                  />
                ))}
              </div>
            </>
          )}

          {data.albums.results.length > 0 && (
            <>
              <SectionHeading name="Albums" />
              <div className="w-full flex flex-wrap mb-8">
                {data.albums.results.map((album) => (
                  <Cards
                    key={album.id}
                    name={album.title}
                    extra={album.artist}
                    image={album.image[album.image.length - 1].url}
                    isPlayable={false}
                  />
                ))}
              </div>
            </>
          )}

          {data.artists.results.length > 0 && (
            <>
              <SectionHeading name="Artists" />
              <div className="w-full flex flex-wrap mb-8">
                {data.artists.results.map((artist) => (
                  <Link key={artist.id} href={`/artist/${artist.id}`}>
                    <Cards
                      key={artist.id}
                      name={artist.title}
                      extra={artist.description}
                      image={artist.image[artist.image.length - 1].url}
                      isPlayable={false}
                      rounded
                    />
                  </Link>
                ))}
              </div>
            </>
          )}

          {data.playlists.results.length > 0 && (
            <>
              <SectionHeading name="Playlists" />
              <div className="w-full flex flex-wrap mb-8">
                {data.playlists.results.map((playlist) => (
                  <Cards
                    key={playlist.id}
                    name={playlist.title}
                    extra={playlist.description}
                    image={playlist.image[playlist.image.length - 1].url}
                    isPlayable={false}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
