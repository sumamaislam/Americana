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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              a consequatur illo expedita officiis illum praesentium reiciendis
              voluptates quos quisquam ullam doloremque beatae fugiat laborum
              magnam sunt reprehenderit quia ducimus?
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut animi
              quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ut animi quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ut animi quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut animi
              quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ut animi quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ut animi quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
