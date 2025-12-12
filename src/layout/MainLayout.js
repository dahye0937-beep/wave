import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import "../styles/MainLayout.css";

const MainLayou = () => {
  return (
    <div id="main-layout">
      {/* 강제 고정 */}
      <Header />
      <Main>
        {/* main, about */}
        <Outlet />
      </Main>
      <Footer />
    </div>
  )
}

export default MainLayou