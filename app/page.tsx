import MusicCard from '@/components/MusicCard'
import SectionHeading from '@/components/SectionHeading'
import { YT_offline, ImagineDragons } from '@/lib/testdata'

const data = {
  pages: [
    { id: 'home', name: 'Home', icon: '' },
    { id: 'search', name: 'Search', icon: '' },
    { id: 'library', name: 'Library', icon: '' },
  ],
  setId: 'home',
  albums: [
    { name: 'drive' },
    { name: 'zombie' },
    { name: 'All New Indie' },
    { name: 'Mellow' },
    { name: 'Classic Road Trip Songs' },
    { name: 'Lana Del R' },
  ],
  showDropdown: false,
  recents: [
    {
      src: '/assets/DailyMix1.jfif',
      title: 'Daily Mix 1',
      artist: 'By Spotify',
      key: 'Spotify1',
    },
    {
      src: '/assets/DailyMix2.jfif',
      title: 'Daily Mix 2',
      artist: 'By Spotify',
      key: 'Spotify2',
    },
    {
      src: '/assets/DailyMix3.jfif',
      title: 'Daily Mix 3',
      artist: 'By Spotify',
      key: 'Spotify3',
    },
    {
      src: '/assets/DailyMix4.jfif',
      title: 'Daily Mix 4',
      artist: 'By Spotify',
      key: 'Spotify4',
    },
    {
      src: '/assets/DailyMix5.jfif',
      title: 'Daily Mix 5',
      artist: 'By Spotify',
      key: 'Spotify5',
    },
  ],
  customs: [
    {
      src: '/assets/DailyMix1.jfif',
      title: 'Daily Mix 1',
      artist: 'By Spotify',
      key: 'CustomSpotify1',
    },
    {
      src: '/assets/DailyMix2.jfif',
      title: 'Daily Mix 2',
      artist: 'By Spotify',
      key: 'CustomSpotify2',
    },
    {
      src: '/assets/DailyMix3.jfif',
      title: 'Daily Mix 3',
      artist: 'By Spotify',
      key: 'CustomSpotify3',
    },
    {
      src: '/assets/DailyMix4.jfif',
      title: 'Daily Mix 4',
      artist: 'By Spotify',
      key: 'CustomSpotify4',
    },
    {
      src: '/assets/DailyMix5.jfif',
      title: 'Daily Mix 5',
      artist: 'By Spotify',
      key: 'CustomSpotify5',
    },
  ],
  play: true,
  Playback: {
    Music: { src: '', title: 'No Loss', artist: 'King' },
  },
}

export default function Home() {
  return (
    <div className="px-6 py-3">
      <SectionHeading name="Recently Played" />
      <div className="w-full flex flex-wrap mb-8">
        {data.recents.map((elem) => (
          <MusicCard
            key={elem.title}
            name={elem.title}
            artist={elem.artist}
            image={`https://pitunes.vercel.app${elem.src}`}
            videoId={'elem.videoId'}
            source="" // Since these are sample data entries with no actual source
          />
        ))}
      </div>

      <SectionHeading
        name="Made for Raghav"
        extra="Get better recommendations the more you listen."
      />
      <div className="w-full flex flex-wrap mb-8">
        {YT_offline[2].contents.map((elem) => (
          <MusicCard
            key={elem.title}
            name={elem.title}
            artist={elem.views}
            image={elem.thumbnails[elem.thumbnails.length - 1].url}
            videoId={'elem.videoId'}
            source={elem.url || ''} // YouTube videos should have a URL
          />
        ))}
      </div>

      <SectionHeading
        name="Made for Raghav"
        extra="Get better recommendations the more you listen."
      />
      <div className="w-full flex flex-wrap mb-8">
        {YT_offline[2].contents.map((elem) => (
          <MusicCard
            key={elem.title}
            name={elem.title}
            artist={elem.views}
            image={elem.thumbnails[elem.thumbnails.length - 1].url}
            videoId={'elem.videoId'}
            source={elem.url || ''} // YouTube videos should have a URL
          />
        ))}
      </div>

      <SectionHeading name="Imagine Dragons" />
      <div className="w-full flex flex-wrap mb-8">
        {ImagineDragons.data.songs.results.map((elem) => (
          <MusicCard
            key={elem.title}
            name={elem.title}
            artist={elem.primaryArtists}
            image={elem.image[elem.image.length - 1].url}
            videoId={'elem.videoId'}
            source={elem.downloadUrl?.[0]?.url || ''} // Use first download URL if available
          />
        ))}
      </div>
    </div>
  )
}
