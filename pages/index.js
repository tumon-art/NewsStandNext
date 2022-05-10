import Home from "../comps/Home/Home"
import NewsLetter from "../comps/NewsLetter"
import Opinion from "../comps/Home/Opinion"
import OtherPosts from "../comps/Home/OtherPosts"
import TopPosts from "../comps/TopPosts";



export async function getStaticProps() {

  const res = await fetch(`${process.env.SERVER}getpost`)
  const dataPostsall = await res.json()
  const dataPosts = dataPostsall.reverse()

    // GET OPINIONS 
    const opinionRes = await fetch(`${process.env.SERVER}getopinion`)
    const opinionData = await opinionRes.json()


  return {
    props: {dataPosts,opinionData},
    revalidate: 10,
  }



}
const Index = ({dataPosts,opinionData}) => {


  // GET LAST 8 POSTS  AND REVERSE IT
  const data = dataPosts.slice(0,8)
  return (
   <div className=" w-full md:p-6">
    <Home data={data}/>
    
    <section className="  md:px-10
     md:gap-10 md:grid md:grid-cols-12">

    <div className=" col-start-1 col-end-9  flex flex-col-reverse md:flex-col">
      {/* ==== OTHER POSTS */}
      <section className=" py-3 px-1 sm:px-3  bg-white">
      <OtherPosts dataPosts={dataPosts} />
      </section>
      <Opinion opinion={opinionData} />

    </div>

    <aside className=" col-start-9 col-end-13 ">
    <TopPosts data={dataPosts} />
    <NewsLetter />
    </aside>
    
    </section>
   </div>
  )
}

export default Index
