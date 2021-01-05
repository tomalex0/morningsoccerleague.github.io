import { Link } from "gatsby"
import React, { useState } from "react"

const MslThemeSwitch = props => {
  const [toggleActive, setToggleActive] = useState(false)
  const toggleState = () => setToggleActive(value => !value)

  return (
    <div
      className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
        toggleActive ? "bg-green-400" : ""
      }`}
      onClick={toggleState}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
          toggleActive ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  )
}

export default MslThemeSwitch
