import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Post.module.css";

const Post = ({ data,i }) => {
  // SECONDE POST
  const secPost = (e) => {
    return (
      <div
        className={`${styles.sec} pl-2 my-2 flex sm:my-0 lg:flex-row-reverse `}
      >
        <div className=" w-full pl-1 lg:ml-4 ">
          <Link href={`/post/${e._id}`}>
            <a className=" block text-sm font-extrabold sm:text-sm lg:text-lg">
              {" "}
              {e.header}{" "}
            </a>
          </Link>

          <p className=" hidden sm:block my-1 text-xs md:text-sm 
        text-gray-800 overflow-hidden whitespace-pre-line"
          >
            {" "}
            {e.post.split(".")[0]}{" "}
          </p>
        </div>

        {/* ==== IMAGE */}
        <div className=" m-1 h-24 w-52 lg:m-0 lg:w-full lg:h-auto overflow-hidden">
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
    );
  };

  // ALL POSTS
  const restPost = (e) => {
    return (
      <div className={`${styles.all}  flex pl-2 lg:flex-row-reverse `}>
        <div className=" w-full py-2 lg:py-0 lg:pl-2 pl-1 ">
          <Link href={`/post/${e._id}`}>
            <a className=" flex text-sm font-bold md:text-md">
              {" "}
              {e.header}{" "}
            </a>
          </Link>
        </div>

        <div className=" m-1 lg:m-0 h-24 w-52 overflow-hidden">
          <Image
            className=" float-left object-cover block h-48 md:h-72"
            height={40}
            width={60}
            layout="responsive"
            src={`${e.img}`}
            alt="imagee"
          />
        </div>
      </div>
    );
  };

  const renders = (data) => {
    if (i == 1) return secPost(data);
    else return restPost(data);
  };

  return (
    <>{ i !== 0 && renders(data)}</>
  );
};

export default Post;
