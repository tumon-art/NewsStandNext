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


  // DATA & SKELETON
  if (!data) return <section className=" text-black">
    <Skeleton count={24} />
    </section>

  // CUT FIRST INDEX
  const shifted = data.filter((_,i)=> i > 0)

  return (
   <div className={`mb-5 ${style}
   md:grid grid-cols-2 gap-4 md:m-6 `}>

    {/* ==== HEADER POSTS */}
     <div className=" mb-5 sm:my-0 ">

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
      <>
      {i == 0 ? (<div key={i} className=" m-2 flex border-b-4
       sm:my-0 md:flex-row-reverse ">
         <div className=" w-full px-1 md:pl-4 ">

        <Link href={`/post/${e._id}`}>
          <a className=" block
         text-sm font-extrabold sm:text-sm lg:text-lg
        "> {e.header} </a>
        </Link>

        <p className=" hidden md:block h-40 my-1 text-xs lg:text-sm text-gray-800 overflow-hidden 
         whitespace-pre-line"> {e.post.split(".")[0]} </p>
        </div>

        <div className=' m-1 h-24 w-52 md:w-full md:h-auto overflow-hidden'>
        <Image className=" object-cover block
        h-48 md:h-72" height={40} width={60}
        layout="responsive" 
           src={`${e.img}`} alt='imagee' />
        </div> 

      </div>
      // ==============================
      ) : (
        
        <div key={i} className=" m-2 flex border-b-4
        sm:my-0 ">
 
         <div className=" w-full py-2 px-1 md:py-2 ">
 
         <Link href={`/post/${e._id}`}>
           <a className=" block 
          text-sm font-extrabold md:text-md
         "> {e.header} </a>
         </Link>
  
         </div>
 
         <div className=' m-1 h-24 w-52 overflow-hidden'>
         <Image className=" float-left object-cover block
         h-48 md:h-72" height={40} width={60}
         layout="responsive" 
            src={`${e.img}`} alt='imagee' />
         </div> 
 
       </div>
      )}
      </>
    )
   })}

   </div>
  )
}

