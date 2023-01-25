import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      
      <div className=" bg-cover"  >
        <div className="mt-[-40px] grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 items-center h-1/2 text-center md:text-start flex-col text-green-700 justify-between  md:items-start px-[60px] max-w-[1600px] mx-auto footer ">
          <div className="p-5 ">
            <ul className=" items-center flex flex-col">
              <div className="max-w-[200px] pt-[30px] md:pt-16 ">
              <Link href="/">
                <img className="cursor-pointer" src="/images/logo.png" alt="logo"  />
              </Link>
              </div>
              <div className="text-center text-[18px] max-w-[500px] md:text-2xl text-black md:pb-10">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure, vel obcaecati sapiente voluptatem repellat praesentium ad eius eligendi nobis?</p>
                {/* <p>{MainData[7].description2}</p> */}
              </div>
            </ul>
          </div>
          <div className="p-5 md:pt-24 md:pb-12">
            <ul className="tracking-wider ">
              <p className="text-green-700 font-bold text-3xl pb-4">
               Menus
              </p>
              <Link href="/">
                <li className="w-fit md:hidden block text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href="/aboutus">
                <li className="w-fit md:hidden block text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  About
                </li>
              </Link>
              <Link href="/contact">
                <li className="w-fit md:hidden block text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                Contact
                </li>
              </Link>
              <Link href="3">
                <li className="w-fit text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                 Products
                </li>
              </Link>
              <Link href="#">
                <li className="w-fit text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  Vapes
                </li>
              </Link>
              <Link href="#">
                <li className="w-fit text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                Gummies
                </li>
              </Link>
             
            </ul>
          </div>

          <div className="p-5 md:pt-24 md:pb-12 ">
            <ul className="tracking-wider hidden md:block">
              <p className="text-green-700 font-bold text-3xl pb-4">
               Menu
              </p>
              <Link href="/">
                <li className="w-fit text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                 Home
                </li>
              </Link>
              <Link href="#">
                <li className="w-fit text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                 About
                </li>
              </Link>
              <Link href="#">
                <li className="w-fit text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          {/* <div className="p-5 md:pt-24 pb-12 tracking-wider ">
            <ul>
              <p className="text-green-700 font-bold text-3xl pb-4">
                {homeData?.footer[0]?.contact_title
}
              </p>
              <li className="w-fit text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-400 cursor-pointer">
                <a href="mailto: 666666666">{homeData?.footer[0]?.contact_email}</a>
              </li>
              <li className="w-fit text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-400 cursor-pointer">
                <a href="tel: 666666666">{homeData?.footer[0]?.contact_number}</a>
              </li>
              <li className="w-fit    text-[22px] md:text-2xl  hover:text-black cursor-pointer md:pt-16 pt-8">
                {homeData?.footer[0]?.social_link_title}
              </li>
              <div className="flex pt-3">
                <Link href="https://www.instagram.com/" target="_blank">
                <a target="_blank"  className="pr-[25px]">
                  <FaInstagram className=" text-[18px] md:text-2xl cursor-pointer hover:text-yellow-600" />
                  </a>
                </Link>
                <Link href="https://www.twitter.com/">
                <a target="_blank"  className="pr-[25px]">
                  <FaTwitter className=" text-[18px] md:text-2xl cursor-pointer hover:text-blue-600" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/">
                <a target="_blank"  className="pr-[25px]">
                  <FaLinkedin className=" text-[18px] md:text-2xl cursor-pointer hover:text-blue-600" />
                  </a>
                </Link>
                <Link href="https://www.youtube.com/">
                <a target="_blank"  className="pr-[25px]">
                  <FaYoutube className=" text-[18px] md:text-2xl cursor-pointer hover:text-red-600" />
                </a>
                </Link>
              </div>
            </ul>
          </div> */}
        </div>
        {/* <p className=" text-[12px] md:text-[18px] text-center pb-[15px]">
         {homeData?.footer[0]?.copyright}
        </p> */}
      </div>
    </div>
  )
}

export default Footer