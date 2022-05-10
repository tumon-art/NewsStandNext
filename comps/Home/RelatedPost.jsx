import Image from "next/image";
import Link from "next/link"

import { useContext } from "react";
import { UC } from "../../context/UC";

// mt === margin top 
const RelatedPost = ({ cont, mt }) => {

    // USE CONTEXT 
    const { allPost } = useContext(UC)

    const filterd = allPost.data && allPost.data.filter((e, i) => cont == e.cont)    
    return (
        <div className={`${mt} px-1 mb-5`}>
            {filterd && filterd.map((e, i) => {
                return (
                    <div key={i} className={` flex sm:mb-10  `}>

                        <div className=" w-full  ">
                            <Link href={`/post/${e._id}`}>
                                <a className=" hover:underline block text-sm font-extrabold sm:text-sm lg:text-lg">
                                    {" "}{e.header}{" "}
                                </a>
                            </Link>

                            <p className=" sm:block my-1 text-xs md:text-sm 
                          text-gray-800 overflow-hidden whitespace-pre-line">
                                {" "} {e.post.split(".")[0]} {" "}
                            </p>
                        </div>

                        {/* ==== IMAGE */}
                        <div className=" m-1 h-24 w-52 lg:m-0 lg:w-72 lg:h-auto overflow-hidden">
                            <Image
                                className=" object-cover"
                                height={40}
                                width={60}
                                layout="responsive"
                                src={`${e.img}`}
                                alt="imagee"
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RelatedPost