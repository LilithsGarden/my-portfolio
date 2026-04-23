import React, { useState, useEffect } from 'react'
import './FramedPicture.css'

function FramedPicture({ imageSrc, altText, name }) {
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        // Gentle initial swing when the page loads
        const timer = setTimeout(() => {
            const frame = document.querySelector('.picture-frame')
            if (frame) {
                frame.classList.add('dangling')
                setTimeout(() => {
                    frame.classList.remove('dangling')
                }, 1000)
            }
        }, 500)

        return () => clearTimeout(timer)
    }, [])
    
    return (
        <div className="frame-container">
            {/* The string/chain at the top */}
            <div className="hanging-string"></div>

            {/* The picture frame */}
            <div
                className={`picture-frame ${isHovered ? 'dangling' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Decorative frame border */}
                <div className="frame-outer">
                    <div className="frame-inner">
                        <img
                            src={imageSrc}
                            alt={altText}
                            className="frame-image"
                            />
                    </div>
                </div>

                {/* Frame decorations */}
                <div className="frame-nail"></div>
                <div className="frame-corner corner-tl"></div>
                <div className="frame-corner corner-tr"></div>
                <div className="frame-corner corner-bl"></div>
                <div className="frame-corner corner-br"></div>
            </div>

            {/* Name label below the frame */}
            <div className="nameplate">
                {name}
            </div>
        </div> 
        
    )
}

export default FramedPicture