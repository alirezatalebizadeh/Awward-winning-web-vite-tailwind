import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'

const ImageClipBox = ({ src, clipClass }) => {
  return (<div className={clipClass}>
    <img src={src} alt="contact-1" />
  </div>)

}

export default function Contact() {
  return (
    <div id="contact" className='my-20 min-h-90 w-screen px-10'>
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">

          <ImageClipBox
            clipClass={`contact-clip-path-1`}
            src="img/contact-1.webp"
          />
          <ImageClipBox
            clipClass={`contact-clip-path-2 lg:translate-y-40 translate-y-60`}
            src="img/contact-2.webp"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="img/swordman-partial.webp"
            clipClass={`absolute md:scale-125`}
          />
          <ImageClipBox
            src="img/swordman.webp"
            clipClass={`sword-man-clip-path md:scale-125`}
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">به ما بپیوندید</p>
          <AnimatedTitle
            title="بیا اولین تجربه بازی <br/>رو با کمک هم بسازیم"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="ارتباط با ما" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
