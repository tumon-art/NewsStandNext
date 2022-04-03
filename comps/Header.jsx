import { useContext, useEffect } from "react"
import { UC } from "../context/UC"
import Link from "next/link"
import { SideBar } from "./SideBar"

export const Header = () => {
  const {sideBar, dispatch} = useContext(UC)


  useEffect(()=>{
    // HIDE SCROLBAR
  if(sideBar === true) {
    document.getElementsByTagName("BODY")[0].style.overflow='hidden'
  } else document.getElementsByTagName("BODY")[0].style.overflow='auto'
  })

  const onMenuClick = () => {
    dispatch({
        type: "SIDE_BAR"
    })
}

  // Sidebar Click
  const sideBarClick = () => {

    dispatch({
      type: "SIDE_BAR"
    })
  

  }
  return (
  <> 

    {sideBar && <SideBar sideBarClick={sideBarClick} />}

   <div className="flex justify-center items-center
    bg-green-600 h-14 ">

       {/* === 3 cols Grid Holder Div  */}
    <div className=" grid grid-cols-3 justify-center items-center w-screen">
    
     {/* === Menu Logo  */}
     <div className=" flex items-center px-3"
   onClick={onMenuClick}>
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </div>

    
     {/* === Header Name  */}
     <div  className="flex items-center">
     <h1 className="text-center flex font-sans
    text-white text-2xl ml-2 font-extrabold ">
     <Link href='/'>
      News-Stand
     </Link>
     </h1>
     </div>


     {/* === Account Status */}
     <div className="flex absolute right-0 px-1 mx-1 items-center
     ">
       
        {/* <svg className="h-4 w-4 text-white mr-1"
        viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
        </svg> */}

        {/* === Conditional Account Status  */}
        

        
        <span className=" text-white text-sm font-bold
         cursor-pointer font-sans ">
        <Link href='/login'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        </Link>
        </span>

  
     </div>

    </div>

   </div>
   </>
  )
}