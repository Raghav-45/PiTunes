import { FC } from 'react'

interface SectionHeadingProps {
  name: string
  extra?: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ name, extra }) => {
  return (
    <div className="flex items-center justify-between tracking-wider">
      <div className="pl-2 flex flex-col">
        <h1 className="text-2xl text-white font-semibold">{name}</h1>
        {extra && <h2 className="text-lightest">{extra}</h2>}
      </div>
      <h2 className="pr-4 text-xs text-lightest self-end uppercase mb-1.5">
        See All
      </h2>
    </div>
  )
}

export default SectionHeading
