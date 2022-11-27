import React, { useState, createContext, useContext } from 'react'

const Context = createContext()

export const PlayerContext = () => useContext(Context)

export default function ContextProvider({ children }) {
  const [MusicName, setMusicName] = useState('random')
  const [MusicSourceURL, setMusicSourceURL] = useState('random')
  const [ArtistName, setArtistName] = useState('random')
  const [IsPlaying, setIsPlaying] = useState(false)
  const [MusicDuration, setMusicDuration] = useState('00:00')
  const [MusicCurrentTime, setMusicCurrentTime] = useState('00:00')

  const value = {
    MusicName,
    setMusicName,
    ArtistName,
    setArtistName,
    MusicSourceURL,
    setMusicSourceURL,
    IsPlaying,
    setIsPlaying,
    MusicDuration,
    setMusicDuration,
    MusicCurrentTime,
    setMusicCurrentTime,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}