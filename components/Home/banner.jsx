import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Banner() {
  
  const { products } = useSelector((state)=>state.home);

  console.log("products",products)
  // src={`${url}/${products?.banner?.product[0]?.image}`}

  const url = products?.banner?.base_url
  return (
    <div className="">
      {/*---------------------------- Banner image---------------------- */}
      <div className="bg-[url('/images/landingpage.png')] bg-cover bg-center w-full bg-no-repeat relative">
        <div className="containers">
          {/*--------------------- product images------------------ */}
          <div className="flex lg:flex-row justify-between flex-col ">
            {/* ----------------vape image------------------ */}
            <div className="2xl:mt-[22%]  mt-[20%] lg:mt-[32%] mb-[3%]  2xl:mb-[5%]">
              <Link href={`/${"vapes"}`}>
              <img
                className="2xl:w-[700px] xl:w-[600px] lg:w-[450px] w-[320px] m-auto vape_image hover:scale-95 duration-700"
                src="/images/35.png"
                alt="product vape image"
              />
              </Link>
            </div>
            {/*-----------------GUMMY IMAGE----------------- */}
            <div className="2xl:mt-[25%]  lg:mt-[35%] mb-[3%] 2xl:mb-[5%]">
            <Link href={`/${"gummies"}`}>
              <img
                className="2xl:w-[700px] xl:w-[600px] lg:w-[450px] w-[320px] m-auto  gummy_image  hover:scale-95 duration-700"
                src="/images/34.png"
                alt="product gummies image"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
