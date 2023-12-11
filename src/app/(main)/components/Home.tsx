import Breakline from "@/components/elements/Breakline"
import Introduction from "./Introduction"
import Contributions from "./Contributions/Contributions"

const Home = () => {
  return (
    <>
      <Introduction/>
      <Breakline className='mt-8 mb-7' />
      {
        process.env.GITHUB_USERNAME ? <Contributions username={process.env.GITHUB_USERNAME}/> : null
      }
    </>
  )
}

export default Home
