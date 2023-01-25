import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='2xl:mt-[-125px] xl:mt-[-130px] mt-[-110px] lg:mt-[-100px]'>
      
      <div className=" bg-cover bg-[url('/images/footer.png')]  relative">
        <div className="mt-[-40px] grid lg:grid-cols-4  grid-cols-1 md:grid-cols-2 py-[100px] items-center h-1/2 text-center md:text-start flex-col text-red-600 justify-between  md:items-start px-[60px] max-w-[1600px] mx-auto footer ">
          <div className="p-5 ">
            <ul className=" items-center flex flex-col">
              <div className="max-w-[200px] pt-[30px] md:pt-16 ">
              <Link href="/">
                <img className="cursor-pointer" src="/images/logo.png" alt="logo"  />
              </Link>
              </div>
              <div className="text-center text-[18px] max-w-[500px] font-bold md:text-[20px] pt-5 text-red-600 md:pb-10">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure, vel obcaecati sapiente voluptatem repellat praesentium ad eius eligendi nobis?</p>
               
              </div>
            </ul>
          </div>
          <div className="p-5 md:pt-24 md:pb-12">
            <ul className="tracking-wider ">
              <p className="text-red-600 font-bold text-3xl pb-4">
               Products
              </p>
              <Link href="/">
                <li className="w-fit md:hidden block text-[#CEB99F] text-[18px]  md:text-2xl pb-2   cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="w-fit md:hidden block text-[#CEB99F] text-[18px]  md:text-2xl pb-2   cursor-pointer">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="w-fit md:hidden block text-[#CEB99F] text-[18px]  md:text-2xl pb-2   cursor-pointer">
                Contact
                </li>
              </Link>
              
              <Link href="/">
                <li className="w-fit text-[#CEB99F]    text-[18px] md:text-2xl pb-2   cursor-pointer">
                  Vapes
                </li>
              </Link>
              <Link href="/">
                <li className="w-fit text-[#CEB99F]    text-[18px] md:text-2xl pb-2   cursor-pointer">
                Gummies
                </li>
              </Link>
             
            </ul>
          </div>

          <div className="p-5 md:pt-24 md:pb-12 ">
            <ul className="tracking-wider hidden md:block">
              <p className="text-red-600 font-bold text-3xl pb-4">
               Menu
              </p>
              <Link href="/">
                <li className="w-fit text-[#CEB99F] text-[18px]  md:text-2xl pb-2   cursor-pointer">
                 Home
                </li>
              </Link>
              <Link href="/">
                <li className="w-fit text-[#CEB99F] text-[18px]  md:text-2xl pb-2   cursor-pointer">
                 About
                </li>
              </Link>
              <Link href="/">
                <li className="w-fit text-[#CEB99F] text-[18px]  md:text-2xl pb-2   cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          <div className="p-5 md:pt-24 pb-12 tracking-wider ">
            <ul>
              <p className="text-red-600 font-bold text-3xl pb-4">
Contact 
        </p>
              <li className="w-fit text-[#CEB99F]    text-[18px] md:text-2xl pb-2  hover:text-yellow-400 cursor-pointer">
                <a href="mailto: 666666666">americana123@gmail.com</a>
              </li>
              <li className="w-fit text-[#CEB99F]    text-[18px] md:text-2xl pb-2  hover:text-yellow-400 cursor-pointer">
                <a href="tel: 666666666">1234567890</a>
              </li>
              {/* <li className="w-fit    text-[22px] md:text-2xl  hover:text-black cursor-pointer md:pt-16 pt-8">
                Social Links
              </li> */}
              {/* <div className="flex pt-3">
                <Link href="https://www.instagram.com/" target="_blank">
                <a target="_blank"  className="pr-[25px]">
                  <p className=" text-[18px] md:text-2xl cursor-pointer hover:text-yellow-600" >DFBJ</p>
                  </a>
                </Link>
                <Link href="https://www.twitter.com/">
                <a target="_blank"  className="pr-[25px]">
                  <p className=" text-[18px] md:text-2xl cursor-pointer hover:text-blue-600" >SA</p>
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/">
                <a target="_blank"  className="pr-[25px]">
                  <p className=" text-[18px] md:text-2xl cursor-pointer hover:text-blue-600" >SASA</p>
                  </a>
                </Link>
                <Link href="https://www.youtube.com/">
                <a target="_blank"  className="pr-[25px]">
                  <p className=" text-[18px] md:text-2xl cursor-pointer hover:text-red-600" >SASASA</p>
                </a>
                </Link>
              </div> */}
            </ul>
          </div>
        </div>
        <p className=" text-[12px] md:text-[18px] text-center pb-[15px]">
        copyright © 2022. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer