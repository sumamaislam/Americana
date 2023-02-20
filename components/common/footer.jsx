import Link from "next/link";
import React from "react";
import Topbtn from "../Home/Topbtn";

function Footer() {
  return (
    <>
      <div className="   2xl:mt-[-125px] xl:mt-[-130px] mt-[-110px] lg:mt-[-100px]">
        <div className=" bg-cover bg-[url('/images/footer.png')]  relative">
          <Topbtn />
          <div className=" flex py-[100px] items-center  text-center md:text-start lg:justify-between justify-center containers flex-wrap flex-col md:flex-row  lg:items-start  footer ">
            <div className="p-5 ">
              <ul className=" items-center flex flex-col">
                <div className="max-w-[200px] pt-[30px] md:pt-16 ">
                  <Link href="/">
                    <img
                      className="cursor-pointer"
                      src="/images/logo.png"
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="text-center text-[18px] max-w-[300px] xl:max-w-[500px] font-bold md:text-[20px] pt-5  md:pb-10 ">
                  <p className="text-black">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus iure, vel obcaecati sapiente voluptatem repellat
                    praesentium ad eius eligendi nobis?
                  </p>
                </div>
              </ul>
            </div>
            <div className="p-5 md:pt-24 md:pb-12">
              <ul className="tracking-wider ">
                <p className=" font-bold text-2xl pb-4 text-black">Products</p>
                <Link href="/">
                  <li className=" md:hidden block text-black font-bold text-[18px] hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  md:text-[20px] pb-2   cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li className=" md:hidden block text-black font-bold text-[18px] hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition md:text-[20px] pb-2   cursor-pointer">
                    About
                  </li>
                </Link>
                <Link href="/">
                  <li className=" md:hidden block text-black font-bold text-[18px] hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition md:text-[20px] pb-2   cursor-pointer">
                    Contact
                  </li>
                </Link>

                <Link href="/vapes">
                  <li className=" text-black font-bold  hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  text-[18px] md:text-[20px] pb-2   cursor-pointer">
                    Vapes
                  </li>
                </Link>
                <Link href="/gummies">
                  <li className=" text-black font-bold hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  text-[18px] md:text-[20px] pb-2   cursor-pointer">
                    Gummies
                  </li>
                </Link>
              </ul>
            </div>

            <div className="p-5 md:pt-24 md:pb-12 ">
              <ul className="tracking-wider hidden md:block">
                <p className=" font-bold text-2xl pb-4 text-black">Menu</p>
                <Link href="/">
                  <li className=" text-black  font-bold hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition text-[18px]  md:text-[20px] pb-2   cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li className=" text-black font-bold hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition text-[18px]  md:text-[20px] pb-2   cursor-pointer">
                    About
                  </li>
                </Link>
                <Link href="/">
                  <li className=" text-black font-bold hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  text-[18px]  md:text-[20px] pb-2   cursor-pointer">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            <div className="p-5 md:pt-24 pb-12 tracking-wider ">
              <ul>
                <p className=" font-bold text-2xl pb-4 text-black ">Contact</p>
                <li className=" text-black  hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  font-bold text-[18px] md:text-[20px] pb-2 flex items-center gap-2   cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto: info@americanahemp.com " className="">info@americanahemp.com</a>
                </li>
                <li className=" text-black font-bold hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  text-[18px] md:text-[20px] pb-2 flex gap-2 items-center  cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel: +1(760) 878-6786">+1(760) 878-6786</a>
                </li>
              </ul>
            </div>
          </div>
          <p className=" text-[12px] md:text-[18px] text-center pb-[15px]">
            copyright © 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
