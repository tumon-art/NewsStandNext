import Home from "../comps/Home/Home"
import NewsLetter from "../comps/NewsLetter"
import Opinion from "../comps/Home/Opinion"
import OtherPosts from "../comps/Home/OtherPosts"

export async function getStaticProps() {
  const res = await fetch(`https://news-stand-server.herokuapp.com/getpost`)
  const dataPostsall = await res.json()
  const dataPosts = dataPostsall.reverse()
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
  const data = dataPosts.slice(0,8)
  return (
   <div className="md:m-6">
    <Home data={data}/>
    
    <section className=" w-full md:flex">

    <div className=" flex flex-col-reverse md:flex-col">
      {/* ==== OTHER POSTS */}
      <OtherPosts dataPosts={dataPosts} />
      <Opinion />

    </div>
    <NewsLetter />

    </section>
   </div>
  )
}

export default Index