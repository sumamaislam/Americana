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
                  <li className=" md:hidden block text-black font-bold text-[18px]  md:text-[20px] pb-2   cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li className=" md:hidden block text-black font-bold text-[18px]  md:text-[20px] pb-2   cursor-pointer">
                    About
                  </li>
                </Link>
                <Link href="/">
                  <li className=" md:hidden block text-black font-bold text-[18px]  md:text-[20px] pb-2   cursor-pointer">
                    Contact
                  </li>
                </Link>

                <Link href="/vapes">
                  <li className=" text-black font-bold    text-[18px] md:text-[20px] pb-2   cursor-pointer">
                    Vapes
                  </li>
                </Link>
                <Link href="/gummies">
                  <li className=" text-black font-bold   text-[18px] md:text-[20px] pb-2   cursor-pointer">
                    Gummies
                  </li>
                </Link>
              </ul>
            </div>

            <div className="p-5 md:pt-24 md:pb-12 ">
              <ul className="tracking-wider hidden md:block">
                <p className=" font-bold text-2xl pb-4 text-black">Menu</p>
                <Link href="/">
                  <li className=" text-black  font-bold text-[18px]  md:text-[20px] pb-2   cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li className=" text-black font-bold text-[18px]  md:text-[20px] pb-2   cursor-pointer">
                    About
                  </li>
                </Link>
                <Link href="/">
                  <li className=" text-black font-bold  text-[18px]  md:text-[20px] pb-2   cursor-pointer">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            <div className="p-5 md:pt-24 pb-12 tracking-wider ">
              <ul>
                <p className=" font-bold text-2xl pb-4 text-black ">Contact</p>
                <li className=" text-black   font-bold text-[18px] md:text-[20px] pb-2   cursor-pointer">
                  <a href="mailto: 666666666 ">americana123@gmail.com</a>
                </li>
                <li className=" text-black font-bold  text-[18px] md:text-[20px] pb-2   cursor-pointer">
                  <a href="tel: 666666666">1234567890</a>
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
