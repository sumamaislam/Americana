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
          src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/images%2FFebruary_2023%2Ftopbtn.png34636944-aae9-45b2-a0de-0dd84e8aba19?alt=media&token=fdc3ab82-2f0c-4e24-b361-4ca456dba3da
          "
          alt="scroll btn"
          onClick={scrolltop}
        />
      </div>)}
    </div>
  );
}

export default Topbtn;
