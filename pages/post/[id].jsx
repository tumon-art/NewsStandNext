import Image from "next/image";
import NewsLetter from "../../comps/NewsLetter";
// import RelatedPost from "./Home/RelatedPost";

const id = ({ all }) => {

  console.log(all)


  return (
    <>
    <div id="i" className="w-full lg:pl-20 lg:pr-96 lg:py-11">
        
        <div className=" h-48 w-full sm:h-72  lg:h-72 relative">

          <Image
            className={` object-cover`}
            layout="fill"
            src={all[0].img}
            alt="imagee"
          />

        </div>

        <div className=" w-full">
          <header className=" text-gray-900 text-lg px-3  
          border-b-2  font-extrabold py-3 ">

            {/* ==== HEADER  */}
            <p> {all[0].header} </p>

            <section className=" flex text-green-600 text-xs font-bold mx-5 justify-end">
              NEWS | {all[0].cont}
            </section>
          </header>

          {/* ==== POST */}
          <p className=" whitespace-pre-line px-4 font-medium text-gray-900
            text-base mt-8 mb-8">

            {" "}
            {all[0].post}{" "}
          </p>

          {/* ==== NEWS LETTER  */}
          <NewsLetter my={`my-10`} />

          {/* ==== RELATED NEWS  */}
          {/* <RelatedPost dataPosts={filterd} mt={`mt-10`} /> */}

        </div>
      </div>
    </>
  )
}


export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER}getpost`)
  const dataPostsall = await res.json()


  const paths = dataPostsall.map(e => {
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

  const res = await fetch(`${process.env.SERVER}singlepost/${params.id}`)
  const data = await res.json()

  return {
    props: {
      all: data
    },
  }
}

export default id