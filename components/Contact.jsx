import React from 'react'

function Contact() {
  return (
    <>
      <div className="bg-[url('/images/contact.png')] h-full w-full bg-no-repeat bg-cover">

        <div className="py-[60px]">
          <div className="pt-[100px] text-center text-5xl about ">
            Contact us
          </div>
          <div className="bg-none mb-[150px] my-14 mx-auto max-w-4xl h-[600px] flex items-center">
            {/* image */}

            <div className="hidden lg:flex md:items-center   md:justify-center ">
              <img className="h-[600px]" src="/images/contact-us.png" alt="contact-us" />
            </div>

            {/* right secction */}
            <div className="md:mx-auto bg-white md:w-[573px]  h-[600px] mx-5   items-center flex">
              <div className="sm:px-[120px] px-[30px] items-center text-center m-auto">
                <div className="">
                  <img
                    className="w-[150px] m-auto pb-[20px]"
                    src="/images/logo.png"
                    alt="contact-us"
                  />
                  <div className="text-3xl  pb-[20px]">Contact us</div>
                  <form >
                    <input className='bg-gray-100 focus:outline-none rounded-md h-[41px] mb-[20px] w-full px-[15px]'
                      label={"Enter Full Name"}
                      name={"firstname"}
                      // handleChange={handleChange}
                      // value={inputData.firstname}
                      type="text"
                    />
                    {/* <p className="">{error.firstname}</p> */}
                    <input className='bg-gray-100 focus:outline-none rounded-md h-[41px] mb-[20px] w-full px-[15px]'
                      label={"Enter Email Address"}
                      name={"email"}
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
                        className="outline outline-slate-200 outline-1 hover:bg-[#699BF7] hover:text-white h-[41px] rounded-md text-sm w-full"
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