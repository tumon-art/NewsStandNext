import Home from "../comps/Home"

export async function getStaticProps() {
  const res = await fetch(`https://news-stand-server.herokuapp.com/getpost`)
  const data = await res.json()
  const dataPosts = data.reverse()
  

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

  return (
   <>
    <Home data={dataPosts}/>
   </>
  )
}

export default Index