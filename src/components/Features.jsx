import React from 'react'
import Bentocard from './Bentocard'
import { TiLocationArrow } from 'react-icons/ti'
import BentoTilt from './BentoTilt'

export default function Features() {
  return (
    <section className='bg-black pb-52'>
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className='font-circular-web text-lg text-[#DFDFF0]'>پیش بسوی بازی</p>
          <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
            بازی کنید و امتیاز بگیرید و به دوستان خود در نبرد ها کمک کنید.<br /> تمامی دارایی شما قابل استفاده برای کمک و یا ارتقا سطح بازی خود قابل استفاده است.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <Bentocard
            src="videos/feature-1.mp4"
            title={<>تنوع</>}
            description="پشتیبانی پرقدرت در تمامی پلتفرم های وب 2  و وب تری"
          />
        </BentoTilt>


        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 ">
            <Bentocard
              src="videos/feature-2.mp4"
              title={<>جذاب</>}
              description="استفاده از انیمه های فوق العاده جذاب "
            />

          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 me-32 md:col-span-1 md:me-0">
            <Bentocard
              src="videos/feature-3.mp4"
              title={<>محبوب</>}
              description="دارای جامعه بسیار گسترده و بازیکنان زیاد"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 ms-14 md:col-span-1 md:me-0">
            <Bentocard
              src="videos/feature-4.mp4"
              title={<>چالش</>}
              description="باید فکرت رو به کار بندازی و ادامه بدی"
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className='bento-title special-font max-w-64 text-black'>ادامه مطلب به زودی...</h1>
              <TiLocationArrow className='m-5 scale-[5] self-end rotate-[260deg]' />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className='size-full object-cover object-center '
            />
          </BentoTilt>

        </div>
      </div>
    </section>
  )
}
