import { useState } from "react"
import axios from 'axios'

const CreatePost = () => {

    const [heading,setheading] = useState('')
    const [post,setpost] = useState('')
    const [photo,setphoto] = useState('')
    const [cont,setcont] = useState('')


    // On Submit From 
    const formSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post("https://news-stand-server.herokuapp.com/createpost",{
            img:photo,
            header: heading,
            post:post,
            cont:cont
            });

            setheading('')
            setpost('')
            setphoto('')
            setcont('')

        } catch(error) {
            console.log(error);
        }
    }

  return (
   <>
    <form onSubmit={formSubmit} className='flex flex-col my-5 justify-center items-center'>
        <textarea className=" block bg-gray-300 rounded-sm w-72" 
        name="heading" placeholder=" Heading"
        value={heading}
        onChange={(e)=>setheading(e.target.value)}>
        </textarea>

        <textarea className="  block bg-gray-300 my-3 rounded-sm w-2/3
         h-40"
        value={post} placeholder=' post'
        onChange={(e)=>setpost(e.target.value)}>
        </textarea>

        <input className=" my-2 block bg-gray-300 text-black
        w-2/3 rounded-sm" placeholder=" imgUrl" value={photo}
        onChange={(e)=>setphoto(e.target.value)}/>

        <input className=" my-2 block bg-gray-300 text-black
        w-32 rounded-sm" placeholder=" continent" value={cont}
        onChange={(e)=>setcont(e.target.value)}/>

        <button className=" text-white rounded-sm hover:opacity-70
        block bg-green-600 w-20 my-5" type="sumbit"> Submit</button>

    </form>

   </>
  )
}

export default CreatePost