import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const Info = () => {
  //경로 : 
  const {hash} = useLocation();
  useEffect(()=>{
    if( hash ){
      const elem = document.querySelector(hash);
      if( elem ){
        elem.scrollIntoView({behavior:"smooth"});
      }
    }
  },[hash]);
  return (
    <div id="info">
      <div id="page-1">
        page-1
      </div>
      <div id="page-2">
        page-2
      </div>
      <div id="page-3">
        page-3
      </div>
    </div>
  )
}

export default Info