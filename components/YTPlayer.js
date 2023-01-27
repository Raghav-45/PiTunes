import YouTube from 'react-youtube'
import { PlayerContext } from '../contexts/ContextApi'
import ReactPlayer from 'react-player/youtube'

export const YTPlayer = ((props) => {
  const VideoID = props.VideoID
  const { MusicSourceURL, YTPlayer, setYTPlayer, IsPlaying } = PlayerContext()

  const opts = {
    height: '72',
    width: '128',
    playerVars: {
      autoplay: 1,
    },
  }

  const onYTReady = (e) => {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  }

  return (
    // load the YouTube player
    // <YouTube videoId={MusicSourceURL} opts={opts} onReady={onYTReady} />
    <ReactPlayer url={`https://www.youtube.com/watch?v=${MusicSourceURL}`} playing={'true'} />
  )
})
YTPlayer.displayName = 'YTPlayer'