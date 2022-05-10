import Link from 'next/link'

const TopPosts = ({data}) => {

    const posts = data.slice(0,22)
    const random = posts.sort(function(){return .5 - Math.random()})

    
  return (
   <section className=" my-5 md:m-0 py-5 px-3 sm:px-5 bg-white  items-center md:mb-10 ">
       <div className="flex items-center">
    <div className=" text-2xl font-medium"> MOST READ </div>
    <span className=" h-2 w-2 bg-green-700 ml-2"> </span>
    </div>
   {random.map((e,i)=>{
      return(
        <section key={i}>
        <Link href={`/post/${e._id}`}>
        <a className=' hover:underline my-4 text-sm block font-semibold'> {e.header} </a>
        </Link>
        </section>
      )
   })}
   </section>
  )
}

export default TopPosts