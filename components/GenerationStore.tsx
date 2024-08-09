import { create } from 'zustand'
// import { PlaylistTypeWithId } from '@/lib/dbUtils'

interface generationState {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  name: string | null
  setName: (name: string) => void
  artist: string | null
  setArtist: (artist: string) => void
  image: string | null
  setImage: (image: string) => void
  audioSource: string | null
  setAudioSource: (audioSource: string) => void
  videoId: string | null
  setVideoId: (videoId: string) => void
  trackLength: number
  setTrackLength: (trackLength: number) => void
  currentPlayed: number
  setCurrentPlayed: (currentPlayed: number) => void
  currentloaded: number
  setCurrentloaded: (currentloaded: number) => void
  playerType: playerTypes
  setPlayerType: (playerType: playerTypes) => void
  //   userPlaylists: PlaylistTypeWithId[] | null
  //   setUserPlaylists: (userPlaylists: PlaylistTypeWithId[] | null) => void
}

type playerTypes = 'source' | 'jio-saavn' | 'youtube-embed'

// interface Artist {
//   id: string
//   name: string
// }

// interface Playlist {
//   name: string
//   id: string
//   image: string
// }

export const useGenerationStore = create<generationState>()((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  isPlaying: false,
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  name: null,
  setName: (name: string) => set({ name }),
  artist: null,
  setArtist: (artist: string) => set({ artist }),
  image: null,
  setImage: (image: string) => set({ image }),
  audioSource: null,
  setAudioSource: (audioSource: string) => set({ audioSource }),
  videoId: null,
  setVideoId: (videoId: string) => set({ videoId }),
  trackLength: 0,
  setTrackLength: (trackLength: number) => set({ trackLength }),
  currentPlayed: 0,
  setCurrentPlayed: (currentPlayed: number) => set({ currentPlayed }),
  currentloaded: 0,
  setCurrentloaded: (currentloaded: number) => set({ currentloaded }),
  playerType: 'jio-saavn',
  setPlayerType: (playerType: playerTypes) => set({ playerType }),
  //   userPlaylists: null,
  //   setUserPlaylists: (userPlaylists: PlaylistTypeWithId[] | null) => set({ userPlaylists }),
}))
