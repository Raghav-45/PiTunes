import YouTube from 'react-youtube'
import { PlayerContext } from '../contexts/ContextApi'

export const YTPlayer = ((props) => {
  const VideoID = props.VideoID
  const { MusicSourceURL } = PlayerContext()

  const opts = {
    height: '72',
    width: '128',
    playerVars: {
      autoplay: 1,
    }
  }

  return (
    // load the YouTube player
    <YouTube videoId={MusicSourceURL} opts={opts} onReady={(e) => e.target.pauseVideo()} />
  )
})
YTPlayer.displayName = 'YTPlayer'