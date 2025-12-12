import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videoData from "../assets/vido/main_video.mp4";
import "../styles/MainVideo.css";
import { useRef } from "react";
import Marquee from "./Marquee"
//플러그인 등록
gsap.registerPlugin(useGSAP,ScrollTrigger);
const MainVideo = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    //scrollTrigger
    useGSAP(()=>{
        gsap.to(videoRef.current,{
            width: "100%", //너비가 꽉 차게
            borderRadius: "0px",
            ease: "none", //linear
            scrollTrigger: {
                trigger: containerRef.current,
                start: "center 60%",
                end: "+=3000",
                scrub: 1,
                pin: true,
                markers: false
            }
        });
    },{scope:containerRef});

  return (
    <section id="main-video" ref={containerRef}>
        <div className="text-content">
            <h2>이커머스를 넘어, 가능성을 찾아 나서는 일</h2>
            <h1>커넥트 웨이브가<br/>그려가고 있습니다.</h1>
        </div>
        <div className="video-wrap" ref={videoRef}>
            <video autoPlay loop muted>
                <source src={videoData} type="video/mp4"/>
            </video>
        </div>
        <Marquee />
    </section>
  )
}

export default MainVideo