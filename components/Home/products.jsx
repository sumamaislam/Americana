import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Products() {

  const { products } = useSelector((state)=>state.home);

  console.log("products",products)
  const url = products?.banner?.base_url+"/";
  // const url2 = products?.banner?.base_url+"/"+products?.lists[1]?.bg_image;
  // console.log("url44",url2)
  // const bb = products?.lists[0].center_image
  // console.log("image",url+"/"+bb)

 

  return (
    <>
      {products?.lists?.map((items, index) => {
        return (
          // ---------------------MAIN DIV--------------------------
          <div key={index} className="2xl:mt-[-125px] xl:mt-[-130px] mt-[-110px] lg:mt-[-100px] ">
            {/*--------------------------BACKGROUND IMAGE--------------------------- */}
            <div
              className=" bg-cover bg-center w-full bg-no-repeat"
              style={{ backgroundImage: `url(${JSON.stringify(url+items.bg_image)})` }}
            >
              {/* --------------------DATA--------------------------- */}
              <div className={`relative flex flex-col-reverse lg:flex-row lg:gap-[370px] py-[100px] lg:py-[200px] containers justify-between   items-center ${index % 2 == 0 ? "" : "change_class"}`}>
                {/* ---------------------------TITLE IMAGE--------------------- */}
                <div className="">
                  <img className="w-[200px] lg:w-[250px] xl:w-[300px] m-auto" src={`${url+items.title_image }`} alt="" />
                  <div>
                    {/* -----------------DESCRIPTION-------------------------- */}
                    <p className="max-w-[700px] lg:text-[16px]  xl:text-[20px] font-bold mt-7 text-center">
                      {items.product_description}
                    </p>
                  </div>
                  {/* ---------------------------BUTTON------------------------- */}
                  <Link href={{ pathname: `/flavour/${items.slug}` }}>
                  <div className="flex justify-center mb-[20px]">
                    <button className="px-10 py-4 bg-black text-white rounded-xl mt-5  ">
                    { items.button_text}
                    </button>
                  </div>
                  </Link>
                </div>
                {/* -------------------------------MIDDLE IMAGE------------------------ */}
                <div className="lg:block w-[300px]  m-auto hidden absolute set_image">
                  <img className="w-[300px]  m-auto" src={`${url+items.center_image}`} alt="" />
                </div>
                {/* -------------------------------------PRODUCT IMAGE--------------------- */}
                <div>
                  <img  src={`${url+items.product_image }`} className="lg:w-[600px] md:w-[400px] w-[300px] m-auto" alt="" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Products;
