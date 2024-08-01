import { FC } from 'react'

interface SectionHeadingProps {
  name: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-between tracking-wider">
      <h1 className="pl-2 text-2xl text-white font-semibold">{name}</h1>
      <h2 className="pr-4 text-xs text-lightest self-end uppercase mb-1.5">
        See All
      </h2>
    </div>
  )
}

export default SectionHeading
