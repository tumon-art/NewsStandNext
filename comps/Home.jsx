import Link from "next/link"
import Image from "next/image"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function Home({data}) {
  data.reverse()
  if (!data) return <section className=" text-black">
    <Skeleton count={24} />
    </section>


  return (
   <div className=" my-5
   sm:grid grid-cols-2 gap-4">
   {data !== undefined && data.map((e,i)=>{
    return (
      <div key={i} className=" border-t-4 my-5  w-full
       border-b-2 border-green-200 bg-green-100 sm:my-0 ">

        <Image className=" object-cover block
        h-48 md:h-72 w-full" height={192} width="500" 
        layout="responsive" priority={true}  src={`${e.img}`} alt='imagee' />

        <div className=" w-full py-2 px-1 md:py-2 ">

        <Link href={`/post/${e._id}`}>
          <a className=" block text-green-700
         text-sm font-extrabold md:text-xl
         border-l-4 border-green-400 px-3
         font
        "> {e.header} </a>
        </Link>
        </div>
      </div>
     
    )
   })}
   </div>
  )
}

