import { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { useRouter } from 'next/router'
import { UC } from "../context/UC"

const URL = ["http://localhost:3001","https://news-stand-server.herokuapp.com"]
var SERVER = URL[1]

const Login = () => {
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')


    // CHECK IF LOGGED
    const {isLoggedIn,dispatch} = useContext(UC)

    const router = useRouter()
    // REDIRECT IF LOGGED IN
    isLoggedIn && router.push('/create')

    // ON FORM SUBMIT
    const onFormSubmit = async (e) => {
        e.preventDefault()
        try{ 
            const res = await axios.post(
                `${SERVER}/login`,
                {
                    username:username,
                    password:password
                }, 
                { withCredentials: true }
                );

            // CLEAR STATES
            setusername('')
            setpassword('')
            console.log(res)
            router.push('/create')

            // LOGGING
            dispatch({
                type: "LOG_CHECK",
                payload: true
            })

        } catch(error) {
            console.log(error);
        }
    }
    
  return (
   <form onSubmit={onFormSubmit} className="flex flex-col items-center mt-10 mb-48">

    {/* USER NAME */}
    <input className="block bg-gray-300 my-2
    rounded-sm placeholder:text-sm px-2 py-1
    outline-none text-zinc-800 shadow-sm " placeholder=" username..."
    value={username} onChange={(e)=>setusername(e.target.value)} />

    {/* PASSWORD */}
    <input className="block bg-gray-300 my-2
    rounded-sm placeholder:text-sm px-2 py-1
    outline-none text-zinc-800 shadow-sm " placeholder=" password..."
    type='password'
    value={password} onChange={(e)=>setpassword(e.target.value)} />

    {/* SUBMIT BUTTON */}
    <button className=" bg-green-700 text-white px-4 py-0.5
    my-5 rounded-sm font-semibold "> Submit</button>

   </form>
  )
}

export default Login
