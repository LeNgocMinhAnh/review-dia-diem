import StarRatings from "react-star-ratings";
import woman from '../../components/navbar/woman.png'
import Link from "next/link";
import { memo, useRouter } from "react";

export default function ReviewTest({user}) {
  return (
    <>
      <div className={`fixed inset-0 z-50 h-20 transition-all duration-500 bg-xanh31c2b8`}>
          <div className="container px-4 md:px-0 h-20 mx-auto flex items-center justify-between">
            <div className='flex flex-row justify-between items-center '>
            <Link href="/">
              <div className="cursor-pointer">
              <img src={woman} className="  h-20 p-2 "></img>
              </div>
              
            </Link>
            <div className='text-xl font-bold text-GhostWhite italic'>Ở đây có review nè</div>
            </div>
            
            <div>
              <button>Hi</button>
            </div>
          </div>
        </div>
        <div className="pt-20 text-white mt-0 border border-blue-800 w-full h-full"
           style={{backgroundImage: 'url("https://demos.onepagelove.com/html/leno/images/header-background.jpg")'}}>
        <section className="px-2 lg:px-0 flex w-full container mx-auto pb-36 xl:pb-24">
          <div className="w-full text-white flex justify-center md:justify-start text-center md:text-left">
            <div className="md:w-1/2 w-full">
              <h2 className="leading-none font-bold text-2xl xs:text-2x1 md:text-5xl lg:6x1 uppercase">Review <span
                className="text-blue-400">địa điểm</span></h2>
              <p className="mt-12 mb-12">This Landing is one is one of the easiest and feature packed marketing
                automation apps in the market. Download it today!</p>
              <div className="relative w-full">
              </div>
            </div>
            <div className="md:w-1/2 md:justify-center md:flex hidden">
              <img className="h-64" src="https://demos.onepagelove.com/html/leno/images/header-iphone.png"
                   alt="Mobile Phone"/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


