import React from 'react'
// import {YTPlayer} from '../components/YTPlayer'

export default function LibraryPage() {
  return (<>
    <div className='dark:text-white'>LibraryPage</div>
    {/* <YTPlayer VideoID='kddC4gi72UE'/> */}
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/T-ztCxK4H00?start=9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </>)
}