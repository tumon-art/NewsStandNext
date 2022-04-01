import { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { useRouter } from 'next/router'
import { UC } from "../context/UC"

const Login = () => {
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')


    // CHECK IF LOGGED IN
    const {isLoggedIn,dispatch} = useContext(UC)


    useEffect(()=>{
        async function get(){
            try{
            const res = await axios.post(
               //"https://news-stand-server.herokuapp.com/autologin"
                "http://localhost:3001/autologin"
                ,{}, { withCredentials: true });

            // GETING BOOLEAN FROM SERVER FOR ROUTEING
            if(res.data === true) {
                dispatch({
                    type: "LOG_CHECK",
                    payload: true
                })
            }
        } catch(error) {
            console.log(error);
        }
        } get()

    },[])

    const router = useRouter()
    // REDIRECT IF LOGGED IN
    isLoggedIn && router.push('/create')



    // ON FORM SUBMIT
    const onFormSubmit = async (e) => {
        e.preventDefault()
        try{const token = document.cookie.split("=")[1]
            const res = await axios.post(
               "https://news-stand-server.herokuapp.com/login",
                // "http://localhost:3001/login",
                {
            username:username,
            password:password,
            token:token,
            }, { withCredentials: true });
            // CLEAR STATES
            setusername('')
            setpassword('')
            router.push('/create')
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
