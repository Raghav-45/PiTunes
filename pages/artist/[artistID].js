import { useRouter } from "next/router"

const artistPage = () => {
  const router = useRouter()
  const artistID = router.query.artistID

  return (
    <div>Artist: {artistID}</div>
  )
}
export default artistPage