import React, { useState, useEffect } from "react"
export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {},
})
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark")
  useEffect(() => {
    function loadTheme() {
      let theme = localStorage.theme
      if (
        localStorage.theme === "dark" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        theme = "dark"
      }
      return theme
    }
    setTheme(loadTheme())
  }, [])
  useEffect(() => {
    localStorage.setItem("theme", theme)
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
    }
  }, [theme])
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", event => {
        if (event.matches) {
          setTheme("dark")
        } else {
          setTheme("light")
        }
      })
  }, [])
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContextProvider
