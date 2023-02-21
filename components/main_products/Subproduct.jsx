import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Banner } from "../Home";

function Subproduct() {
  const { details } = useSelector((state) => state.product);
  // const { products } = useSelector((state) => state.home);
console.log(details)
  // const url = products?.banner?.base_url + "/" ;
  const url = `https://erp.frutycactus.com/public/storage/` + "/";

  return (
    <>
      {/* <Banner /> */}
      <div className="">
        {/*---------------------------- Banner image---------------------- */}
        {/* <div
          className=" bg-cover bg-center w-full bg-no-repeat relative"
          style={{ backgroundImage: `url(${url+details[0]?.detail?.banner})` }}
        >
          <div className="containers">
       
            <div className="flex lg:flex-row justify-between flex-col ">
            
              <div className="2xl:mt-[22%]  mt-[20%] lg:mt-[32%] mb-[3%]  2xl:mb-[5%]">
                <Link href={`/vapes`}>
                  <img
                    className="2xl:w-[700px] xl:w-[600px] lg:w-[450px] w-[320px] m-auto vape_image hover:scale-95 duration-700"
                    src={`${url+details[0]?.detail?.product_image}`}
                    alt="product vape image"
                  />
                </Link>
              </div>
             
            </div>
          </div>
        </div> */}
        <img className="hidden md:block pt-10 2xl:pt-[0px]  w-full" src={details[0]?.detail?.d1} alt="" />
        <img className="md:hidden w-full" src={url+details[0]?.detail?.product_image} alt="" />
      </div>
      {details &&
        details?.map((items, index) => {
          return (
            // ---------------------MAIN DIV--------------------------
            <div
              key={index}
              className="2xl:mt-[-125px] xl:mt-[-130px] mt-[-110px] lg:mt-[-100px] "
            >
              {/*--------------------------BACKGROUND IMAGE--------------------------- */}
              <div
                className=" bg-cover bg-center w-full bg-no-repeat"
                style={{ backgroundImage: `url( ${JSON.stringify(items.d4)})` }}
              >
                {/* --------------------DATA--------------------------- */}
                <div
                  className={`relative flex flex-col-reverse lg:flex-row lg:gap-[370px] py-[100px] lg:py-[200px] containers justify-between   items-center ${
                    index % 2 == 0 ? "" : "change_class"
                  }`}
                >
                  {/* ---------------------------TITLE IMAGE--------------------- */}
                  <div className="">
                    <img
                      className="w-[200px] lg:w-[250px] xl:w-[300px] m-auto"
                      src={items.d1}
                      alt=""
                    />
                    <div>
                      {/* -----------------DESCRIPTION-------------------------- */}
                      <p className="max-w-[700px] lg:text-[16px]  xl:text-[20px] font-bold mt-7 text-center">
                        {items.product_description}
                      </p>
                    </div>
                    {/* ---------------------------BUTTON------------------------- */}
                    <Link href={`/flavour/${items.slug}`}>
                      <div className="flex justify-center mb-[20px]">
                        <button className="px-10 py-3 hover:bg-green-800 transition duration-500 ease-in-out bg-black text-white rounded-xl mt-5  ">
                          {items.button_text}
                        </button>
                      </div>
                    </Link>
                  </div>
                  {/* -------------------------------MIDDLE IMAGE------------------------ */}
                  <div className="lg:block w-[300px]  m-auto hidden absolute set_image">
                    <img
                      className="w-[300px]  m-auto"
                      src={url + items.center_image}
                      alt=""
                    />
                  </div>
                  {/* -------------------------------------PRODUCT IMAGE--------------------- */}
                  <div>
                    <img
                      src={items.d2}
                      className="lg:w-[600px] md:w-[400px] w-[300px] m-auto"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Subproduct;
