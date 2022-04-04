import Link from "next/link"
import Image from "next/image"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useContext } from "react"
import { UC } from "../context/UC"


export default function Home({data}) {
  const {sideBar} = useContext(UC)

  // BLUR
  const style = sideBar && "blur"

  // ARRAY REVERSE
  data.reverse()

  // DATA & SKELETON
  if (!data) return <section className=" text-black">
    <Skeleton count={24} />
    </section>

  // CUT FIRST INDEX
  const shifted = data.filter((_,i)=> i > 0)

  return (
   <div className={`mb-5 ${style}
   sm:grid grid-cols-2 gap-4`}>

    {/* ==== HEADER POSTS */}
     <div className=" mb-5  w-full  sm:my-0 ">

        <Image className=" object-cover block
        h-48 md:h-72 w-full" height={192} width="500" 
        layout="responsive"   src={`${data[0].img}`} alt='imagee' />

        <div className="border-b-4 border-green-100  py-4 md:py-2 ">

        <Link href={`/post/${data[0]._id}`}>
          <a className=" block 
           border-l-8 border-green-600
         text-xl font-extrabold md:text-xl 
          px-3 ml-6
        "> {data[0].header} </a>
        </Link>
 
        </div>
      </div>

    {/* ==== OTHER POSTS */}
   {shifted !== undefined && shifted.map((e,i)=>{
    return (
      <div key={i} className=" m-2 flex border-b-4
       sm:my-0 ">

        <div className=" w-full py-2 px-1 md:py-2 ">

        <Link href={`/post/${e._id}`}>
          <a className=" block 
         text-sm font-extrabold md:text-xl
        "> {e.header} </a>
        </Link>
 
        </div>

        <div className=' m-1 h-24 w-52 overflow-hidden'>
        <Image className=" object-cover block
        h-48 md:h-72" height={40} width={60}
        layout="responsive" 
           src={`${e.img}`} alt='imagee' />
        </div> 

      </div>
     
    )
   })}
   </div>
  )
}

