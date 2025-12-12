import { Outlet } from "react-router-dom";

const About = () => {
  const menus = ['사업개요','컨슈머커머스','셀러커머스','크로스보더커머스'];
  return (
    <div id="about">
      <h2>사업영역</h2>
      <ul>
        {
          menus.map((item)=>{
            return (
              <li>{item}</li>
            )
          })
        }
      </ul>
      <Outlet />
    </div>
  )
}

export default About