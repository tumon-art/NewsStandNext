import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Post.module.css";

const Post = ({data}) => {

  // SECONDE POST
  const secPost = (e, i) => {
    return (
      <div
        key={i}
        className={`${styles.sec} px-2 my-2 flex sm:my-0 lg:flex-row-reverse `}
      >
        <div className=" w-full px-1 lg:ml-4 ">
          <Link href={`/post/${e._id}`}>
            <a className=" block text-sm font-extrabold sm:text-sm lg:text-lg">
              {" "}
              {e.header}{" "}
            </a>
          </Link>

          <p
            className=" hidden sm:block my-1 text-xs md:text-sm 
            text-gray-800 overflow-hidden whitespace-pre-line" >
            {" "}
            {e.post.split(".")[0]}{" "}
          </p>
        </div>

        {/* ==== IMAGE */}
        <div className=" h-24 w-52 lg:w-full lg:h-auto overflow-hidden">
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
  const restPost = (e, i) => {
    return (
      <div key={i} className={`${styles.all} flex px-2 lg:flex-row-reverse `}>
        <div className=" w-full py-2 px-1 ">
          <Link href={`/post/${e._id}`}>
            <a className=" block text-sm font-extrabold md:text-md">
              {" "}
              {e.header}{" "}
            </a>
          </Link>
        </div>

        <div className=" m-1 h-24 w-52 overflow-hidden">
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

  const renders = (e, i) => {
    if (i == 0) return;
    if (i == 1) return secPost(e, i);
    else return restPost(e, i);
  };
  return (
    <> 
    {data !== undefined && data.map((e, i) => <> {renders(e, i)} </>)}
    </>
  );
};

export default Post;
