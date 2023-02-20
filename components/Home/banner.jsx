import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Banner() {
  
  const { products } = useSelector((state)=>state.home);

  console.log("products",products)
  // src={`${url}/${products?.banner?.product[0]?.image}`}

  const url = products?.banner?.base_url
  const back =  products?.banner?.d1; 
  console.log(back)
  
  return (
    <div className="">
      {/*---------------------------- Banner image---------------------- */}
      <div className=" bg-cover bg-center w-full bg-no-repeat relative" style={{ backgroundImage: `url(${JSON.stringify(back)})` }}>
        <div className="containers">
          {/*--------------------- product images------------------ */}
          <div className="flex lg:flex-row justify-between flex-col ">
            {/* ----------------vape image------------------ */}
            <div className="2xl:mt-[22%]  mt-[20%] lg:mt-[32%] mb-[3%]  2xl:mb-[5%]">
              <Link href={`/vapes`}>
              <img
                className="2xl:w-[700px] xl:w-[600px] lg:w-[450px] w-[320px] m-auto vape_image hover:scale-95 duration-700"
                src={products?.product[0]?.d1}
                alt="product vape image"
              />
              </Link>
            </div>
            {/*-----------------GUMMY IMAGE----------------- */}
            <div className="2xl:mt-[22%]  lg:mt-[30%] mb-[3%] 2xl:mb-[5%]">
            <Link href={`/gummies`}>
              <img
                className="2xl:w-[700px] xl:w-[600px] lg:w-[450px] w-[320px] m-auto  gummy_image  hover:scale-95 duration-700"
                src={products?.product[1]?.d1}
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
