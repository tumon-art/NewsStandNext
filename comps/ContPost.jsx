import Image from "next/image";
import Link from "next/link";

const ContPost = ({ data }) => {

    const fistThree = (data) =>{
        return (
            <div className={` pl-5 flex sm:mb-10 lg:flex-row-reverse `}>
        
        <div className=" w-full pl-1 lg:ml-4 ">
          <Link href={`/post/${data._id}`}>
            <a className=" block text-sm font-extrabold sm:text-sm lg:text-lg">
              {" "}
              {data.header}{" "}
            </a>
          </Link>

          <p className=" hidden sm:block my-1 text-xs md:text-sm 
        text-gray-800 overflow-hidden whitespace-pre-line"
          >
            {" "}
            {data.post.split(".")[0]}{" "}
          </p>
        </div>
    
        {/* ==== IMAGE View */}
        <div className=" m-1 h-24 w-52 lg:m-0 lg:w-72 lg:h-auto overflow-hidden">
          <Image
            className=" object-cover"
            height={40}
            width={60}
            layout="responsive"
            src={`${data.img}`}
            alt="imagee"
          />
        </div>
      </div>
        )
    }

    const render = (data)=>{
       return data.map((e,i)=>{
            if(i <= 2) {
                return <div key={i}> {fistThree(e)} </div>
            } else {
                
            }
        })
    }
  return (
    <>
    {render(data)}
    </>
  );
};

export default ContPost;
