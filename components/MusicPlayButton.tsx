'use client'

import { FC } from 'react'
import { useGenerationStore } from './GenerationStore'
import { Icons } from './Icons'
import { cn } from '@/lib/utils'

interface MusicPlayButtonProps {
  name: string
  artist: string
  image: string
  type?: 'track' | 'album' | 'artist' | 'single'
  songId?: string
  source?: string
  overlay?: boolean
  videoId?: string // Optional videoId for YouTube integration
}

const MusicPlayButton: FC<MusicPlayButtonProps> = ({
  name,
  artist,
  image,
  type = 'track',
  songId,
  source,
  overlay,
  videoId,
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

    if (videoId) {
      // If videoId is provided, use YouTube URL
      setAudioSource(`https://www.youtube.com/watch?v=${videoId}`)
    } else if (songId) {
      // If songId is provided, fetch from Saavn API
      await getAudioSource()
    } else if (source) {
      // Use direct source if provided
      setAudioSource(source)
    }
  }
  return (
    <>
      {!overlay ? (
        (source || songId) && (
          <button
            onClick={handleClick}
            className={cn(
              'absolute group-hover:flex right-0 bottom-0 transition-all',
              overlay
                ? 'bg-green-500/75 hover:bg-green-500 rounded-full h-9 w-9 m-2 hidden items-center justify-center'
                : 'bg-green-500 hover:bg-green-400 hover:scale-110 rounded-full h-9 w-9 m-2 hidden items-center justify-center opacity-100'
            )}
          >
            <Icons.Play className="text-white text-sm translate-x-[1.5px]" />
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
