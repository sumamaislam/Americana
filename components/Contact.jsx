import React from 'react'

function Contact() {
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
                  <form >
                    <input className='bg-gray-100 focus:outline-none rounded-md h-[41px] mb-[20px] w-full px-[15px]'
                      label={"Enter Full Name"}
                      name={"firstname"}
                      placeholder="Name"
                      // handleChange={handleChange}
                      // value={inputData.firstname}
                      type="text"
                    />
                    {/* <p className="">{error.firstname}</p> */}
                    <input className='bg-gray-100 focus:outline-none rounded-md h-[41px] mb-[20px] w-full px-[15px]'
                      label={"Enter Email Address"}
                      name={"email"}
                      placeholder="Email"
                      // handleChange={handleChange}
                      // value={inputData.email}
                      type="email"
                    />
                    {/* <p className="">{error.email}</p> */}

                    <div className="rounded-md m-auto mb-[20px]">
                      <textarea
                        className="border h-[100px] w-full  py-[10px] px-[15px] rounded-md bg-gray-100 focus:outline-none "
                        name="message"
                        id=""
                        cols="48"
                        rows="3"
                        type="text"
                        placeholder="Enter Your Messgae"
                      //   onChange={handleChange}
                      //   value={inputData.message}
                      ></textarea>
                      {/* <p className="">{error.message}</p> */}
                    </div>

                    <div>
                      <button
                        className="outline outline-slate-200 outline-1 font-semibold text-white h-[41px] rounded-md text-[17px] w-full"
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