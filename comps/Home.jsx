import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext } from "react";
import { UC } from "../context/UC";
import Image from "next/image";
import Link from "next/link";
import Post from "./Post";

export default function Home({ data }) {
  const { sideBar } = useContext(UC);

    // FIST POST
    const firstPost = (e, i) => {
      return (
        <div
          className={` w-full sm:min-w-[50%] sm:mb-10 border-b-4 sm:border-none sm:my-0 md:flex-row-reverse `}
        >
          {/* ==== IMAGE */}
          <div className=" h-auto relative sm:w-full sm:h-64 md:w-full md:h-auto overflow-hidden">
            <Image
              className=" object-cover"
              height={30}
              width={60}
              layout="responsive"
              src={`${data[0].img}`}
              alt="imagee"
            />
          </div>
  
          {/* === Heading */}
          <div className=" m-5  w-fullmd:pl-4 ">
            <Link href={`/post/${data[0]._id}`}>
              <a className=" border-l-8 border-green-500 px-5
               py-2 flex items-center text-lg font-extrabold sm:text-xl lg:text-2xl"
              >
                {" "}
                {data[0].header}{" "}
              </a>
            </Link>
  
            <p
              className=" hidden md:block my-2 text-xs lg:text-sm 
              text-gray-800 overflow-hidden whitespace-pre-line"
            >
              {data[0].post.split(".")[0]}
            </p>
          </div>
        </div>
      );
    };
  

  // BLUR
  const style = sideBar && "blur";

  // DATA & SKELETON
  if (!data)
    return (
      <section className=" text-black">
        <Skeleton count={24} />
      </section>
    );



  return (
    <div className={`block mb-5 ${style}  md:m-6 lg:flex`}>
      {firstPost(data)}
      <div className={` mx-2 md:grid md:grid-cols-2 `}>
        <Post data={data} />
      </div>
    </div>
  );
}
