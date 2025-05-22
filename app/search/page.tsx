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
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-2xl">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
            type="text"
            placeholder="What do you want to listen to?"
            className="w-full px-12 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-full focus:outline-none"
          />
          <SearchIcon
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
          />
        </div>
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50"
        >
          Search
        </button>
      </div>
      <div className="pb-8" />
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
                      type={elem.type == 'artist' ? 'artist' : 'track'}
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
                    songId={song.id}
                    type="track"
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
                  <Link key={album.id} href={`/album/${album.id}`}>
                    <Cards
                      key={album.id}
                      name={album.title}
                      extra={album.artist}
                      image={album.image[album.image.length - 1].url}
                      isPlayable={false}
                      type="album"
                    />
                  </Link>
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
                      type="artist"
                    />
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* {data.playlists.results.length > 0 && (
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
          )} */}
        </div>
      )}
    </div>
  )
}
