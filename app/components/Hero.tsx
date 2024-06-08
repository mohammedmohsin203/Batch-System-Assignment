import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage1 from "../../public/assets/Hero3.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="flex justify-around max-w-7xl items-center m-12 flex-col sm:flex-row">
        <div>
          <div className="px-5 pt-4 pb-8 lg:container lg:max-w-[846px] lg:m-auto ">
            <h1 className="text-info font-medium text-[32px] text-center lg:text-6xl lg:pt-11 lg:pb-6">
              Build AI Calling 📞 <br/>Agent that can do...
            </h1>
            <span className="text-indigo-500 lg:pt-11 lg:pb-6 inline-flex flex-col h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden text-[72px] font-bold items-start ">
              <ul className=" hidden sm:block animate-text-slide-6 text-left leading-[1.5] [&_li]:block">
                <li>Lead Generate</li>
                <li>Sales Call</li>
                <li>Recruitment</li>
                <li>Market Survey</li>
                <li>Upselling</li>
                <li>Finance</li>
              </ul>
            </span>
          </div>
          <div className="px-5 pb-2 lg:container flex justify-center items-center gap-2 lg:gap-10 sm:flex-row flex-col">
            <button className="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-orange-300 to-orange-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Build your Own Voice Agent
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales 🔊
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-blue-50 rounded-xl p-4 ">
          <div className="w-full max-w-sm p-4 bg-gradient-to-r from-orange-50 to-orange-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Try Now{" "}
              </h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Get a 📞 from Tooning.
                </label>
                <input
                  type="email"
                  name="Name"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder=" Name..."
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mobile No. 📱
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="+12 34 56 78 90"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-white hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                📞
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative flex justify-center">
        <Image src={Gradient} className="min-h-[500px] sm:min-h-[600px] md:min-h-[700px] w-full object-cover lg:min-h-[800px]" alt="Gradient" />
        <div className="absolute bottom-8 left-4 right-4 lg:container">
            <Image className="m-auto h-[310px] sm:h-[410px] md:h-[510px] lg:h-[600px]" src={HeroImage1} alt="heroImage" />
            <div className="lg:flex lg:justify-between lg:items-center lg:pt-[64px]">
                <p className="text-white text-[16px] lg:text-[18px] text-center pt-4 lg:pt-0 sm:pt-6 md:pt-8 sm:text-left">Automate your agency<br/> with 5000+ integrations like ...</p>
                <div className="flex flex-wrap gap-x-8 xl:gap-[96px] justify-center items-center">
                    <Image src={Google} alt="google" />
                    <Image src={Slack} alt="Slack" />
                    <Image src={Truspilot} alt="Truspilot" />
                    <Image src={Cnn} alt="Cnn" />
                    <Image src={Cluth} alt="Cluth" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
