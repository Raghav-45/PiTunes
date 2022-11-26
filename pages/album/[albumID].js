import { useRouter } from "next/router"

const albumPage = () => {
  const router = useRouter()
  const albumID = router.query.albumID

  return (
    <div>Album: {albumID}</div>
  )
}
export default albumPage