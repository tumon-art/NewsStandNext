import useSWR from "swr";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Opinion = () => {
  
  const { data, error } = useSWR(
    `${process.env.SERVER}getopinion`,
    fetcher
  );

  if (error) return <h1 className=" text-black">Failed to load </h1>;
  if (!data)
    return (
      <section className=" text-black">
        <Skeleton count={6} />
      </section>
    );


  return (
   <div className="my-2 p-4 w-full bg-green-50">

    <div className="flex items-center">
    <div className=" text-xl font-medium"> OPINION </div>
    <span className=" h-2 w-2 bg-green-700 ml-2"> </span>
    </div>

    {data.slice(0,4).map((e,i)=>{
      return(
        <div key={i} className=" lg:hidden flex my-3">

          {/* ==== WRITER IMAGE */}
          <div className=" w-24 h-auto">
            <Image className=" object-cover rounded-full"
             src={e.writerImg} width={80} height={80} />
          </div>

          {/* ==== HEADER */}
          <div className="ml-4 w-full">
          <header className=" text-gray-900 leading-tight text-sm font-semibold"> {e.header} </header>

           {/* ==== SVG & NAME */}
           <div className="flex mt-1  items-center">
            <svg className=" h-6 w-6" viewBox="0 0 24 24" strokeWidth="1.5" 
            stroke="#2c3e50" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 15h15" />
            <path d="M21 19h-15" />
            <path d="M15 11h6" />
            <path d="M21 7h-6" />
            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
            </svg>
            <span className=" ml-1 text-sm font-semibold text-gray-700"> {e.writerName}</span>
           </div>

          </div>

        </div>
      )
    })}
<div className="grid grid-cols-2">
{data.slice(0,6).map((e,i)=>{
      return(
        <div key={i} className="hidden lg:flex  my-3">

          {/* ==== WRITER IMAGE */}
          <div className=" w-24 h-auto">
            <Image className=" object-cover rounded-full"
             src={e.writerImg} width={80} height={80} />
          </div>

          {/* ==== HEADER */}
          <div className="ml-4 w-full">
          <header className=" text-gray-900 leading-tight text-sm font-semibold"> {e.header} </header>

           {/* ==== SVG & NAME */}
           <div className="flex mt-1  items-center">
            <svg className=" h-6 w-6" viewBox="0 0 24 24" strokeWidth="1.5" 
            stroke="#2c3e50" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 15h15" />
            <path d="M21 19h-15" />
            <path d="M15 11h6" />
            <path d="M21 7h-6" />
            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
            </svg>
            <span className=" ml-1 text-sm font-semibold text-gray-700"> {e.writerName}</span>
           </div>

          </div>

        </div>
      )
    })}
    </div>


   </div>
  )
}

export default Opinion