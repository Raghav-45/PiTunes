import Cards from '@/components/Cards'
import TrackList from '@/components/TrackList'
import Image from 'next/image'
import Link from 'next/link'

// Define interfaces for the API response
interface Image {
  quality: string
  url: string
}

interface Album {
  id: string
  name: string
  image: Image[]
  year: string
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

interface ArtistData {
  id: string
  name: string
  image: Image[]
  followerCount: number
  topSongs: Song[]
  topAlbums: Album[]
  singles: Album[]
}

interface ApiResponse {
  success: boolean
  data: ArtistData
}

const getArtist = async (query: string): Promise<ApiResponse | null> => {
  try {
    const response = await fetch(`https://saavn.dev/api/artists/${query}`)
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

export default async function ArtistPage({
  params,
}: {
  params: { id: string }
}) {
  const data = await getArtist(params.id)
  return (
    <div className="py-3 px-10 shadow-md">
      <div className="flex items-center mb-6">
        <div className="w-64 h-64 relative mr-6">
          {data?.data.image && data.data.image.length > 0 && (
            <Image
              src={data.data.image[data.data.image.length - 1].url}
              className="rounded-lg object-cover"
              layout="fill"
              alt={`Artist photo of ${data?.data.name || 'artist'}`}
            />
          )}
        </div>
        <div className="gap-2 flex flex-col">
          <h1 className="text-6xl font-bold">{data?.data.name}</h1>
          <h2 className="text-lg">
            {data?.data.followerCount ? convertToLakhs(data.data.followerCount) : '0'} Followers
          </h2>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 ml-2">Songs</h2>
        <div className="w-full mb-8">
          {data?.data.topSongs.map((song, index) => (
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
      <div>
        <h2 className="text-2xl font-semibold ml-2">Albums</h2>
        <div className="w-full flex flex-wrap mb-8">
          {data?.data.topAlbums.map((album, index) => (
            <Link key={album.id} href={`/album/${album.id}`}>
              <Cards
                key={album.id}
                name={album.name}
                extra={album.year}
                image={album.image[album.image.length - 1].url}
                isPlayable={false}
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold ml-2">Singles</h2>
        <div className="w-full flex flex-wrap mb-8">
          {data?.data.singles.map((album, index) => (
            <Cards
              key={album.id}
              name={album.name}
              extra={album.year}
              image={album.image[album.image.length - 1].url}
              isPlayable={true}
              songId={album.id}
              type="single"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
