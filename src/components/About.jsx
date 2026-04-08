import React, { useState } from 'react' //immports a useState for state management
import './About.css' 

function About() {
    // STATE is data that can change over time and affect how the component renders.
    //useState returns an array with two elements: the current state value and a function to update that state.
    const [showMore, setShowMore] = useState(false) // Initializes showMore state to false
    const [activeSkill, setActiveSkill] = useState(null) // Initializes activeSkill state to null

    const bio = {
        name: "Chimuanya Mirabel Obioma-Onyenma",
        title: "Software Engineer",
        location: "FCT, Abuja, Nigeria",
        email: "chummie2005@gmail.com",
        shortBio: "I'm a passionate software engineer with a love for creating beautiful and functional websites. I enjoy solving problems and learning new technologies.",
        longBio: "I graduated from Nile University of Nigeria and began my coding journey in 2025 and quickly fell in love with web development. Since then, I've been a smooth and steady curve to learn and grow as i build numerous projects, collaborate with other developers, and continuously expand my skills. When I'm not coding, you can find me reading tech blogs, video editing, or enjoying a good cup of coffee while planning my next project.",
        skills: [
            { name: "HTML/CSS", level: 90, color: "#E34F26" },
            { name: "JavaScript", level: 60, color: "#F0DB4F" },
            { name: "React", level: 70, color: "#68A063"},
            { name: "Git/GitHub", level: 80, color: "#F34F29" },
            { name: "Responsive Design", level: 85, color: "#3498DB" },
            { name: "Python", level: 75, color: "#306998" },
            { name: "SQL", level: 60, color: "#00758F" },
            { name: "TypeScript", level: 50, color: "#007ACC" },
            { name: "PHP", level: 70, color: "#8E44AD" },
            { name: "UI/UX Design", level: 80, color: "#E67E22" },
        ],
        interests: ["Web Development", "Tech Blogging", "UX/UI Design", "Video Editing", "Amigurumi", "Traveling"]
    }

    //Helper function to toggle bio visibility
    const toggleBio = () => {
        setShowMore(!showMore) // Toggles the showMore state between true and false
    }

    //Handle skill hover
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
                    {/*Left column:Bio information */}
                    <div className="about-bio">
                        <div className="bio-header">
                            <h3>{bio.name}</h3>
                            <p className="bio-title">{bio.title}</p>
                            <p className="bio-location">{bio.location}</p>
                        </div>

                        <div className="bio-text">
                            <p>{bio.shortBio}</p>

                            {/* Conditional rendering: Only show long bio if showMore is true */}
                            {showMore && (
                                <div className="long-bio">
                                    <p>{bio.longBio}</p>
                                </div>
                            )}

                            {/* Interactive button that chnanges based on state */}
                            <button 
                            className={`read-more-btn ${showMore ? 'active' : ''}`}
                            onClick={toggleBio}>
                                {showMore ? 'Show Less' : 'Read More'}
                            </button>
                        </div>

                        {/* Contact info with icons */}
                        <div className="contact-info">
                            <div className="contact-items">
                                <span className="contact-icon">📧</span>
                                <a href={`mailto:${bio.email}`}>{bio.email}</a>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Skills and Interests */}
                    <div className="about-details">
                        {/* Skills section with interactive progress bars */}
                        <div className="skills-section">
                            <h3>Technical Skills</h3>
                            <div className="skills-list">
                                {bio.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="skill-item"
                                        onMouseEnter={() => handleSkillHover(skill.name)}
                                        onMouseLeave={handleSkillLeave}
                                        >
                                            <div className="skill-header">
                                                <span className="skill-name">{skill.name}</span>
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
                                                    {/* Animatted tooltip that shows on hover */}
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

                        {/* Interests section with interactive chips */}
                        <div className="interest-section">
                            <h3>Interests & Hobbies</h3>
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