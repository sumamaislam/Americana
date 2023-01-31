import React, { useEffect, useState } from "react";

function Topbtn() {
  const [show, setShow] = useState(false);
  useEffect(() => {
window.addEventListener("scroll",()=>{
    if(window.scrollY > 700){
        setShow(true);
        
    }
    else{
        setShow(false);
    }
})
  });

  const scrolltop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      { show && (<div className="fixed  bottom-4 lg:bottom-10 right-4 lg:right-10  cursor-pointer">
        <img
          className="lg:w-[70px] w-[60px] "
          src="/images/topbtn.png"
          alt="scroll btn"
          onClick={scrolltop}
        />
      </div>)}
    </div>
  );
}

export default Topbtn;
