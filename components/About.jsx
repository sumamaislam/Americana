import React from "react";

function About() {
  return (
    // ----------------------BACKGROUND IMAGE-----------------------------
    <div className="bg-[url('/images/about.png')] h-full w-full bg-no-repeat bg-cover">
      {/* ----------------------------MAIN DIV ---------------------------------*/}
      <div className="pb-[200px]">
        {/* ------------------------HEADING----------------------------------*/}
        <div>
          <p className="text-center pt-[130px] md:pt-[180px] text-5xl font-bold">
            About us
          </p>
          {/* ------------------------------TITLE----------------------------  */}
          <div className=" pt-[10px]   max-w-[800px] mx-auto px-[30px] md:text-[20px] text-medium ">
            <p>
            Americana hemp is your go to destination for high quality CBD vapes
and gummies. Our mission is to provide our customers with the best
CBD products available on the market. We are committed to provide
excellent customer service.
            </p>
          </div>
        </div>
        {/* -------------------------------FIRST CATEGORY------------------------ */}
        <div className="flex flex-col-reverse md:flex-row max-w-[1400px] mx-auto justify-between pt-[30px] md:pt-[100px] md:gap-24 px-[30px] items-center  about">
          {/* -------------------------------------TITLE-------------------------- */}
          <div className="max-w-[600px] pt-[30px] md:pt-[0px]">
            <p className="text-center text-5xl font-bold ">VAPES</p>
            {/* ---------------------------------DESCRIPTION--------------------------------*/}
            <p className="pt-[10px] text-justify text-[20px] ">
            Vaping has become increasingly popular way to consume CBD. Vaping
offers a quick and effective way to experience the natural benefits of
CBD. At Americana hemp, we are proud to offer some of the best cbd
vapes on the market. Our vapes are made with highest quality
experience and are designed to provide our customers with a safe,
effective, and enjoyable way to experience the natural benefits of CBD.
One of the reasons why our vapes are popular is because of our
commitment to quality. We utilize high quality, organic cbd oil in our
vapes. Our vapes are free from harmful chemicals and additives,
ensuring that you get the purest CBD experience possible.
            </p>
          </div>
          {/* P-------------------------------------IMAGE--------------------------------------- */}
          <div className="max-w-[600px]">
            <img src="/images/34.png" alt="vape image" />
          </div>
        </div>

        {/* -----------------------------SECOND CATEGORY----------------------------------- */}
        <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto justify-between pt-[30px] md:pt-[100px] md:gap-24 px-[30px] items-center  about">
          {/* ------------------------------IMAGE------------------------------ */}
          <div className="max-w-[600px]">
            <img src="/images/35.png" alt="gummies image" />
          </div>
          <div className="max-w-[600px]  pt-[30px] md:pt-[0px]">
            {/* ---------------------TITLE----------------------------------- */}
            <p className=" text-center text-5xl  font-bold">Gummies</p>
            {/*------------------------------------- DESCRIPTION---------------------------------  */}
            <p className="pt-[10px] text-justify text-[20px] ">
            Gummies are a popular type of candy that come in a variety of flavors,
shapes, and sizes. They are made from gelatin, sugar, water, and other
ingredients, and they can be customized with different colors, flavors,
and even vitamins or supplements. Our CBD gummies are made with
high-quality, organic ingredients, and they can come in a range of
flavors and strengths. Americana Hemp is a leading supplier of high-
quality CBD gummies in the United States. We are dedicated to
providing our customers with a wide range of gummies that are made
with the best quality ingredients and produced in a state-of-the-art
facility. One of the things that sets us apart from other companies is our
commitment to quality. All of our gummies are made with non-GMO,
organic, and vegan-friendly ingredients, and they are third-party lab
tested to ensure purity and potency. This means that customers can trust
that they are getting a safe and effective product when they choose
Americana Hemp gummies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
