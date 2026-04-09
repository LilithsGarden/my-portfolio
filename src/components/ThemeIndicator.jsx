import React from 'react'
import { useTheme } from '../hooks/useTheme'
import './ThemeIndicator.css'

function ThemeIndicator() {
    const { theme } = useTheme()

    return (
        <div className={`theme-indicator theme-indicator-${theme}`}>
            {theme === 'light' ? '☀️ Light Mode Active' : '🌙 Dark Mode Active'}
        </div>
    )
}

export default ThemeIndicator