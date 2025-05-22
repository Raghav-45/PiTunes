import Cards from '@/components/Cards'
import TrackList from '@/components/TrackList'
import Image from 'next/image'

// Define interfaces for the API response
interface Image {
  quality: string
  url: string
}

interface Song {
  id: string
  name: string
  image: Image[]
  downloadUrl: {
    quality: string
    url: string
  }[]
  year: string
}

interface AlbumData {
  id: string
  name: string
  image: Image[]
  year: string
  songs: Song[]
}

interface ApiResponse {
  success: boolean
  data: AlbumData
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
          {data?.data.image && data.data.image.length > 0 && (
            <Image
              src={data.data.image[data.data.image.length - 1].url}
              className="rounded-lg object-cover"
              layout="fill"
              alt={`Album artwork for ${data?.data.name || 'album'}`}
            />
          )}
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
