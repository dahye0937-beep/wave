import { Link } from "react-router-dom"
import navData from "../data/navData"
import { useState } from "react";
const NavContainer = ({active}) => {
    //활성화 된 서브메뉴
    const [activeMenu,setActiveMenu] = useState(null);
    
    //모바일 상태, PC 상태 인지 확인
    const handleMenuClick = (e,id,hasMenu)=>{
        e.preventDefault();
        const isMobile = window.innerWidth <= 768;
        if( isMobile && hasMenu ){
            //모바일 화면에서만 처리 
            setActiveMenu(id);
        }
    }
  return (
    <nav className={active ? `active`:''}>
        <ul>
            {
                navData.map((item)=>{
                //현재 아이템 활성화 상태인지 확인
                    const isActive = activeMenu === item.id;
                    return(
                    <li
                    key={item.id}
                    className={`main-menu ${isActive ? "active":""}`}
                    >
                        <Link 
                        to={item.link}
                        onClick={(e)=>{handleMenuClick(e,item.id,item.subMenu.length>0)}}
                        >{item.title}</Link>
                        {
                            (item.subMenu.length > 0) && (
                                <ul className="sub-menu">
                                    {
                                        item.subMenu.map((sub,idx)=>{
                                            return <li key={idx}><Link to={sub.link}>{sub.title}</Link></li>
                                        })
                                    }
                                </ul>
                            )
                        }
                    </li>
                )})
            }
        </ul>
    </nav>
  )
}

export default NavContainer