import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { FC } from 'react'
import { Button } from './ui/button'
import AvatarBadge from './AvatarBadge'

interface TopbarProps {}

const Topbar: FC<TopbarProps> = ({}) => {
  return (
    <div className="w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-white/50 dark:bg-dark/70 backdrop-blur-md z-10">
      <div className="flex gap-x-4 items-center justify-between">
        <Button
          className="rounded-full bg-black w-8 h-8 text-white hover:bg-white/5 opacity-50"
          size="icon"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
        <Button
          className="rounded-full bg-black w-8 h-8 text-white hover:bg-white/5"
          size="icon"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </div>
      <AvatarBadge
        image="https://pitunes.vercel.app/assets/unnamed.jpg"
        name="Raghav"
      />
    </div>
  )
}

export default Topbar
