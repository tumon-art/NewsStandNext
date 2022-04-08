import { useState, useContext, useEffect } from "react"
import axios from 'axios'
import { UC } from "../context/UC"
import { useRouter } from 'next/router'


const Opinion = () => {
    const router = useRouter()
   
    const [heading,setheading] = useState('')
    const [post,setpost] = useState('')
    const [img,setimg] = useState('')
    const [writerImg,setwriterImg] = useState('')
    const [writerBio,setwriterBio] = useState('')
    const [writerName,setwriterName] = useState('')

    const { isLoggedIn } = useContext(UC)

 
    // CHECK LOGGED IN OR NOT
    // useEffect(()=>{
    // // REDIRECT IF LOGGED IN
    // if(isLoggedIn === false) {
    //     router.push('/login')
    // }
    // },[isLoggedIn,router])


    // On Submit From 
    const formSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(
                `${process.env.SERVER}addopinion`,
                {
            img:img,
            header: heading,
            post:post,
            writerBio:writerBio,
            writerImg:writerImg
            });

            setheading('')
            setpost('')
            setimg('')
            setwriterBio('')
            setwriterImg('')
            setwriterName('')

            console.log(res)
            alert(res.data)
        } catch(error) {
            console.log(error)
            alert(error.response.data.message)
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
        w-2/3 rounded-sm" placeholder=" imgUrl" value={img}
        onChange={(e)=>setimg(e.target.value)}/>

        <input className=" my-2 block bg-gray-300 text-black
        w-2/3 rounded-sm" placeholder=" Writer's Bio" value={writerBio}
        onChange={(e)=>setwriterBio(e.target.value)}/>

        <input className=" my-2 block bg-gray-300 text-black
        w-2/3 rounded-sm" placeholder="Writer's Img" value={writerImg}
        onChange={(e)=>setwriterImg(e.target.value)}/>

        <input className=" my-2 block bg-gray-300 text-black
        w-2/3 rounded-sm" placeholder="Writer's Img" value={writerName}
        onChange={(e)=>setwriterName(e.target.value)}/>
        


        <button className=" text-white rounded-sm hover:opacity-70
        block bg-green-600 w-20 my-5" type="sumbit"> Submit</button>

    </form>

   </>
  )
}

export default Opinion