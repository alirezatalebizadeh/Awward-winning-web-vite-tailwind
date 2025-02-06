import React, { useRef, useState } from 'react'

export default function BentoTilt({ children, className = "" }) {

    const [transformStyle, setTransformStyle] = useState("")
    const itemRef = useRef(null)


    //!ser mousemove event to container
    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    }

    const handleMouseLeave = () => {
        setTransformStyle("")
    }


    return (
        <div
            className={className}
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    )
}
