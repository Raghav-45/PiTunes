'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ChevronUpIcon } from '@radix-ui/react-icons'

interface AvatarBadgeProps {
  image: string
  name: string
}

const AvatarBadge: FC<AvatarBadgeProps> = ({ image, name }) => {
  const [ShowDropdown, setShowDropdown] = useState(false)
  return (
    <div className="flex-none h-full w-auto">
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!ShowDropdown)}
          className="flex focus:outline-none bg-gray-100 dark:bg-light rounded-full h-auto py-1 px-1 w-auto items-center"
        >
          <Image
            height={24}
            width={24}
            className="h-6 w-6 mr-2 rounded-full"
            src={image}
            alt={name}
          />
          <p className="text-gray-900 dark:text-white font-semibold text-xs mr-2">
            {name}
          </p>
          <ChevronUpIcon
            className={cn(
              'text-gray-900 dark:text-white transition-all mr-1',
              !ShowDropdown && 'rotate-180'
            )}
          />
        </button>

        {ShowDropdown && (
          <div
            onClick={() => setShowDropdown(false)}
            className="absolute bg-gray-100 dark:bg-light w-full rounded mt-1"
          >
            <button
              onClick={() => setShowDropdown(false)}
              className="focus:outline-none w-full text-sm py-2 hover text-gray-900 dark:text-white opacity-75 hover:opacity-100"
            >
              Account
            </button>
            <button
              onClick={() => setShowDropdown(false)}
              className="focus:outline-none w-full text-sm py-2 hover text-gray-900 dark:text-white opacity-75 hover:opacity-100"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AvatarBadge
