import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NewsLetter from "./NewsLetter";
import { useContext } from "react";
import { UC } from "../context/UC";
import RelatedPost from "./Home/RelatedPost";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const OnePost = ({ all }) => {
  const router = useRouter();

  // USE CONTEXT
  const { allPost } = useContext(UC);

  // GET ID FORM URL
  const pid = router.query.id;

  const { data, error } = useSWR(
    `${process.env.SERVER}singlepost/${pid}`,
    fetcher
  );

  if (error) return <h1 className=" text-black">Failed to load </h1>;
  if (!data)
    return (
      <section className=" text-black">
        <Skeleton count={24} />
      </section>
    );

  const filterd = allPost.data.filter((e, i) => data[0].cont == e.cont);

  return (
    <>
      <div id="i" className="w-full lg:pl-20 lg:pr-96 lg:py-11">
        <div className=" h-48 w-full sm:h-72  lg:h-72 relative">
          <Image
            className={` object-cover`}
            layout="fill"
            src={data[0].img}
            alt="imagee"
          />
        </div>

        <div className=" w-full">
          <header
            className=" text-gray-900 text-lg px-3
          border-b-2  font-extrabold py-3 "
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

          {/* ==== NEWS LETTER  */}
          <NewsLetter my={`my-10`} />

          {/* ==== RELATED NEWS  */}
          <RelatedPost dataPosts={filterd} mt={`mt-10`} />
        </div>
      </div>
    </>
  );
};

export default OnePost;
