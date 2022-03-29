import { FaBackward, FaNewspaper } from 'react-icons/fa'

export const SideBar = ({sideBarClick}) => {
  return (
    <div className="sidebar 
    
    h-[100vh] absolute bg-green-600 border-r-4
    transition-width duration-500 border-green-700">

    <FaBackward className="text-white
    absolute right-3 mt-2 text-lg font-extrabold"
    onClick={sideBarClick}/>

    <div className="flex mt-2 ml-2 items-center">
    <div className=" flex px-2 pb-0.5 mb-4
     shadow-md bg-green-600
    text-white font-bold ring-1 ring-white"> Login</div>
    </div>

    <h3 className="  border-white border-b-4
    text-lg font-bold text-white"> Sections </h3>

    {/*  === Category News */}

    <div className=' mt-5 py-2 px-2'>
        <span className="categorySpan"> 
            <FaNewspaper/>
            <span className="newsCategory"> Middle East </span>
        </span>

        <span className="categorySpan"> 
            <FaNewspaper/>
            <span className="newsCategory"> Asia </span>

        </span>

        <span className="categorySpan"> 
            <FaNewspaper/>
            <span className="newsCategory"> Europe </span>

        </span>

        <span className="categorySpan"> 
            <FaNewspaper/>
            <span className="newsCategory"> Africa </span>

        </span>

        <span className="categorySpan"> 
            <FaNewspaper/>
            <span className="newsCategory"> North America </span>

        </span>

        <span className="categorySpan"> 
            <FaNewspaper/>
            <span className="newsCategory"> South America  </span>

        </span>

        <span className="categorySpan"> 
            <FaNewspaper/>
            <span className="newsCategory"> South Asia </span>

        </span>
    </div>
    </div>
  )
}