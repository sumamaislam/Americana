import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className={`w-full fixed ${navbar ? "bg-[url('/images/landingpage.png')] h-[100vh] " : "bg-[url('/images/header.png')]"} bg-cover  bg-no-repeat z-10`}>
      <div className="justify-between  containers " >
        <div>
          <div className="flex items-center justify-between py-4 2xl:py-6 ">
            <Link href="/">
              <img src="/images/logo.png" className="w-[150px] md:w-[200px]" alt="logo" />
            </Link>
            <div className="">
              <button
                className="  rounded-md outline-none "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center mt-[30%] pb-3 md:mt-[4%]  2xl:mt-[10%]  ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center  justify-center space-y-24  ">
              <li className="font-bold md:text-[20px] 2xl:text-[40px] text-[#646a32]" style={{textShadow: "3px 3px #c6ab71;"}}>
                <Link href="/"><img className="m-auto  w-[100px] md:w-[150px] hover:scale-90 transition duration-700" src="/images/48.png" alt="" /></Link>
              </li>
              
              <li className="font-bold md:text-[20px] 2xl:text-[40px] text-[#646a32]" style={{textShadow: "3px 3px #c6ab71;"}}>
                <Link href="/about"><img className="m-auto w-[120px] md:w-[170px] hover:scale-90 transition duration-700" src="/images/49.png" alt="" /></Link>
              </li>
              <li className="font-bold md:text-[20px] 2xl:text-[40px] text-[#646a32]" style={{textShadow: "3px 3px #c6ab71;"}}>
                <Link href="/contact"><img className="m-auto w-[160px] md:w-[230px] hover:scale-90 transition duration-700" src="/images/50.png" alt="" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}