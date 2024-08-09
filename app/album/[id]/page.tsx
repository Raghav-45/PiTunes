import Cards from '@/components/Cards'
import TrackList from '@/components/TrackList'
import Image from 'next/image'

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

const getAlbum = async (query: string): Promise<ApiResponse | null> => {
  try {
    const response = await fetch(`https://saavn.dev/api/albums?id=${query}`)
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

function convertToLakhs(followers: number): string {
  const lakhs = followers / 1000_000
  return lakhs.toFixed(2) + 'M' // Format to 2 decimal places
}

export default async function AlbumPage({
  params,
}: {
  params: { id: string }
}) {
  const data = await getAlbum(params.id)
  return (
    <div className="py-3 px-10 shadow-md">
      <div className="flex items-center mb-6">
        <div className="w-64 h-64 relative mr-6">
          <Image
            src={data?.data.image[data?.data.image.length - 1].url}
            className="rounded-lg object-cover"
            layout="fill"
          />
        </div>
        <div className="gap-2 flex flex-col">
          <h1 className="text-6xl font-bold">{data?.data.name}</h1>
          <h2 className="text-lg">{data?.data.year}</h2>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 ml-2">Songs</h2>
        <div className="w-full mb-8">
          {data?.data.songs.map((song, index) => (
            <TrackList
              name={song.name}
              image={song.image[song.image.length - 1].url}
              extra={song.year}
              source={song.downloadUrl[song.downloadUrl.length - 1].url}
              key={song.name}
              songId={song.id}
              isPlayable={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
