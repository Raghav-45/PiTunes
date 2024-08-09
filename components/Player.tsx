'use client'

import { PictureInPicture2Icon } from 'lucide-react'

import { AiFillHeart } from 'react-icons/ai'
import { FaPause, FaPlay } from 'react-icons/fa'
import { BiShuffle } from 'react-icons/bi'
import { MdDevicesOther } from 'react-icons/md'
import { RiPlayListFill } from 'react-icons/ri'
import { HiVolumeUp } from 'react-icons/hi'
import { BsFillSkipStartFill, BsFillSkipEndFill } from 'react-icons/bs'
import { FiRepeat } from 'react-icons/fi'

import React, {
  FC,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { useGenerationStore } from './GenerationStore'
import { cn } from '@/lib/utils'

interface PlayerProps {
  name: string
  extra: string
}

const MusicCurrentTime = 10
const SeekPos = 10
const MusicDuration = 100

function fancyTimeFormat(duration: number) {
  // Hours, minutes and seconds
  var hrs = ~~(duration / 3600)
  var mins = ~~((duration % 3600) / 60)
  var secs = ~~duration % 60

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = ''

  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
  }

  ret += '' + mins + ':' + (secs < 10 ? '0' : '')
  ret += '' + secs
  return ret
}

const Player: FC<PlayerProps> = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const {
    name,
    artist,
    image,
    isPlaying,
    setIsPlaying,
    isLoading,
    audioSource,
    setAudioSource,
    trackLength,
    setTrackLength,
    currentPlayed,
    setCurrentPlayed,
    currentloaded,
  } = useGenerationStore()
  return (
    <div className="w-full sticky bottom-0 h-24 flex items-center justify-between px-3 bg-light border-t border-dark">
      <div
        className="bg-red-500 h-auto w-auto p-3 absolute top-0 left-0 -translate-y-full rounded-t-2xl border-b border-black"
        style={{ transform: 'translateY(calc(-100% - 1px))' }}
      >
        {audioSource && (
          <CustomAudioPlayer
            ref={audioRef}
            source={audioSource}
            onPlay={(e) => console.log('e.currentTarget.currentTime')}
            onTimeUpdate={(e) => {
              setCurrentPlayed(e.currentTarget.currentTime)
              setTrackLength(e.currentTarget.duration)
              console.log(e.currentTarget.currentTime)
            }}
            onLoadedMetadata={(e) =>
              // setTrackLength(e.currentTarget.duration)
              console.log('Track Length:')
            }
          />
        )}
      </div>
      <div className="flex items-center w-1/4">
        <div className="flex flex-row h-12">
          <div
            className={cn(
              'flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden transition-all',
              image ? 'rounded-lg' : 'rounded-full'
            )}
          >
            <img
              src={image ?? 'https://sickify-web.vercel.app/icon-192x192.png'}
              className="h-full w-full"
            />
            {/* <YTPlayer /> */}
          </div>
          <div className="flex flex-1 flex-col ml-3 align-middle self-center text-left">
            <h1 className="text-sm text-white font-semibold">
              {name ?? 'Sickify'}
            </h1>
            <h2 className="text-xs text-lightest">
              {artist ?? 'By - @raghav_aditya_45'}
            </h2>
          </div>
        </div>
        <AiFillHeart className="text-xl text-green-500 mx-4" />
        <PictureInPicture2Icon className="text-xl text-lightest hover:text-white" />
      </div>

      <div className="flex flex-col justify-center items-center h-full w-2/4">
        <div className="flex items-center">
          <button className="mx-3 text-lightest hover:text-white">
            <BiShuffle className="text-lg" />
          </button>
          <button className="mx-3 text-lightest hover:text-white">
            <BsFillSkipStartFill className="text-2xl" />
          </button>
          <button>
            <div
              className="bg-green-500 hover:bg-green-400 hover:scale-110 rounded-full h-9 w-9 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-100"
              onClick={() => {
                setIsPlaying(!isPlaying)
                if (audioRef?.current) {
                  isPlaying ? audioRef.current.pause() : audioRef.current.play()
                }
              }}
            >
              {isPlaying ? (
                <FaPause className="text-white text-sm translate-x-[1.5px]" />
              ) : (
                <FaPlay className="text-white text-sm translate-x-[1.5px]" />
              )}
            </div>
          </button>
          <button className="mx-3 text-lightest hover:text-white">
            <BsFillSkipEndFill className="text-2xl" />
          </button>
          <button className="mx-3 text-lightest hover:text-white">
            <FiRepeat className="text-lg" />
          </button>
        </div>
        <div className="w-3/4 flex items-center justify-center mt-1">
          <p className="text-xs text-lightest mr-1">
            {fancyTimeFormat(currentPlayed ?? 0)}
          </p>

          <SliderPrimitive.Root
            className="relative flex w-full touch-none select-none items-center"
            defaultValue={[0]}
            value={[currentPlayed]}
            max={trackLength ?? 100}
            step={0.01}
          >
            <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-lightest">
              <SliderPrimitive.Range className="absolute h-full bg-green-500" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-white shadow focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
          </SliderPrimitive.Root>

          <p className="text-xs text-lightest ml-1">
            {fancyTimeFormat(trackLength ?? 0)}
          </p>
        </div>
      </div>
      <div className="flex items-center w-1/4 justify-end pr-8">
        <div className="flex flex-row gap-x-3">
          <RiPlayListFill className="text-xl text-lightest hover:text-white" />
          <MdDevicesOther className="text-xl text-lightest hover:text-white" />
          <HiVolumeUp className="text-xl text-lightest hover:text-white" />
        </div>
        <SliderPrimitive.Root
          className="relative flex touch-none select-none items-center ml-4 w-32"
          defaultValue={[SeekPos]}
          max={100}
          step={1}
        >
          <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-lightest">
            <SliderPrimitive.Range className="absolute h-full bg-white" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-3 w-1.5 bg-transparent shadow focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>
      </div>
    </div>
  )
}

type AudioPlayerProps = React.AudioHTMLAttributes<HTMLAudioElement> & {
  source: string
}

const CustomAudioPlayer = forwardRef<HTMLAudioElement, AudioPlayerProps>(
  ({ source, ...props }, ref) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useImperativeHandle(ref, () => audioRef.current as HTMLAudioElement, [
      audioRef,
    ])

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.load() // Reload the audio element when the source changes
      }
    }, [source])

    return (
      <audio ref={audioRef} {...props} controls>
        <source src={source} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    )
  }
)
CustomAudioPlayer.displayName = 'CustomAudioPlayer'

export default Player
