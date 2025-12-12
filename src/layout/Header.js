import { Link } from "react-router-dom"
import NavContainer from "../pages/NavContainer"
import SelectLang from "../pages/SelectLang"
import "../styles/Header.css";
import { useState } from "react";
const Header = () => {
  const [active, setActive] = useState(false);
  const handleClick = ()=>{
    setActive(!active);
  }
  return (
    <header>
      <Link to="/" className="logo">ConnectWave</Link>
      {/* 햄버거 버튼 추가 */}
      <button 
      className={`hamburger ${active ? "active":""}`} 
      onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <NavContainer active={active}/>
      <SelectLang />
    </header>
  )
}

export default Header