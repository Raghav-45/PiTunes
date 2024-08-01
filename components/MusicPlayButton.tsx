'use client'

import { FC } from 'react'
// import { useGenerationStore } from './GenerationStore'
import { Icons } from './Icons'

interface MusicPlayButtonProps {
  name: string
  artist: string
  image: string
  videoId: string
}

const MusicPlayButton: FC<MusicPlayButtonProps> = ({
  name,
  artist,
  image,
  videoId,
}) => {
//   const { setName, setArtist, setImage, setVideoId } = useGenerationStore()
  return (
    <button
    //   onClick={() => {
    //     setName(name)
    //     setArtist(artist)
    //     setImage(image)
    //     setVideoId(videoId)
    //   }}
    >
      <Icons.Play className="text-white text-1xl" />
    </button>
  )
}

export default MusicPlayButton
