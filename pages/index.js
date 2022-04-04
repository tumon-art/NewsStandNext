import Home from "../comps/Home"

export async function getStaticProps() {
  const res = await fetch(`https://news-stand-server.herokuapp.com/getpost`)
  const dataPosts = await res.json()
  console.log(dataPosts)
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
const index = ({dataPosts}) => {
  const data = dataPosts.reverse()
  return (
   <>
    <Home data={data}/>
   </>
  )
}

export default index