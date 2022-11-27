import '../styles/globals.css'
import Script from "next/script"

import ContextProvider from '../contexts/ContextApi'
// import React, { createContext } from 'react'
// const MusicName = createContext()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="Adsense-id"
        async
        onError={(e) => { console.error("Script failed to load", e); }}
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5588726027217390"
        crossorigin="anonymous"/>

      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp