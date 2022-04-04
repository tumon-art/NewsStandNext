import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const OnePost = () => {
  const router = useRouter();

  // GET ID FORM URL
  const pid = router.query.id;

  const { data, error } = useSWR(
    `https://news-stand-server.herokuapp.com/singlepost/${pid}`,
    fetcher
  );

  if (error) return <h1 className=" text-black">Failed to load </h1>;
  if (!data)
    return (
      <section className=" text-black">
        <Skeleton count={24} />
      </section>
    );

  return (
    <>
      <div id="i" className="w-full lg:pl-20 lg:pr-96 lg:py-11">
        <div
          className=" h-48 w-full sm:h-72 
         lg:h-72 relative"
        >
          <Image
            className={` object-cover`}
            layout="fill"
            src={data[0].img}
            alt="imagee"
          />
        </div>

        <div className=" w-full">
          <header
            className=" text-gray-900
        text-lg px-3  border-b-2  font-extrabold
        py-3 bg-green-50"
          >
            {/* ==== HEADER  */}
            <p> {data[0].header} </p>

            <section className=" flex text-green-600 text-xs font-bold mx-5 justify-end">
              NEWS | {data[0].cont}
            </section>
          </header>

          {/* ==== POST */}
          <p
            className=" whitespace-pre-line px-4 font-medium text-gray-900
        text-base mt-8 mb-8"
          >
            {" "}
            {data[0].post}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default OnePost;
