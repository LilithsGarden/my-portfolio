import React, { useState } from 'react'
import './About.css'
import { SiHtml5 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { SiFigma } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'


function About() {
    const [showMore, setShowMore] = useState(false)
    const [activeSkill, setActiveSkill] = useState(null)

    // Create a mapping of skill names to their corresponding icons
    const getSkillIcon = (skillName) => {
        const iconMap = {
            "HTML/CSS": <SiHtml5 />,
            "JavaScript": <SiJavascript />,
            "React": <SiReact />,
            "Git/GitHub": <SiGit />,
            "Python": <SiPython />,
            "SQL": <FaDatabase />,
            "TypeScript": <SiTypescript />,
            "PHP": <SiPhp />,
            "UI/UX Design": <SiFigma />
        }
        return iconMap[skillName] || <SiReact /> // Default icon if no match
    }

    const bio = {
        name: "Chimuanya Mirabel Obioma-Onyenma",
        title: "Software Engineer",
        location: "FCT, Abuja, Nigeria",
        email: "chummie2005@gmail.com",
        shortBio: "I'm a passionate software engineer with a love for creating beautiful and functional websites. I enjoy solving problems and learning new technologies.",
        longBio: "I graduated from Nile University of Nigeria and began my coding journey in 2025 and quickly fell in love with web development. Since then, I've been a smooth and steady curve to learn and grow as i build numerous projects, collaborate with other developers, and continuously expand my skills. When I'm not coding, you can find me reading tech blogs, video editing, or enjoying a good cup of coffee while planning my next project.",
        skills: [
            { name: "HTML/CSS", level: 90, color: "#E34F26" },
            { name: "JavaScript", level: 81, color: "#F0DB4F" },
            { name: "React", level: 70, color: "#61DAFB" }, // Changed to React blue
            { name: "Git/GitHub", level: 80, color: "#F34F29" },
            { name: "Responsive Design", level: 85, color: "#3498DB" },
            { name: "Python", level: 79, color: "#306998" },
            { name: "SQL", level: 73, color: "#00758F" },
            { name: "TypeScript", level: 78, color: "#007ACC" },
            { name: "PHP", level: 70, color: "#8E44AD" },
            { name: "UI/UX Design", level: 80, color: "#E67E22" },
        ],
        interests: ["Web Development", "Tech Blogging", "UX/UI Design", "Video Editing", "Amigurumi", "Traveling"]
    }

    const toggleBio = () => {
        setShowMore(!showMore)
    }

    const handleSkillHover = (skillName) => {
        setActiveSkill(skillName)
    }

    const handleSkillLeave = () => {
        setActiveSkill(null)
    }

    return (
        <section className="about" id="about">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    {/* Left column: Bio information */}
                    <div className="about-bio">
                        <div className="bio-header">
                            <h3>{bio.name}</h3>
                            <p className="bio-title">{bio.title}</p>
                            <p className="bio-location">📍 {bio.location}</p>
                        </div>

                        <div className="bio-text">
                            <p>{bio.shortBio}</p>

                            {showMore && (
                                <div className="long-bio">
                                    <p>{bio.longBio}</p>
                                </div>
                            )}

                            <button 
                                className={`read-more-btn ${showMore ? 'active' : ''}`}
                                onClick={toggleBio}>
                                {showMore ? 'Show Less ↑' : 'Read More ↓'}
                            </button>
                        </div>

                        <div className="contact-info">
                            <div className="contact-item">  
                                <span className="contact-icon">📧</span>
                                <a href={`mailto:${bio.email}`}>{bio.email}</a>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Skills and Interests */}
                    <div className="about-details">
                        {/* Skills section with icons and progress bars */}
                        <div className="skills-section">
                            <h3>💻 Technical Skills</h3>
                            <div className="skills-list">
                                {bio.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="skill-item"
                                        onMouseEnter={() => handleSkillHover(skill.name)}
                                        onMouseLeave={handleSkillLeave}
                                    >
                                        <div className="skill-header">
                                            <div className="skill-name-with-icon">
                                                <span className="skill-icon" style={{ color: skill.color }}>
                                                    {getSkillIcon(skill.name)}
                                                </span>
                                                <span className="skill-name">{skill.name}</span>
                                            </div>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div 
                                                className="progress-fill"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    backgroundColor: skill.color,
                                                    transition: 'width 1s ease-in-out'
                                                }}
                                            >
                                                {activeSkill === skill.name && (
                                                    <div className="skill-tooltip">
                                                        Proficiency: {skill.level}%
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interests section */}
                        <div className="interests-section">  
                            <h3>🎯 Interests & Hobbies</h3>
                            <div className="interests-list">
                                {bio.interests.map((interest, index) => (
                                    <span key={index} className="interest-chip">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
