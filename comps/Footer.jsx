import Sociallinks from "./Sociallinks"
import Link from "next/link"

export const Footer = () => {
  return (
   <main className=' bg-green-600'>
       
    <div className=" md:grid md:grid-cols-3 h-[25vh] md:h-[33vh]
     justify-center flex ">
    {/* === Quick Links  */}
    <div className=' hidden mt-5  px-3
     pl-[30%] flex-col items-center text-white font-bold md:block '>

    <h1 className=" inline border-white border-t-4
    text-2xl font-extrabold font-sans mb-2"> Quick Links </h1>

    <ul>
    <Link href="/asia">
    <a className=" block hover:underline cursor-pointer"> Asia</a>
    </Link>

    <Link href="/europe">
    <a className=" block hover:underline cursor-pointer"> Europe</a>
    </Link>

    <Link href="/northamerica">
    <a className=" block hover:underline cursor-pointer"> North America </a>
    </Link>
    <li> Middle East</li>
    <li> Africa </li>
    </ul>
    </div>

    {/* ==== Center  */}
    <div className="flex flex-col items-center">

    <Link href="/">
    <a className=" text-center px-2  shadow-sm rounded-sm
    bg-green-500 font-extrabold mt-5 py-1
    text-xl text-white"> News-Stand</a>
    </Link>

    <span className=" mt-3 flex items-center
    text-white font-semibold "> Hear First, Share First!</span>

    {/* === Logo Links  */}
    <Sociallinks className={' h-7 w-7 mx-1'} />
    </div>


    {/* // Contact Details */}
    <div className=' pl-[30%] hidden mt-5
    flex-col text-white font-bold md:block '>
    <h1 className=" text-2xl font-extrabold font-sans mb-2
    inline border-white border-t-4"> Contact </h1>


    <div className='flex items-center text-white font-bold'>
    <svg className="h-5 w-5 text-white mr-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
    <span>Doha, 33 SA, 23 Block</span>

    </div>

    <div className='flex items-center'>
    <svg className="h-5 w-5 text-white mr-2" 
    width="24" height="24" viewBox="0 0 24 24"
    strokeWidth="2" stroke="currentColor" fill="none"
    strokeLinecap="round" strokeLinejoin="round"> 
    <path stroke="none" d="M0 0h24v24H0z"/> 
    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2
    2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /> 
    <path d="M15 6l2 2l4 -4" /></svg>
    <span>+223 0343434</span>

    </div>

    <div className='flex items-center'>
    <svg className="h-5 w-5 text-white mr-2"  
    width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
    stroke="currentColor" fill="none" strokeLinecap="round" 
    strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg>
    <span> Doha@mail.com.qt</span>

    </div>
    </div>
    

    </div>
      <p className="  text-white text-center">
      LinkedIn Corporation © 2022
      </p>
   </main>
  )
}