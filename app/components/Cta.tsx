import Image from "next/image";
import Link from "next/link";
import React from "react";
import RedArrow from "../../public/assets/RedArrow.svg";

const Cta = () => {
  const notifications = [
    {
      description:"Terms & Conditions"
    },
    {
      description:"Privacy Policy"
    },
    {
      description:"API Docs"
    },
    {
      description:"Careers"
    },
    {
      description:"Help Center"
    },
  ]
  return (
    <div className="px-4 lg:px-0 lg:container my-24 lg:my28">
      <div
        className="px-[32px] py-[56px]  bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl"
        id=""
      >
        <h1 className="text-center text-[32px] lg:text-[56px] font-medium text-white lg:max-w-[628px] m-auto">
TONiNG.        </h1>
        <p className="text-center text-[16px] lg:text-[18px] text-white my-10 lg:my-11">
We are Here to grow 🌴 your Business 💗        </p>
        <div className="flex justify-center items-center gap-x-6 lg:gap-x-10 sm:flex-row flex-col gap-y-4">
        {notifications.map((notification, index) => (

          <Link
            className="flex flex-col sm:flex-row items-center gap-x-3 font-medium text-[#fff] text-[16px] lg:text-[18px]"
            href="#"
            key={index}
          >
            {notification.description} 
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Cta;
