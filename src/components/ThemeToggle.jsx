import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import './ThemeToggle.css'

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const [isAnimating, setIsAnimating] = useState(false)

    // Handle toggle with animation
    const handleToggle = () => {
        setIsAnimating(true)
        toggleTheme()

        //Remove animation class after animation completes
        setTimeout(() => {
            setIsAnimating(false)
        }, 500)
    }

    //Get appropriate icon based on theme
    const getIcon = () => {
        if (theme === 'light') {
            return '🌙'
        }else {
            return '☀️'
        }
    }

    const getText = () => {
        return theme === 'light' ? 'Dark Mode' : 'Light Mode'
    }

    return (
        <button
        className={`theme-toggle ${isAnimating ? 'animate' : ''}`}
        onClick={handleToggle}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'}mode`}
        >
            <span className="theme-toggle-icon">{getIcon()}</span>
            <span className="theme-toggle-text">{getText()}</span>
        </button>
    )
}

export default ThemeToggle