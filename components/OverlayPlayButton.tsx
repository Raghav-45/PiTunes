'use client'

import { FC } from 'react'
import { useGenerationStore } from './GenerationStore'

interface OverlayPlayButtonProps {
  name: string
  artist: string
  image: string
  songId?: string
  source?: string
}

const OverlayPlayButton: FC<OverlayPlayButtonProps> = ({
  name,
  artist,
  image,
  songId,
  source,
}) => {
  const { setName, setArtist, setImage, setAudioSource } = useGenerationStore()

  const getAudioSource = async () => {
    try {
      // Fetch the audio source from the API
      if (songId) {
        const response = await fetch(`https://saavn.dev/api/songs/${songId}`)
        const data = await response.json()

        // Assuming the API response contains the audio source URL
        const audioSource =
          data?.data[0].downloadUrl[data?.data[0].downloadUrl.length - 1].url // Change 'audioUrl' to the correct field name from the API response
        if (audioSource) {
          setAudioSource(audioSource)
        }
      }
    } catch (error) {
      console.error('Error fetching audio source:', error)
    }
  }

  const handleClick = async () => {
    setName(name)
    setArtist(artist)
    setImage(image)

    await getAudioSource()
  }
  return (
    <div className="absolute flex flex-row h-full w-full top-0 inset-x-0">
      {source && (
        <div
          className="flex-auto h-full w-full cursor-pointer"
          onClick={handleClick}
        ></div>
      )}
      <div className="flex flex-none h-full w-auto aspect-square text-white items-center justify-center mr-1"></div>
    </div>
  )
}

export default OverlayPlayButton
