import React from 'react'
import { useSelector } from 'react-redux'

function Detail() {
  const flavours = [
    {
      id: 1,
      name: "D9o BlueBerry RaspBerry Ice",
      image: "/images/47.png",
    },
    {
      id: 2,
      name: " D9o cherry ak-47",
      image: "/images/38.png",
    },
    {
      id: 3,
      name: "D9o Dubian Poison",
      image: "/images/39.png",
    },
    {
      id: 4,
      name: "D9o Gorila glue",
      image: "/images/40.png",
    },
    {
      id: 5,
      name: "D9o honey dew lemon ice",
      image: "/images/41.png",
    },
    {
      id: 6,
      name: "D9o Moui Wowie",
      image: "/images/42.png",
    },
    {
      id: 7,
      name: "D9o Northern Lights",
      image: "/images/43.png",
    },
    {
      id: 8,
      name: "D9o OG lemonade",
      image: "/images/44.png",
    },
    {
      id: 9,
      name: "D9o Peach Flambe",
      image: "/images/45.png",
    },
    {
      id: 10,
      name: "D9o Tropicana Cookies",
      image: "/images/46.png",
    },
  ];
  
  const {details} = useSelector((state)=>state.product);

  console.log("details",details)
  return (
    <>
    <div   
     className="bg-[url('/images/36.png')] bg-cover bg-center w-full bg-no-repeat relative"> 
          <div className="flex justify-center pt-[100px]  md:pt-[220px]">
            <img
              className="xl:max-w-[300px] lg:max-w-[210px]  max-w-[150px]  "
              src="/images/2.png"
              alt="title  image"
              />
          </div>
    <div className="pb-[200px] containers">
    <div className="grid grid-col md:grid-cols-2   lg:grid-cols-4 md:gap-9  items-center justify-items-center md:pt-[20px] pt-[120px]">
      {flavours.map((items,index)=>{
        return(
          
          
        <div key={index} className="mt-[2px]  about" >
          <div className="w-[400px] ">
            <img className=' hover:scale-110 transition duration-300 ease-in-out' src={items.image} alt="item-img" />
            <p className="mt-[15px] font-bold text-[14px] md:text-[16px] text-black text-center ">
             {items.name}
            </p>
          </div>
          
        
         
        </div>
     
    

     )
    })}
    </div>
        
      </div>
      </div>
              </>
  )
}

export default Detail