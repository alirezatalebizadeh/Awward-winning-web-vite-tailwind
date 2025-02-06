import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


export default function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  })






  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          به سایت ما خوش آمدید.
        </p>
        <AnimatedTitle
          title="دنیای بزرگ‌ترین <br/> ماجراجویی مشترک را کشف کنید"
          containerClass="mt-5 !text-black text-center"
        />


        <div className="about-subtext">
          <p>بازی بزرگ آغاز می‌شود</p>
          <p className="text-gray-500">
            بازی ما تمامی بازیکنان از بازی‌ها و پلتفرم‌های مختلف، چه دیجیتال و چه فیزیکی، را در یک اقتصاد بازی یکپارچه گرد هم می‌آورد.






          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id='clip'>
        <div className="mask-clip-path about-image">
          <img src='/img/about.webp' alt="Background"

            className='absolute left-0 top-0 size-full object-cover' />
        </div>
      </div>
    </div>
  )
}
