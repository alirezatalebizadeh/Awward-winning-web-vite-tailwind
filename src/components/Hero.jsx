import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { TiLocationArrow } from 'react-icons/ti'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)



export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loadedVideo, setLoadedVideo] = useState(0)

  const totalVideo = 3;
  const nextVdRef = useRef(null)


  const HandleMiniVdClick = () => {
    setHasClicked(true)

    setCurrentIndex(prevIndex => prevIndex + 1)
  }
  // ! formol
  //0%4 = 0 + 1  => 1
  //1%4 =  + 1  => 2
  //2%4 = 2 + 1  => 3
  //3%4 = 3 + 1  => 4
  //4%4 = 0 + 1  => 1


  const upCommingVideoIndex = (currentIndex % totalVideo) + 1

  const getVdSource = (index) => `videos/hero-${index}.mp4`

  const HandleVdLoad = () => {
    setLoadedVideo(prev => prev + 1)
  }

  useEffect(() => {
    if (loadedVideo === totalVideo - 1) {
      setLoadedVideo((prev) => prev + 1)
    }
  }, [loadedVideo])


  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: 'polygon(10% 0%, 90% 0%, 98% 90%, 0% 95%)',
      borderRadius: "0% 0% 40% 10%"
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  })




  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      {
        isLoading && (
          <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
            {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
            <div className="three-body">
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
            </div>
          </div>
        )
      }


      <div id='video-frame'
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-[#DFDFF0]"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={HandleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-150 hover:opacity-100"
            >
              <video
                loop
                ref={nextVdRef}
                src={getVdSource(upCommingVideoIndex + 1)}
                muted
                id='current-video'
                className='size-64 origin-center scale-50 object-cover object-center'
                onLoadedData={HandleVdLoad}
              >

              </video>
            </div>
          </div>
          <video
            ref={nextVdRef}
            src={getVdSource(currentIndex)}
            loop
            muted
            id='next-video'
            className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
          >

          </video>
          <video src={getVdSource(currentIndex === totalVideo - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            onLoadedData={HandleVdLoad}
            className='absolute left-0 top-0 size-full object-cover object-center'
          >

          </video>
        </div>
        <h1 className='special-font hero-heading absolute bottom-5 left-5 z-20 text-left text-[#dfdff2] '>
         با <b className='text-yellow-300'>ز</b>ی
        </h1>

        <div className="absolute right-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10  text-right">
            <h1 className='special-font hero-heading text-[#F0F2FA]'>
              بازی
            </h1>

            <p className="mb-5  font-robert-regular text-[#F0F2FA]">
              اقتصاد بازی را به حرکت در آورید و <br /> وارد دنیای متاگیم شوید
            </p>
            <Button id="watch-trailer" title="مشاهده "

              leftIcon={<TiLocationArrow />}
              containerClass='bg-yellow-300 flex-center gap-1' />

          </div>
        </div>


      </div>
    </div >
  )
}
