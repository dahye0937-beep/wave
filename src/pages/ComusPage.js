import Scrollpage from "../components/Scrollpage"
import page from "../data/scrollPage.js";
import "../styles/comusPage.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const ComusPage = () => {
  const containerRef = useRef();
  const listRef = useRef();
  //gsap을 이용했을 때 데스크탑에서만 처리, 모바일은 처리가 안되게
  useGSAP(()=>{
    const mm = gsap.matchMedia();
    mm.add("(min-width:769px)",()=>{
        //전체이동 사이즈
    const scrollW = listRef.current.scrollWidth;
    //현재 View 위드
    const clientW = window.innerWidth;
    const move = -(scrollW-clientW);
    gsap.to(listRef.current,{
      x: move,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: `+=${move*(-1)}`,
        scrub: 1,
        pin: true,
        //다음 컨텐츠가 pin이 끝날때까지 아래에 있도록 : 공간 확보
        pinSpacing: true,
        markers: false
      }
    });
    });
  },{scope:containerRef});

  // useGSAP(()=>{
  //   //전체이동 사이즈
  //   const scrollW = listRef.current.scrollWidth;
  //   //현재 View 위드
  //   const clientW = window.innerWidth;
  //   const move = -(scrollW-clientW);
  //   gsap.to('.page-list',{
  //     x: move,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "center center",
  //       end: `+=${move*(-1)}`,
  //       scrub: 1,
  //       pin: true,
  //       //다음 컨텐츠가 pin이 끝날때까지 아래에 있도록 : 공간 확보
  //       pinSpacing: true,
  //       markers: false
  //     }
  //   });
  // },{scope:containerRef});
  return (
    <section id="comus-page">
      <div className="page-view" ref={containerRef}>
        <div className="page-list" ref={listRef}>
          {
            page.map((item)=>{
              return (
              <Scrollpage 
                key={item.id}
                id = {item.id}
                title={item.title} 
                desc={item.desc}
                imgName={item.imgName}
              />
              )
            })
          }
        </div>
      </div>
    </section>
  )
};
export default ComusPage