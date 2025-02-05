import React, { useRef, useState } from 'react'



export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideo, setLoadedVideo] = useState(0)

  const totalVideo = 4;
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




  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
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
                muted id='current-video'
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
        <h1 className=' special-font hero-heading absolute bottom-5 right-5 text-blue-[#dfdff2] '>
          با
          <a href="">
            ز
          </a>
          ی
        </h1>

        <div className="absolute right-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10  text-right">
            <h1 className='special-font hero-heading text-[#F0F2FA]'>
              بازی
            </h1>

            <p className="mb-5  font-robert-regular text-[#F0F2FA]">
              بازی رو شروع کنید
              <br />
              شروع بازی
            </p>

          </div>
        </div>


      </div>
    </div >
  )
}
