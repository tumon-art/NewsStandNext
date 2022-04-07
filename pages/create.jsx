import { useState, useContext, useEffect } from "react"
import axios from 'axios'
import { UC } from "../context/UC"
import { useRouter } from 'next/router'

const URL = ["http://localhost:3001","https://news-stand-server.herokuapp.com"]
var SERVER = URL[1]

const CreatePost = () => {
    const router = useRouter()
   
    const [heading,setheading] = useState('')
    const [post,setpost] = useState('')
    const [photo,setphoto] = useState('')
    const [cont,setcont] = useState('')

    const { isLoggedIn } = useContext(UC)

 
    useEffect(()=>{
    // REDIRECT IF LOGGED IN
    if(isLoggedIn === false) {
        router.push('/login')
    }
    },[isLoggedIn,router])


    // On Submit From 
    const formSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(
                `${SERVER}/createpost`,
                {
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
            console.log(res,error);
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

        {/* <input className=" my-2 block bg-gray-300 text-black
        w-32 rounded-sm" placeholder=" continent" value={cont}
        onChange={(e)=>setcont(e.target.value)}/> */}

        <select id="select" defaultValue={'default'}  className=" text-gray-600 bg-gray-300" onChange={(e)=>setcont(e.target.value)}>
            <option value={'default'} disabled  hidden> Continent </option>
            <option value='Middle East'> Middle East </option>
            <option value='North America' > North America </option>
            <option value='Asia'> Asia </option>
            <option value='South Asia'> South Asia </option>
            <option value='Europe'> Europe </option>
            <option value='Africa'> Africa </option>
            <option value='South America'> South America </option>
        </select>

        <button className=" text-white rounded-sm hover:opacity-70
        block bg-green-600 w-20 my-5" type="sumbit"> Submit</button>

    </form>

   </>
  )
}

export default CreatePost