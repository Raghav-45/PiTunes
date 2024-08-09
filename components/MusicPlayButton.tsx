'use client'

import { FC } from 'react'
import { useGenerationStore } from './GenerationStore'
import { Icons } from './Icons'

interface MusicPlayButtonProps {
  name: string
  artist: string
  image: string
  type?: 'track' | 'album' | 'artist' | 'single'
  songId?: string
  source?: string
}

const MusicPlayButton: FC<MusicPlayButtonProps> = ({
  name,
  artist,
  image,
  type,
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

  const getSingleAudioSource = async () => {
    try {
      // Fetch the audio source from the API
      if (songId) {
        const response = await fetch(
          `https://saavn.dev/api/albums?id=${songId}`
        )
        const data = await response.json()

        // Assuming the API response contains the audio source URL
        const audioSource =
          data?.data.songs[0].downloadUrl[
            data?.data.songs[0].downloadUrl.length - 1
          ].url // Change 'audioUrl' to the correct field name from the API response
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

    if (type == 'track') {
      await getAudioSource()
    } else if (type == 'single') {
      await getSingleAudioSource()
    }
  }
  return (
    // <div className="absolute playButton bg-green-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0">
    <>
      {(source || songId) && (
        <button
          className="absolute playButton bg-green-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0"
          onClick={handleClick}
        >
          <Icons.Play className="text-white text-1xl" />
        </button>
      )}
    </>
    // </div>
  )
}

export default MusicPlayButton
