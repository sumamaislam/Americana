import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/global";
import product from "../../redux/product";

function Detail() {
  const { details } = useSelector((state) => state.product);
  const { loading } = useSelector((state) => state.global);
  const [page, setPage] = useState("")

  const dispatch = useDispatch();

  console.log("details", details);
  // const url = products?.banner?.base_url+"/";

  const router = useRouter();
  console.log(router);

  useEffect(() => {
    const handleStart = (url) => {
      setPage(url)
      url !== router.pathname
        ? dispatch(setLoading(true))
        : dispatch(setLoading(false));
    };
    const handleComplete = (url) => dispatch(setLoading(false));

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <>
      <div className="pt-[0px]">
        <div
          className={` bg-cover bg-center w-full bg-no-repeat relative ${router.asPath === "/flavour/delta9o"
            ? "bg-[#F5DB90]"
            : router.asPath === "/flavour/d11"
              ? "bg-[#F5DCE8]"
              : router.asPath === "/flavour/fsb"
                ? "bg-[#ECF0D5]"
                : router.asPath === "/flavour/hhc"
                  ? "bg-[#EEE4CB]"
                  : router.asPath === "/flavour/nob"
                    ? "bg-[#F8ADB5]"
                    : router.asPath === "/flavour/gummydelta9o"
                      ? "bg-[#A4AAB2]"
                      : router.asPath === "/flavour/kop"
                        ? "bg-[#F1EAD7]"
                        : router.asPath === "/flavour/top"
                          ? "bg-[#DAA48E]"
                          : ""
            }`}
          style={{ backgroundImage: `url(${JSON.stringify(details[0]?.d3)})` }}
        >
          {/* -----------------------------------TITLE IMAGE------------------------------------ */}
          <div className=" pt-[100px]  md:pt-[130px]">
            <div>
              <ul className="flex flex-wrap w-full justify-center gap-8 2xl:gap-12 mt-10 bg-[#4C4838] py-5">
                <li>
                  <Link href="/flavour/delta9o">
                    <div className="relative">
                      <img
                        className={`md:w-[100px] w-[60px] hover:scale-110 duration-500  `}
                        src={`${router.asPath === "/flavour/delta9o"
                          ? "/images/D9o-bg.png"
                          : "/images/D9o-category.png"
                          }`}
                        alt="Delta 90 Indica"
                      />
                      {loading && page === "/flavour/delta9o" && <div className="  loader spin">

                      </div>}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/flavour/d11">
                    <div className="relative">

                      <img
                        className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 `}
                        src={`${router.asPath === "/flavour/d11"} ` ? "/images/D11-category.png" : "/images/D11-category.png"}
                        alt="Delta 11 Indica"
                      />
                      {loading && page === "/flavour/d11" && <div className="loader spin"></div>}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/flavour/fsb">
                    <div className="relative">

                      <img
                        className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 `}
                        src="/images/FSB-category.png"
                        alt="Fluid Spectrum Blend"
                      />
                      {loading && page === "/flavour/fsb" && <div className="loader spin"></div>}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/flavour/hhc">
                    <div className="relative">

                      <img
                        className={`md:w-[100px] w-[60px] hover:scale-110 duration-500`}
                        src="/images/HHC-category.png"
                        alt="Sativa Super Lemon Haze"
                      />
                      {loading && page === "/flavour/hhc" && <div className="loader spin"></div>}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/flavour/nob">
                    <div className="relative">

                      <img
                        className={`md:w-[100px] w-[60px] hover:scale-110 duration-500`}
                        src="/images/KOB.png"
                        alt="Knock Off Blend"
                      />
                      {loading && page === "/flavour/nob" && <div className="loader spin"></div>}
                    </div>

                  </Link>
                </li>
                <li>
                  <Link href="/flavour/gummydelta9o">
                    <div className="relative">

                      <img
                        className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 `}
                        src="/images/D9O.png"
                        alt="D90 Gummies"
                      />
                      {loading && page === "/flavour/gummydelta9o" && <div className="loader spin"></div>}
                    </div>

                  </Link>
                </li>
                <li>

                  <Link href="/flavour/kop">
                    <div className="relative">

                      <img
                        className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 `}
                        src="/images/NOB-Category.png"
                        alt="Knock Out Blend"
                      />
                      {loading && page === "/flavour/kop" && <div className="loader spin"></div>}
                    </div>

                  </Link>
                </li>
                <li>
                  <Link href="/flavour/top">
                    <div className="relative">

                      <img
                        className={`md:w-[100px] w-[60px] hover:scale-110 duration-500 `}
                        src="/images/TOB.png"
                        alt="Take Off Blend"
                      />
                      {loading && page === "/flavour/top" && <div className="loader spin"></div>}
                    </div>

                  </Link>
                </li>
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
              {details &&
                details[0]?.product_images?.map((items, index) => {
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
                          <Link href="http://vapeandgummy.com/product-brand/americana-hemp/">
                            <button className="px-4 py-2 bg-black rounded-xl hover:bg-green-800 transition duration-500 ease-in-out mt-3 text-white text-[13px]">
                              BUY NOW
                            </button>
                          </Link>
                          <Link href="#">
                            <button className="px-4 py-2 bg-black rounded-xl hover:bg-green-800 transition duration-500 ease-in-out mt-3 text-white text-[13px]">
                              BUY WHOLE SALE
                            </button>
                          </Link>
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
