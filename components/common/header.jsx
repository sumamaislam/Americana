import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    setNavbar(false)
  }
  const handleClick2 = () => {
    router.push("/about");
    setNavbar(false);
  }
  const handleClick3 = () => {
    router.push("/contact");
    setNavbar(false);
  }

  return (
    <div>  
    <nav className={`w-full fixed bg-[url('/images/header.png')] bg-cover  bg-no-repeat z-10`}>
      <div className="justify-between  containers " >
        <div>
          <div className="flex items-center justify-between py-4 2xl:py-6 ">
            <Link href="/">
              <img src="/images/logo.png" className="w-[150px] md:w-[200px]" alt="logo" />
            </Link>
            <div className="">
              <button
                className="  rounded-md outline-none "
                onClick={() => setNavbar(true)}
              >

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
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav> 
      <nav className={`w-full fixed  h-[100vh] bg-cover bg-[url('/images/landingpage.png')] set_header ${navbar ? "set_header2" :  ""} bg-no-repeat z-10`}>
        <div className="justify-between  containers " >
          <div>
            <div className="flex items-center justify-between py-4 2xl:py-6 ">
              <Link href="/">
                <img src="/images/logo.png" className="w-[150px] md:w-[200px]" alt="logo" />
              </Link>
              <div className="">
                <button
                  className="  rounded-md outline-none "
                  onClick={() => setNavbar(false)}
                >
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
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className="flex-1 justify-self-center mt-[30%] pb-3 md:mt-[4%]  2xl:mt-[10%] block" 
            >
              <ul className="items-center  justify-center space-y-24  ">
                <li className="font-bold md:text-[20px] 2xl:text-[40px] text-[#646a32]" style={{ textShadow: "3px 3px #c6ab71;" }}>
                  <p onClick={handleClick}><img className="m-auto cursor-pointer w-[100px] md:w-[150px] hover:scale-90 transition duration-700" src="/images/48.png" alt="" /></p>
                </li>

                <li className="font-bold md:text-[20px] 2xl:text-[40px] text-[#646a32]" style={{ textShadow: "3px 3px #c6ab71;" }}>
                  <p onClick={handleClick2}><img className="m-auto cursor-pointer w-[120px] md:w-[170px] hover:scale-90 transition duration-700" src="/images/49.png" alt="" /></p>
                </li>
                <li className="font-bold md:text-[20px] 2xl:text-[40px] text-[#646a32]" style={{ textShadow: "3px 3px #c6ab71;" }}>
                  <p onClick={handleClick3}><img className="m-auto cursor-pointer w-[160px] md:w-[230px] hover:scale-90 transition duration-700" src="/images/50.png" alt="" /></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

