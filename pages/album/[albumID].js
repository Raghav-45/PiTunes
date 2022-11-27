import { useRouter } from "next/router"

const AlbumPage = () => {
  const router = useRouter()
  const albumID = router.query.albumID

  return (
    <div>Album: {albumID}</div>
  )
}
export default AlbumPage
