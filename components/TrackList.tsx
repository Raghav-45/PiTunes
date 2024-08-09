import Image from 'next/image'
import { FC } from 'react'
import OverlayPlayButton from './OverlayPlayButton'
// import OverlayPlayButton from './OverlayPlayButton'

interface TrackListProps {
  name: string
  extra: string
  image: string
  isPlayable?: boolean
  songId?: string
  source?: string
}

const TrackList: FC<TrackListProps> = ({
  name,
  extra,
  image,
  isPlayable,
  songId,
  source,
}) => {
  return (
    <div className="px-2 first:pt-0 pt-2">
      <div className="relative flex flex-row h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg transition-all">
        {isPlayable && (
          <OverlayPlayButton
            name={name}
            artist={extra}
            image={image}
            songId={songId}
            source={source}
          />
        )}
        <div className="flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden rounded-lg transition-all duration-100 delay-200">
          <Image
            height={36}
            width={36}
            className="h-full w-full"
            src={image}
            alt={name}
          />
        </div>
        <div className="flex flex-1 flex-col ml-2 text-left align-middle transition-all duration-100 delay-200 overflow-hidden">
          <h1 className="text-sm font-semibold text-white truncate">{name}</h1>
          <h2 className="text-xs text-white truncate">{extra}</h2>
        </div>
      </div>
    </div>
  )
}

export default TrackList
