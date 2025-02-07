import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from "gsap";
import Button from './Button';




export default function Story() {

  const frameRef = useRef(null)

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  }


  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });

  }

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
      <div className="flex size-full flex-col items-center py-10 pb-24 ">
        <p className='font-general text-sm uppercase md:text-[10px] '> دنیای چندجهانی</p>

        <div className="relative size-full">
          <AnimatedTitle
            title="میدونید چه دنیای <br/>شگفت انگیزی در انتظار شماست؟</>"
            sectionId="#story"
            containerClass="my-5 mb-8 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>



        <div className="-mt-70 flex w-full justify-center sm:-mt-75 md:-mt-64 md:ms-44 md:justify-start z-20">
          <div className="flex h-full w-fit flex-col items-center md:items-end">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              جایی که قلمروها به هم می‌رسند، زنتری و ستون بی‌کران قرار دارند.
              رازهای آن را کشف کن و سرنوشت خود را در میان فرصت‌های بی‌پایان شکل بده.
            </p>
            <Button
              id="relm-btn"
              title="بازی کن"
              containerClass="mt-5 md:self-start"
            />
          </div>
        </div>


      </div>
    </section>
  )
}
