import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(`https://news-stand-server.herokuapp.com/asia`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 10,
  };
}

const Asia = ({ data }) => {
  // FIST POST
  const firstPost = (e, i) => {
    console.log(data);

    return (
      <div
        className={`  w-full sm:min-w-[50%] sm:mb-10 border-b-4 sm:border-none sm:my-0 md:flex-row-reverse `}
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
        <div className=" m-5 ">
          <Link href={`/post/${data[0]._id}`}>
            <a
              className=" border-l-8 border-green-500 px-5
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
      </div>
    );
  };

  return <> {firstPost()}</>;
};

export default Asia;
