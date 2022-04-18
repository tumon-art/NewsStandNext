import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NewsLetter from "./NewsLetter";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

const OneOpinion = () => {
    // USE ROUTER
    const router = useRouter();
  
    // GET ID FORM URL
    const pid = router.query.id;
  
    // USE SWR
    const { data, error } = useSWR(
      `${process.env.SERVER}opinion/${pid}`,
      fetcher
    );
  
    if (error) return <h1 className=" text-black">Failed to load </h1>;
    if (!data)
      return (
        <section className=" text-black">
          <Skeleton count={24} />
        </section>
      );

      console.log(data[0])
  return (
   <div className="w-full lg:pl-20 lg:pr-96 lg:py-11">

     <section className=" px-2">
     <h3 className=" w-full py-2 font-bold text-gray-700"> OPINION </h3>
       <h1 className=" text-xl font-extrabold text-zinc-900">
           {data[0].header}
       </h1>
       <p className=" my-2 text-gray-700 tex text-base italic">
       {data[0].post.split(".")[0]}
       </p>

       {/* ==== Writer's Image */}
       <div className=" flex items-center">
           <div className=" my-10">
               <Image className=" object-cover rounded-full" 
                src={data[0].writerImg}
                height={65} width={65} 
                />
           </div>

           <div className=" ml-4">
           <h3 className=" text-lg font-semibold text-gray-900 ">
               {data[0].writerName}
           </h3>
           <p className=" text-sm text-gray-700">
           {data[0].writerBio}
           </p>
           </div>
       </div>
     </section>

       {/* === IMAGE  */}
       <div>
        <Image className=" object-cover"
        src={data[0].img} height='45' width='75' layout='responsive' />
       </div>


       {/* === POST  */}
       <p className=" px-3 whitespace-pre-line">
         {data[0].post.split(".").slice(1)}
       </p>


       <NewsLetter my={`my-10`} />
   </div>
  )
}

export default OneOpinion