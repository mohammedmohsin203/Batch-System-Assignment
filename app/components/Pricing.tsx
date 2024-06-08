import Image from "next/image";
import img from "@/public/assets/Security Shield.png";
import img2 from "@/public/assets/Private.png";
import img3 from "@/public/assets/Key.png";
import img4 from "@/public/assets/Brain.png";
import img5 from "@/public/assets/Voice.png";
const Pricing = () => {
  return (
    <div className="px-4 lg:px-0 lg:container my-24 lg:my28">
      <div className="px-[32px] py-[56px]  bg-white rounded-xl" id="">
        <div className="flex flex-col gap-y-2 justify-center items-center ">
          <Image src={img} alt="img" className="w-[72px] h-[72px]" />
          <div className="text-center text-[24px] lg:text-[56px] font-medium text-black lg:max-w-[628px] m-auto">
            The Highest standards of Trust & Safety
          </div>
        </div>
        <p className="text-center text-[16px] lg:text-[18px] text-black my-10 lg:my-11">
          We continue to actively restrict the calls we support, ensuring that
          <br />
          our AI phone call technology continues to benefit consumers,
          <br />
          businesses, and society as a whole.
        </p>
        <div className="flex justify-center items-center gap-x-6 lg:gap-x-10">
          <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1 gap-4">
            <div className="flex justify-center items-center flex-col">
              {" "}
              <Image src={img5} alt="img" className="w-[72px] h-[72px]" />
              <div className="text-center text-[18px]  font-medium text-black lg:max-w-[628px] m-auto">
                Call Monitoring{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              {" "}
              <Image src={img2} alt="img" className="w-[72px] h-[72px]" />
              <div className="text-center text-[18px]  font-medium text-black lg:max-w-[628px] m-auto">
                Prompt Injection{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              {" "}
              <Image src={img3} alt="img" className="w-[72px] h-[72px]" />
              <div className="text-center text-[18px]  font-medium text-black lg:max-w-[628px] m-auto">
                Rate Limits{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              {" "}
              <Image src={img4} alt="img" className="w-[72px] h-[72px]" />
              <div className="text-center text-[18px]  font-medium text-black lg:max-w-[628px] m-auto">
                Internal Hard Audits{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
