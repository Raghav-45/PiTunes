'use client'

import { FC } from 'react'
import { useGenerationStore } from './GenerationStore'

interface OverlayPlayButtonProps {
  name: string
  artist: string
  image: string
  source?: string
  videoId?: string
}

const OverlayPlayButton: FC<OverlayPlayButtonProps> = ({
  name,
  artist,
  image,
  source,
  videoId,
}) => {
  const { setName, setArtist, setImage, setAudioSource, setVideoId } =
    useGenerationStore()
  return (
    <div className="absolute flex flex-row h-full w-full top-0 inset-x-0">
      {source && (
        <div
          className="flex-auto h-full w-full cursor-pointer"
          onClick={() => {
            setName(name)
            // setArtist(artist)
            setArtist(source)
            setImage(image)
            setAudioSource(source)
            setVideoId(videoId)
          }}
        ></div>
      )}
      <div className="flex flex-none h-full w-auto aspect-square text-white items-center justify-center mr-1"></div>
    </div>
  )
}

export default OverlayPlayButton
