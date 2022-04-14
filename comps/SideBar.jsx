import Sociallinks from "./Sociallinks"
import Link from "next/link"
import { useContext } from "react"

export const SideBar = ({sideBarClick}) => {

   
  return (
    <div className="sidebar flex flex-col
    h-[100vh] absolute bg-green-600 border-r-4
    transition-width duration-500 border-green-700">

    {/* === CLOSE SIDEBAR */}
    <svg className="h-6 w-6 text-white absolute right-3 mt-2" fill="none" 
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
    onClick={sideBarClick}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>

    <div className="flex mt-2 ml-2 items-center">
    <div className=" flex px-4 pb-0.5 mb-4
      bg-green-600 text-xl
    text-white font-bold  ring-white"> News Stand</div>
    </div>

    <h3 className=" border-green-300 border-b-4 
    text-lg font-bold text-white px-4"> Sections </h3>

    {/*  === Category News */}



    <div className=' mt-5 py-2 px-4'>
    <span className="categorySpan"> 
        {/* === SVG         */}
        <svg className="h-5 w-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012
        2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 
        6H5v2h6v-2z" clipRule="evenodd" />
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
            <span className="newsCategory"> Middle East </span>
        </span>

        <span className="categorySpan"> 
        {/* === SVG             */}
        <svg className="h-5 w-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012
        2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 
        6H5v2h6v-2z" clipRule="evenodd" />
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
        
        <Link href='/asia'>
            <a onClick={sideBarClick} className=" newsCategory"> Asia </a>
        </Link>
       
        </span>

        <span className="categorySpan"> 
        {/* === SVG             */}
        <svg className="h-5 w-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012
        2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 
        6H5v2h6v-2z" clipRule="evenodd" />
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
        <Link href='/europe'>
            <a onClick={sideBarClick} className="newsCategory"> Europe </a>
        </Link>
        </span>

        <span className="categorySpan"> 
        {/* === SVG             */}
        <svg className="h-5 w-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012
        2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 
        6H5v2h6v-2z" clipRule="evenodd" />
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
            <span className="newsCategory"> Africa </span>

        </span>

        <span className="categorySpan"> 
        {/* === SVG             */}
        <svg className="h-5 w-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012
        2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 
        6H5v2h6v-2z" clipRule="evenodd" />
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>

            <Link href='/northamerica'>
            <a onClick={sideBarClick} className=" newsCategory"> North America </a>
            </Link>

        </span>

        <span className="categorySpan"> 
        {/* === SVG */}
        <svg className="h-5 w-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012
        2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 
        6H5v2h6v-2z" clipRule="evenodd" />
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
            <span className="newsCategory"> South America  </span>

        </span>

        <span className="categorySpan"> 
        {/* === SVG             */}
        <svg className="h-5 w-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012
        2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 
        6H5v2h6v-2z" clipRule="evenodd" />
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
            <span className="newsCategory"> South Asia </span>

        </span>
        
    </div>

    <nav className=" self-center my-5" > <Sociallinks className={' h-6 w-6 mx-2'} /> </nav>

    </div>
  )
}