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
  overlay?: boolean
}

const MusicPlayButton: FC<MusicPlayButtonProps> = ({
  name,
  artist,
  image,
  type = 'track',
  songId,
  source,
  overlay,
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
    <>
      {!overlay ? (
        (source || songId) && (
          <button
            className="absolute playButton bg-green-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0"
            onClick={handleClick}
          >
            <Icons.Play className="text-white text-1xl" />
          </button>
        )
      ) : (
        <div className="absolute flex flex-row h-full w-full top-0 inset-x-0">
          {source && (
            <div
              className="flex-auto h-full w-full cursor-pointer"
              onClick={handleClick}
            ></div>
          )}
          <div className="flex flex-none h-full w-auto aspect-square text-white items-center justify-center mr-1"></div>
        </div>
      )}
    </>
  )
}

export default MusicPlayButton
