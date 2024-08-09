import Image from 'next/image'
import { FC } from 'react'
import MusicPlayButton from '@/components/MusicPlayButton'
import { cn } from '@/lib/utils'

interface CardsProps {
  name: string
  extra: string
  image: string
  isPlayable?: boolean
  type?: 'track' | 'album' | 'artist' | 'single'
  rounded?: boolean
  songId?: string
  source?: string
}

const Cards: FC<CardsProps> = ({
  name,
  extra,
  image,
  isPlayable = true,
  type = 'track',
  rounded = false,
  songId,
  source,
}) => {
  return (
    <div className="relative flex-none group p-2 w-48">
      <div className="bg-light w-full h-auto p-4 rounded-xl shadow-md">
        <div
          className={cn(
            'relative aspect-square w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 overflow-hidden',
            type == 'artist' ? 'rounded-full' : (rounded ? 'rounded-full' : 'rounded-lg')
          )}
        >
          {isPlayable && (
            <MusicPlayButton
              name={name}
              artist={extra}
              image={image}
              songId={songId}
              source={source}
              type={type}
            />
          )}
          <Image
            height={136}
            width={136}
            className="h-full w-full"
            src={image}
            alt={name}
          />
        </div>
        <h1 className="text-sm text-white font-semibold tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis text-left">
          {name}
        </h1>
        <h2 className="text-xs text-lightest tracking-wide whitespace-nowrap overflow-x-hidden text-ellipsis pb-0">
          {extra}
        </h2>
      </div>
    </div>
  )
}

export default Cards
