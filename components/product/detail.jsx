import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import product from "../../redux/product";

function Detail() {
  
  
  const { details } = useSelector((state) => state.product);
  // const { products } = useSelector((state) => state.home);

  console.log("details", details);
  // const url = products?.banner?.base_url+"/";
  const url = `https://erp.frutycactus.com/public/storage/` + "/";
const router = useRouter();
console.log(router)
  return (
    <>
    <div className="pt-[0px]">

      <div className={` bg-cover bg-center w-full bg-no-repeat relative ${router.asPath === "/flavour/delta9o" ? "bg-[#F5DB90]" : router.asPath === "/flavour/d11" ? "bg-[#F5DCE8]" : router.asPath === "/flavour/fsb" ? "bg-[#ECF0D5]" : router.asPath === "/flavour/hhc" ? "bg-[#EEE4CB]" : router.asPath === "/flavour/nob" ? "bg-[#F8ADB5]" : router.asPath === "/flavour/gummydelta9o" ? "bg-[#A4AAB2]" : router.asPath === "/flavour/kop" ? "bg-[#F1EAD7]" : router.asPath === "/flavour/top" ? "bg-[#DAA48E]" : ""}` }    style={{ backgroundImage: `url(${JSON.stringify(details[0]?.d3)})` }}>
        {/* -----------------------------------TITLE IMAGE------------------------------------ */}
        <div className=" pt-[100px]  md:pt-[130px]">
        <div>
          <ul className="flex flex-wrap w-full justify-center gap-8 2xl:gap-12 mt-10 bg-[#4C4838] py-5">
            <li><Link href="/flavour/delta9o"><img className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 ${router.asPath === "/flavour/delta9o" ? "border border-white rounded-full" : ""} `} src="/images/D9o-category.png" alt="Delta 90 Indica" /></Link></li>
            <li><Link href="/flavour/d11"><img className={`md:w-[100px] w-[60px] hover:scale-110 duration-500  ${router.asPath === "/flavour/d11" ? "border border-white rounded-full" : ""}`}  src="/images/D11-category.png" alt="Delta 11 Indica" /></Link></li>
            <li><Link href="/flavour/fsb"><img className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 ${router.asPath === "/flavour/fsb" ? "border border-white rounded-full" : ""}`} src="/images/FSB-category.png" alt="Fluid Spectrum Blend" /></Link></li>
            <li><Link href="/flavour/hhc"><img className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 ${router.asPath === "/flavour/hhc" ? "border border-white rounded-full" : ""}`} src="/images/HHC-category.png" alt="Sativa Super Lemon Haze" /></Link></li>
            <li><Link href="/flavour/nob"><img className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 ${router.asPath === "/flavour/nob" ? "border border-white rounded-full" : ""}`} src="/images/KOB.png" alt="Knock Off Blend" /></Link></li>
            <li><Link href="/flavour/gummydelta9o"><img className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 ${router.asPath === "/flavour/gummydelta9o" ? "border border-white rounded-full" : ""}`} src="/images/D9O.png" alt="D90 Gummies" /></Link></li>
            <li><Link href="/flavour/kop"><img className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 ${router.asPath === "/flavour/kop" ? "border border-white rounded-full" : ""}`} src="/images/NOB-Category.png" alt="Knock Out Blend" /></Link></li>
            <li><Link href="/flavour/top"><img className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 ${router.asPath === "/flavour/top " ? "border border-white rounded-full" : ""}`} src="/images/TOB.png" alt="Take Off Blend" /></Link></li>

          </ul>
        </div>
          <div className="flex justify-center mt-14">

          <img
            className="xl:max-w-[300px] lg:max-w-[210px]  max-w-[150px]  "
            src={details && details[0]?.d2}
            alt="title  image"
            />
        </div>
            </div>

        {/* menu */}
        {/*----------------------------------MAP-----------------------------------------------  */}
        <div className="pb-[200px] containers">
          <div className="grid grid-col md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-9  items-center justify-items-center md:pt-[20px] ">
            {details && details[0]?.product_images?.map((items, index) => {
              return (
                // -------------------------------------IMAGE---------------------------------------
                <div key={index} className="mt-[2px]  ">
                  <div className=" ">
                    <img
                      className="w-[1500px] hover:scale-110 transition duration-300 ease-in-out"
                      src={items.d1}
                      alt="item-img"
                      />
                    {/* ----------------------------------------NAME------------------------------------- */}
                    <p className="mt-[5px] font-bold text-[14px] md:text-[16px] text-black text-center ">
                      {items.title}
                    </p>
                    {/* --------------------------button---------------------------------------- */}
                    <div className="flex justify-center  gap-4">
                      <Link href="http://vapeandgummy.com/product-brand/americana-hemp/"><button className="px-4 py-2 bg-black rounded-xl hover:bg-green-800 transition duration-500 ease-in-out mt-3 text-white text-[13px]">BUY NOW</button></Link>
                      <Link href="#"><button className="px-4 py-2 bg-black rounded-xl hover:bg-green-800 transition duration-500 ease-in-out mt-3 text-white text-[13px]">BUY WHOLE SALE</button></Link>
                   
                    </div>
                  </div>
                </div>
              );
            })}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
