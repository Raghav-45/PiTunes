import { PlayerContext } from '../contexts/ContextApi'
import ReactPlayer from 'react-player/youtube'

export const YTPlayer = ((props) => {
  const VideoID = props.VideoID
  const { MusicSourceURL, YTPlayer, setYTPlayer, IsPlaying, setIsPlaying, MusicDuration, setMusicDuration, MusicCurrentTime, setMusicCurrentTime } = PlayerContext()

  const opts = {
    height: '72',
    width: '128',
    playerVars: {
      autoplay: 1,
    },
  }

  const onYTReady = (e) => {
    e.target.pauseVideo();
  }

  return (
    // load the YouTube player
    <ReactPlayer url={`https://www.youtube.com/watch?v=${MusicSourceURL}`} playing={IsPlaying} controls={false} onDuration={(e) => setMusicDuration(e)} muted={false} onProgress={(e) => setMusicCurrentTime(e.playedSeconds)} />
  )
})
YTPlayer.displayName = 'YTPlayer'