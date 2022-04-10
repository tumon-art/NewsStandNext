const NewsLetter = () => {
  return (
   <div className=" bg-green-50 h-96 md:ml-4 items-center my-2 ">
       <form className=" flex flex-col items-center p-5">
           {/* === SIGN UP */}
           <div className=" relative w-full flex items-center justify-center text-center ">
               <div className=" absolute left-4 w-[40%] h-[1px] bg-green-700"> </div>
               <div className=" inline text-lg px-4 md:text-base bg-green-50 z-10 text-gray-800  mx-5 "> Sign up for  News Stand </div>
               <div className=" absolute right-4  w-[40%] h-[1px] bg-green-700"> </div>
           </div>

           <h1 className=" my-4 text-3xl text-gray-800 font-bold "> Weekly Newsletter</h1>
           <span className=" w-full  text-gray-700 my-2  text-sm "> The latest news from around 
           the world.Timely. Accurate. Fair. </span>

           {/* === EMAIL & BUTTON */}
           <div className=" w-full  flex md:flex-col md:items-center justify-center">
               <input className="  w-[70%] pl-2 md:w-96 md:m-0  ring-1 ring-gray-400 mr-[5%] 
                 h-10" 
               placeholder="Email Address" /> 

               <button className=" w-[30%] md:mt-5 md:w-40 text-white bg-black px-5 py-2
               "> Sign up </button>
           </div>

           {/* ==== Privacy Policy  */}
           <span className=" text-gray-600 mt-9 text-sm"> By signing up, you agree to our 
            <b className=" text-gray-900  underline"> Privacy Policy</b> </span>
       </form>
   </div>
  )
}

export default NewsLetter