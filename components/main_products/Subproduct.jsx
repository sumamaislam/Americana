import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Banner } from "../Home";

function Subproduct() {
  const subproduct = useSelector((state) => state.home);
  console.log("subproduct", subproduct);

  
  const banner = [
    {
      id: 1,
      background_image: "/images/3.png",
      tittle_image: "/images/2.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum veritatis in veniam, similique ullam exercitationem omnis voluptatum ipsa sed, eaque delectus! Blanditiis!",
      btn_text: "View More",
      middle_image: "/images/4.png",
      product_image: "/images/1.png",
    },
    {
      id: 2,
      background_image: "/images/6.png",
      tittle_image: "/images/5.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum veritatis in veniam, similique ullam exercitationem omnis voluptatum ipsa sed, eaque delectus! Blanditiis!",
      btn_text: "View More",
      middle_image: "/images/7.png",
      product_image: "/images/8.png",
    },
    {
      id: 3,
      background_image: "/images/10.png",
      tittle_image: "/images/9.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum veritatis in veniam, similique ullam exercitationem omnis voluptatum ipsa sed, eaque delectus! Blanditiis!",
      btn_text: "View More",
      middle_image: "/images/11.png",
      product_image: "/images/12.png",
    },
    {
      id: 4,
      background_image: "/images/13.png",
      tittle_image: "/images/14.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum veritatis in veniam, similique ullam exercitationem omnis voluptatum ipsa sed, eaque delectus! Blanditiis!",
      btn_text: "View More",
      middle_image: "/images/15.png",
      product_image: "/images/16.png",
    },
    {
      id: 5,
      background_image: "/images/17.png",
      tittle_image: "/images/18.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum veritatis in veniam, similique ullam exercitationem omnis voluptatum ipsa sed, eaque delectus! Blanditiis!",
      btn_text: "View More",
      middle_image: "/images/19.png",
      product_image: "/images/20.png",
    },
  ];

  return (
    <>
      <Banner />
      {banner.map((items, index) => {
        return (
          // ---------------------MAIN DIV--------------------------
          <div
            key={index}
            className="2xl:mt-[-125px] xl:mt-[-130px] mt-[-110px] lg:mt-[-100px] "
          >
            {/*--------------------------BACKGROUND IMAGE--------------------------- */}
            <div
              className=" bg-cover bg-center w-full bg-no-repeat"
              style={{ backgroundImage: `url(${items.background_image})` }}
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
                    src={items.tittle_image}
                    alt=""
                  />
                  <div>
                    {/* -----------------DESCRIPTION-------------------------- */}
                    <p className="max-w-[700px] lg:text-[16px]  xl:text-[20px] font-bold mt-7 text-center">
                      {items.description}
                    </p>
                  </div>
                  {/* ---------------------------BUTTON------------------------- */}
                  <Link href={`/flavour${items.id}`}>
                    <div className="flex justify-center mb-[20px]">
                      <button className="px-10 py-4 bg-black text-white rounded-xl mt-5  ">
                        {items.btn_text}
                      </button>
                    </div>
                  </Link>
                </div>
                {/* -------------------------------MIDDLE IMAGE------------------------ */}
                <div className="lg:block w-[300px]  m-auto hidden absolute set_image">
                  <img
                    className="w-[300px]  m-auto"
                    src={items.middle_image}
                    alt=""
                  />
                </div>
                {/* -------------------------------------PRODUCT IMAGE--------------------- */}
                <div>
                  <img
                    src={items.product_image}
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
