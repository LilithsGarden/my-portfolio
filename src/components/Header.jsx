import React from 'react'
import './Header.css'
import FramedPicture from './FramedPicture'

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                {/* Replace Regular image with FramedPicture */}
                <FramedPicture
                    imageSrc="/profile.jpg"
                    altText="This should be my profile picture"
                    name="Chimuanya Mirabel"
                />
                
                <h1 className="header-title">Chimuanya Mirabel Obioma-Onyenma</h1>
                <p className="header-subtitle">Software Engineer</p>
                <p className="header-tagline">I build scalable web applications</p>
            </div>
        </header>
    )   
}

export default Header