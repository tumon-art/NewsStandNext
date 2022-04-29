import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext } from "react";
import { UC } from "../../context/UC";
import Image from "next/image";
import Link from "next/link";
import Post from "./Post";

export default function Home({ data }) {
  const { sideBar, allPost } = useContext(UC);

  let relative;
  // FIST POST
  const firstPost = (e, i) => {
    if (data[3]) {
      const arr = data.filter((x) => e[0].cont == x.cont);
      relative = arr;
    }

    return (
      <div className={`  w-full sm:min-w-[50%] 
      sm:mb-10 border-b-4 sm:border-none sm:my-0 md:flex-row-reverse `} >
        
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
        <div className=" m-5 ">
          <Link href={`/post/${data[0]._id}`}>
            <a
              className=" hover:underline border-l-8 border-green-500 px-5
               py-2 flex items-center text-xl font-extrabold sm:text-1xl lg:text-2xl"
            >
              {" "}
              {data[0].header}{" "}
            </a>
          </Link>

          <p
            className=" hidden md:block my-4 text-xs lg:text-sm 
              text-gray-800 overflow-hidden whitespace-pre-line"
          >
            {data[0].post.split(".")[0]}
          </p>
        </div>
        <section className="hidden lg:block m-5 text-gray-600">
          <h4> Releted News</h4>

          {relative &&
            relative.slice(0, 3).map((e, i) => {
              return (
                <p
                  className="  my-1 text-sm font-normal text-neutral-900"
                  key={i}
                >
                  {" "}
                  {e.header}
                </p>
              );
            })}
        </section>
      </div>
    );
  };



  // DATA & SKELETON
  if (!data)
    return (
      <section className=" text-black">
        <Skeleton count={24} />
      </section>
    );

  return (
    <div className={`block mb-5 lg:flex`}>
      {firstPost(data)}
      <div className={`  mx-2 md:grid md:grid-cols-2 `}>
        {data !== undefined &&
          data.map((e, i) => <Post key={i} i={i} data={e} />)}
      </div>
    </div>
  );
}
