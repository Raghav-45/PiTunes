'use client'

import { FC } from 'react'
import { useGenerationStore } from './GenerationStore'
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
  const { setName, setArtist, setImage, setVideoId } = useGenerationStore()
  return (
    // <div className="absolute playButton bg-green-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0">
    <button
      className="absolute playButton bg-green-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0"
      onClick={() => {
        setName(name)
        setArtist(artist)
        setImage(image)
        setVideoId(videoId)
      }}
    >
      <Icons.Play className="text-white text-1xl" />
    </button>
    // </div>
  )
}

export default MusicPlayButton
