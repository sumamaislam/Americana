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
      <nav className={`w-full fixed bg-[url('https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/images%2FFebruary_2023%2Fheader.png01639d8a-fcd3-4cb6-8eb1-cdde71fde139?alt=media&token=c96b807d-c6d5-46be-bd4b-7a75eaf1785d')] bg-cover  bg-no-repeat z-10`}>
        <div className="justify-between  containers " >
          <div>
            <div className="flex items-center justify-between py-4 2xl:py-6 ">
              <Link href="/">
                <img src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/images%2FFebruary_2023%2Flogo.png27c52f44-e974-4591-95f1-dfb98a36a033?alt=media&token=64673475-06bf-4d02-b8c8-1b64772facb1
" className="w-[150px] md:w-[200px]" alt="logo" />
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
      <nav className={`w-full fixed  h-[100vh] bg-cover bg-[url('/images/landingpage.png')] set_header ${navbar ? "set_header2" : ""} bg-no-repeat z-10`}>
        <div className="justify-between  containers " >
          <div>
            <div className="flex items-center justify-between py-4 2xl:py-6 ">
              <Link href="/">
                <img src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/images%2FFebruary_2023%2Flogo.png27c52f44-e974-4591-95f1-dfb98a36a033?alt=media&token=64673475-06bf-4d02-b8c8-1b64772facb1
" className="w-[150px] md:w-[200px]" alt="logo" />
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
                  <p onClick={handleClick}><img className="m-auto cursor-pointer w-[100px] md:w-[150px] hover:scale-90 transition duration-700" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/images%2FFebruary_2023%2F48.png8d8d1c55-c23e-47c2-a01a-8eee4275e12d?alt=media&token=103a1be0-03cb-4f91-9a76-9c8cf17c71e5
" alt="" /></p>
                </li>

                <li className="font-bold md:text-[20px] 2xl:text-[40px] text-[#646a32]" style={{ textShadow: "3px 3px #c6ab71;" }}>
                  <p onClick={handleClick2}><img className="m-auto cursor-pointer w-[120px] md:w-[170px] hover:scale-90 transition duration-700" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/images%2FFebruary_2023%2F49.png8b3f733e-b177-47cf-bfe0-d294a038ec32?alt=media&token=9f7fea70-8c43-40dd-bc12-d992929c81b6" alt="" /></p>
                </li>
                <li className="font-bold md:text-[20px] 2xl:text-[40px] text-[#646a32]" style={{ textShadow: "3px 3px #c6ab71;" }}>
                  <p onClick={handleClick3}><img className="m-auto cursor-pointer w-[160px] md:w-[230px] hover:scale-90 transition duration-700" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/images%2FFebruary_2023%2F50.png426d5212-4548-434e-b32e-36962b5e4fd9?alt=media&token=9da80366-8c12-4c24-a587-4dae1b2c72d7" alt="" /></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

