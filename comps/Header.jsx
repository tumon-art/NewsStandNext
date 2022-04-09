import { useContext, useEffect } from "react";
import { UC } from "../context/UC";
import Link from "next/link";
import { SideBar } from "./SideBar";

export const Header = () => {
  const { sideBar, dispatch } = useContext(UC);

  useEffect(() => {
    // HIDE SCROLBAR
    if (sideBar === true) {
      document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    } else document.getElementsByTagName("BODY")[0].style.overflow = "auto";
  });

  const onMenuClick = () => {
    dispatch({
      type: "SIDE_BAR",
    });
  };

  // Sidebar Click
  const sideBarClick = () => {
    dispatch({
      type: "SIDE_BAR",
    });
  };
  return (
    <>
      {sideBar && <SideBar sideBarClick={sideBarClick} />}

      <div className="header lg:flex justify-between bg-green-600 ">
        {/* === Menu Logo  */}
        <div className="item1 lg:hidden" onClick={onMenuClick}>
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        {/* === Header Name  */}
        <div className="item2 flex items-center ">
          <h1
            className="text-center flex font-sans
        text-white text-2xl ml-2 font-extrabold "
          >
            <Link href="/">News-Stand</Link>
          </h1>

          <nav className=" hidden lg:block ml-10 text-white font-extrabold"> 

            <Link href='/asia'>
            <a className=" px-4"> Asia </a>
            </Link>
            
            <Link href='/europe'>
            <a className=" px-4"> Europe </a>
            </Link>

            <span className=" px-4"> North America </span>
            <span className=" px-4"> Africa </span>
            <span className=" px-4"> South Asia </span>
            <span className=" px-4"> South America </span>
          </nav>
        </div>

        {/* === Account Status */}
        <div className="item3">
          <span
            className=" text-white text-sm font-bold
         cursor-pointer font-sans "
          >
            <Link href="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
