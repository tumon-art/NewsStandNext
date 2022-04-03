export const Footer = () => {
  return (
   <div className='bg-green-600'>
       
    <div className=" grid sm:grid-cols-3 h-[25vh] md:h-[33vh] ">
    {/* === Quick Links  */}
    <div className=' hidden mt-5  px-3
     pl-[30%] flex-col items-center text-white font-bold sm:block '>

    <h1 className=" inline border-white border-t-4
    text-2xl font-extrabold font-sans mb-2"> Quick Links </h1>

    <ul>
    <li> Asia</li>
    <li> Middle East</li>
    <li> Europe</li>
    <li> Africa </li>
    <li> America </li>
    </ul>
    </div>

    {/* ==== Center  */}
    <div className="flex flex-col items-center self-center ">

    <h2 className=" text-center px-2  shadow-sm
     rounded-sm
    bg-green-500 font-extrabold mt-5 py-1
    text-xl text-white"> News-Stand</h2>

    <span className=" mt-3 flex items-center
    text-white font-semibold "> Hear First, Share First!</span>

    {/* === Logo Links  */}

    <div className=" flex justify-center opacity-80 text-white items-center mt-3">
    {/* === GOOGLE PLAY */}
    <svg className=" h-7 w-7" strokeWidth={1.5} stroke="currentColor"  viewBox="0 0 24 24" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 3.71v16.58a0.7 .7 0 0 0 1.05 .606l14.622 -8.42a0.55 .55 0 0 0 0 -.953l-14.622 -8.419a0.7 .7 0 0 0 -1.05 .607z" />
    <line x1="15" y1="9" x2="4.5" y2="20.5" />
    <line x1="4.5" y1="3.5" x2="15" y2="15" />
    </svg>

    {/* === SPOTIFY PLAY */}
    <svg className=" h-7 w-7" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" fill="none" >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
    <path d="M9 15c1.5 -1 4 -1 5 .5" />
    <path d="M7 9c2 -1 6 -2 10 .5" />
    </svg>

    {/* === VIMEO */}
    <svg className=" h-7 w-7" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 8.5l1 1s1.5 -1.102 2 -.5c.509 .609 1.863 7.65 2.5 9c.556 1.184 1.978 2.89 4 1.5c2 -1.5 7.5 -5.5 8.5 -11.5c.444 -2.661 -1 -4 -2.5 -4c-2 0 -4.047 1.202 -4.5 4c2.05 -1.254 2.551 1.003 1.5 3c-1.052 2.005 -2 3 -2.5 3c-.49 0 -.924 -1.165 -1.5 -3.5c-.59 -2.42 -.5 -6.5 -3 -6.5s-5.5 4.5 -5.5 4.5z" />
    </svg>

    {/* === REDDITE */}
    <svg className=" h-7 w-7" strokeWidth={1.5} stroke="currentColor"  viewBox="0 0 24 24" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
    <path d="M12 8l1 -5l6 1" />
    <circle cx="19" cy="4" r="1" />
    <circle cx="9" cy="13" r=".5" fill="currentColor" />
    <circle cx="15" cy="13" r=".5" fill="currentColor" />
    <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
    </svg>
    {/* <FaDiscord className=" socialIocn" />
    <FaTelegram className="socialIocn" />
    <FaTwitch className="socialIocn" />
    <FaYoutube className="socialIocn" /> */}
    </div>
    </div>


    {/* // Contact Details */}
    <div className=' pl-[30%] hidden mt-5
    flex-col text-white font-bold sm:block '>
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
   </div>
  )
}