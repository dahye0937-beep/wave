import { useState } from "react";
import "../styles/Footer.css";
const Footer = () => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = ()=>{
    setIsShow(!isShow);
  }
  return (
    <footer>
      <div className="left">
        <h3>서울특별시 금천구 벚꽃로 298,17층(가산동, 대륭포스트타워6차)</h3>
        <p>Copyright ＠ CONNECTWAVE CO.LTD. All Rights Reserved.</p>
      </div>
      <div className="right">
        {
          isShow &&
        (<ul>
          <li>다나와</li>
          <li>에누리</li>
          <li>메이크샵</li>
          <li>플레이오토</li>
          <li>빌트온</li>
          <li>링크프라이스</li>
          <li>스윗트래커</li>
          <li>몰테일</li>
        </ul>)
        }
        <p onClick={handleClick}>관련사이트
          <span>{isShow ? "∧" : "∨" }</span>
          </p>
      </div>
    </footer>
  )
}

export default Footer