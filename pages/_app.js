import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
      <Script
        id="Adsense-id"
        async
        onError={(e) => { console.error("Script failed to load", e); }}
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5588726027217390"
        crossorigin="anonymous"/>
      
      <Component {...pageProps} />
  </>)
}

export default MyApp
