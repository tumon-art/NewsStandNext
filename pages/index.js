import Home from "../comps/Home"

export async function getStaticProps() {
  const res = await fetch(`https://news-stand-server.herokuapp.com/getpost`)
  const dataPosts = await res.json()
  const data = dataPosts.reverse()

  if (!dataPosts) {
    return {
      notFound: true
    }
  }

  return {
    props: {data},
    revalidate: 1,
  }
}
const index = ({data}) => {
  // const data = dataPosts.reverse()
  console.table(data)
  return (
   <>
    <Home data={data}/>
   </>
  )
}

export default index