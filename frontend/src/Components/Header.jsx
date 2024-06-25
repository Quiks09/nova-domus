import React from 'react'
import { IoMenu  } from "react-icons/io5";

const header = ({showMenu, setShowMenu}) => {
  return (
    <div id="header">
      {showMenu}
      <div className="btnMenu" onClick={() => setShowMenu(!showMenu)}><IoMenu/></div>
      <div className="headerT">TUDS Prueba D.A.</div>
    </div>
  )
}

export default header
