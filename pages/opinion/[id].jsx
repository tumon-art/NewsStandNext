import OneOpinion from "../../comps/OneOpinion"

const id = ({all}) => {
  return (
   <>
    <OneOpinion all={all} />
   </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER}getopinion`)
  const allOpinions = await res.json()

  const paths = allOpinions.map(e => {
    return {
      params: { id: e._id }
    }

  })

  return {
    paths: paths,
    fallback: false
  }
}


export async function getStaticProps({ params }) {

  const res = await fetch(`${process.env.SERVER}opinion/${params.id}`)
  const data = await res.json()

  return {
    props: {
      all: data
    },
  }
}

export default id