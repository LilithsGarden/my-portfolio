import React, { createContext, useState, useEffect, } from 'react'

// Creates the Context
// Context is like a global state that any component can access
export const ThemeContext = createContext()

// Creates a Provider component
// This component will wrap our entire app and provide the theme to everyone
export function ThemeProvider({ children}) {
    // State to hold the current theme, default is 'light'
    // We will check localStorage to see if the user has a saved theme preference
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme || 'light'
    })

    // useEffect runs when theme changes
    useEffect(() => {
        // Apply the theme to the HTML element (document.documentElement is the <html> tag)
        if(theme === 'dark') {
            document.documentElement.classList.add('dark-mode')
            document.documentElement.classList.remove('light-mode')
        } else {
            document.documentElement.classList.add('light-mode')
            document.documentElement.classList.remove('dark-mode')
        }

        // Save the user's theme preference in localStorage
        localStorage.setItem('theme', theme)
    }, [theme]) // This effect runs whenever 'theme' changes

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    // Function to set a specific theme (light or dark)
    const setThemeMode = (mode) => {
        if (mode === 'light' || mode === 'dark') {
            setTheme(mode)
        }
    }

    // The provider makes the theme and toggle function available to any child component that consumes this context
    // Any component can now access the current theme and the toggle function
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

