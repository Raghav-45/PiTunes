import { useRouter } from "next/router"

const ArtistPage = () => {
  const router = useRouter()
  const artistID = router.query.artistID

  return (
    <div>Artist: {artistID}</div>
  )
}
export default ArtistPage
