import Home from "../comps/Home"
import Opinion from "../comps/Opinion"

export async function getStaticProps() {
  const res = await fetch(`https://news-stand-server.herokuapp.com/getpost`)
  const dataPosts = await res.json()

  if (!dataPosts) {
    return {
      notFound: true
    }
  }

  return {
    props: {dataPosts},
    revalidate: 10,
  }
}
const Index = ({dataPosts}) => {
  
  // GET LAST 8 POSTS AND REVERSE IT
  const data = dataPosts.slice(-8).reverse()
  return (
   <div className="md:m-6">
    <Home data={data}/>
    <Opinion />
   </div>
  )
}

export default Index