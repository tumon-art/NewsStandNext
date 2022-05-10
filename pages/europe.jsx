import Image from "next/image";
import Link from "next/link"
import NewsLetter from "../comps/NewsLetter";



export async function getStaticProps() {

  const res = await fetch(`${process.env.SERVER}europe`)
  const data = await res.json()

  return {
    props: {
      post: data
    },
  }
}

const Europe = ({post}) => {

  const data = post


  // FIST POST
  const firstPost = (e, i) => {

    return (
      <div className={` mb-5w-full sm:min-w-[50%] sm:mb-10 border-b-4 
      sm:border-none sm:my-0 md:flex-row-reverse `}>

        {/* ==== IMAGE */}
        <div className=" h-auto relative sm:w-full sm:h-64 md:w-full md:h-auto overflow-hidden">
          <Image
            className=" object-cover"
            height={30}
            width={60}
            layout="responsive"
            src={`${data[0].img}`}
            alt="imagee"
          />
        </div>

        {/* ===  Heading */}
        <div className=" m-5 ">
          <Link href={`/post/${data[0]._id}`}>
            <a
              className=" border-l-8 border-green-500 px-5
                 py-2 flex items-center text-xl font-extrabold sm:text-1xl lg:text-2xl"
            >
              {" "}
              {data[0].header}{" "}
            </a>
          </Link>

          <p className=" hidden md:block my-4 text-xs lg:text-sm 
            text-gray-800 overflow-hidden whitespace-pre-line">
            {data[0].post.split(".")[0]}
          </p>
        </div>
      </div>
    );
  };

  // FIRST THREE POST 
  const fistThree = (data, i) => {
    return (
      <div key={i} className={` pl-5 flex sm:mb-10 lg:flex-row-reverse `}>

        <div className=" w-full pl-1 lg:ml-4 ">
          <Link href={`/post/${data._id}`}>
            <a className=" block text-sm font-extrabold sm:text-sm lg:text-lg">
              {" "}
              {data.header}{" "}
            </a>
          </Link>

          <p className=" hidden sm:block my-1 text-xs md:text-sm 
    text-gray-800 overflow-hidden whitespace-pre-line"
          >
            {" "}
            {data.post.split(".")[0]}{" "}
          </p>
        </div>

        {/* ==== IMAGE */}
        <div className=" m-1 h-24 w-52 lg:m-0 lg:w-72 lg:h-auto overflow-hidden">
          <Image
            className=" object-cover"
            height={40}
            width={60}
            layout="responsive"
            src={`${data.img}`}
            alt="imagee"
          />
        </div>
      </div>
    )
  }

  return (
    <div className=" md:p-16 ">

      <main className=" md:flex">
        {/* === FIRST POST */}
        {firstPost()}


        {/* ===  POST */}
        <div>
          {data.slice(1, 4).map((e, i) => {
            return fistThree(e, i)
          })}
        </div>
      </main>

      {/* ==== OTHER POSTS  */}
      <section className='w-full md:gap-10 md:grid md:grid-cols-12'>
        <div className=" col-start-1 col-end-9  flex flex-col-reverse md:flex-col">
          {data.slice(4).map((e, i) => {
            return (
              <div key={i} className={` lg:w-4/6 pl-5 flex sm:mb-10  `}>

                <div className=" w-full pl-1 lg:ml-4 ">
                  <Link href={`/post/${e._id}`}>
                    <a className=" block text-sm font-extrabold sm:text-sm lg:text-lg">
                      {" "}
                      {e.header}{" "}
                    </a>
                  </Link>

                  <p className=" hidden sm:block my-1 text-xs md:text-sm 
                   text-gray-800 overflow-hidden whitespace-pre-line"
                  >
                    {" "}
                    {e.post.split(".")[0]}{" "}
                  </p>
                </div>

                {/* ==== IMAGE */}
                <div className=" m-1 h-24 w-52 lg:m-0 lg:w-72 lg:h-auto overflow-hidden">
                  <Image
                    className=" object-cover"
                    height={40}
                    width={60}
                    layout="responsive"
                    src={`${e.img}`}
                    alt="imagee"
                  />
                </div>
              </div>
            )
          })}
        </div>

        <aside className=" col-start-9 col-end-13 " >
          <NewsLetter />
        </aside>

      </section>
    </div>
  );
};

export default Europe;
