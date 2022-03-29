import useSWR from 'swr'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const OnePost = () => {
        
    const router = useRouter()
    
    // GET ID FORM URL
    const pid  = router.query.id
    
    const { data, error } = useSWR(`https://news-stand-server.herokuapp.com/singlepost/${pid}`, fetcher)
    if (error) return <h1 className=" text-black">Failed to load </h1>
    if (!data) return <section className=" text-black">
    <Skeleton count={24} />
    </section>

    // function beTop(){
    //     window.scrollTo(0, 0)
    //   } beTop()

  return (
   <>
    {data !== undefined && (
        <div id="i" className="w-full">
        <div className=" h-48 w-full sm:h-72 
         lg:h-72 relative">
        <Image className={` object-cover`}
        layout='fill' 
        src={data[0].img} alt='imagee' />
        </div>

        <div className=" w-full">
        <h2 className=" text-green-500 font-mono
        text-lg px-3 font-extrabold border-b-2 
        py-3 bg-green-50 border-green-200">
        {data[0].header} </h2>

        <p className=" px-4 font-mono text-green-600
        text-base mt-8 mb-8"> {data[0].post} </p>
        </div>
      </div>
    )}
   </>
  )
}

export default OnePost
