import React, { useState } from 'react'

function Contact() {
  const fields = {name:"" ,email:"" , message:""}
  const [values,setValue]=useState(fields)
 const [errors ,setErrors]=useState({})
  const handleChange=(e)=>{
setValue({...values ,[e.target.name]:e.target.value})
// console.log(values)
  }
  const handleSubmit=(e)=>{
e.preventDefault();
validate(values)
  }
  const validate =(value)=>{
let error={};
if(!value.name){
  error.name="Name is required"
}
if(!value.email){
  error.email="Email is required"
}
if(!value.message){
  error.message="message is required"
}

  if(Object.keys(error).length > 0){
    setErrors(error)
  }
else{
  setValue({ name: "", email: "", message: "" });
setErrors({name: "", email: "", message: ""})
console.log( values)
}
  }
  return (
    <>
      <div className="bg-[url('/images/about.png')] h-full w-full bg-no-repeat bg-cover">

        <div className="py-[60px]">
          <div className="md:pt-[100px] pt-[50px] text-center md:text-3xl text-3xl lg:text-5xl about font-bold">
            Contact us
          </div>
          <div className="bg-none lg:bg-[url('/images/contact.png')] mb-5 md:mb-[150px] md:mt-[50px]  mx-auto lg:shadow-xl  max-w-4xl h-[600px] flex items-center">
            {/* image */}

            <div className="hidden lg:flex md:items-center   md:justify-center ">
              <img className="px-5" src="/images/contact_vector.png" alt="contact-us" />
            </div>

            {/* right secction */}
            <div className="md:mx-auto bg-[#6F8353] md:w-[573px]  lg:rounded-l-[60px] h-[500px] sm:mt-[100px] md:mt-[0px] md:h-[600px] mx-3 rounded-lg md:rounded-none    items-center flex">
              <div className="px-2 md:px-[30px] items-center text-center m-auto">
                <div className="">
                  <img
                    className="w-[150px] md:w-[220px] m-auto pb-[20px]"
                    src="/images/logo.png"
                    alt="contact-us"
                  />
                  <div className="lg:text-3xl text-2xl text-white  pb-[20px] font-medium">Contact us</div>
                  <form onSubmit={handleSubmit}>
                    <input className={` focus:outline-none  rounded-md h-[41px] mb-[20px]  w-full px-[15px]   ${errors.name ? "change_inputs text-red-500" : ""}`}
                      label={"Enter Full Name"}
                      name={"name"}
                      placeholder="Name"
                       onChange={handleChange}
                      value={values.name}
                      type="text"
                    />
                   {/* <p>{errors.name}</p> */}
                    <input  className={`bg-gray-100 focus:outline-none  rounded-md h-[41px] mb-[20px] w-full px-[15px] ${errors.email ? "change_inputs text-red-500" : ""}`}
                      label={"Enter Email Address"}
                      name={"email"}
                      placeholder="Email"
                      onChange={handleChange}
                      value={values.email}
                      type="email"
                
                    />
                   

                    <div className="rounded-md m-auto mb-[20px]">
                      <textarea
                        className={`border h-[100px] w-full  py-[10px] px-[15px] rounded-md bg-gray-100 focus:outline-none ${errors.message ? "change_inputs text-red-500" : ""}`}
                        name="message"
                        id=""
                        cols="48"
                        rows="3"
                        type="text"
                        placeholder="Enter Your Messgae"
                        onChange={handleChange}
                       value={values.message}
                      ></textarea>
                    
                    </div>

                    <div>
                      <button
                        className="outline outline-slate-200 outline-1 font-semibold hover:bg-green-700  hover:outline-none text-white h-[41px] rounded-md text-[17px] w-full"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact