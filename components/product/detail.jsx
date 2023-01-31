import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import product from "../../redux/product";

function Detail() {
  
  
  const { details } = useSelector((state) => state.product);
  const { products } = useSelector((state) => state.home);

  console.log("details", details);
  const url = products?.banner?.base_url+"/";

  return (
    <>
    <div className="pt-[0px]">

      <div className=" bg-cover bg-center w-full bg-no-repeat relative "    style={{ backgroundImage: `url(${details[0]?.background_image})` }}>
        {/* -----------------------------------TITLE IMAGE------------------------------------ */}
        <div className="flex justify-center pt-[100px]  md:pt-[220px]">
          <img
            className="xl:max-w-[300px] lg:max-w-[210px]  max-w-[150px]  "
            src={details && details[0]?.title_image}
            alt="title  image"
            />
        </div>
        {/*----------------------------------MAP-----------------------------------------------  */}
        <div className="pb-[200px] containers">
          <div className="grid grid-col md:grid-cols-2   lg:grid-cols-4 xl:grid-cols-5 md:gap-9  items-center justify-items-center md:pt-[20px] ">
            {details && details[0]?.product_images?.map((items, index) => {
              return (
                // -------------------------------------IMAGE---------------------------------------
                <div key={index} className="mt-[2px]  ">
                  <div className=" ">
                    <img
                      className="w-[1500px] hover:scale-110 transition duration-300 ease-in-out"
                      src={items.image}
                      alt="item-img"
                      />
                    {/* ----------------------------------------NAME------------------------------------- */}
                    <p className="mt-[5px] font-bold text-[14px] md:text-[16px] text-black text-center ">
                      {items.title}
                    </p>
                    {/* --------------------------button---------------------------------------- */}
                    <div className="flex justify-center">
                      <Link href="http://vapeandgummy.com/product-brand/americana-hemp/"><button className="px-8 py-2 bg-black rounded-xl hover:bg-green-800 transition duration-500 ease-in-out mt-3 text-white text-[13px]">BUY NOW</button></Link>
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
