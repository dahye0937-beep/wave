import { useGSAP } from "@gsap/react";
import "../styles/ClipText.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import img01 from "../assets/images/img01.png"
import img02 from "../assets/images/img02.png"
gsap.registerPlugin(useGSAP, ScrollTrigger);
const ClipText = () => {
    const containerRef = useRef(null);
    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.fromTo('.mask-layer',{
            "clip-path" : 'inset(100% 100% 100% 100%)',
            ease : 'power2.inOut' 
        },{
            "clip-path" : 'inset(0% 0% 0% 0%)'
        });
        tl.fromTo("img",{
        width: '0',
        scale: '0'  
        },{
            width: 'auto',
            scale: '1'
        });
        tl.to(".color-text",{
            color: '#2d3ebd'
        },"<");
        ScrollTrigger.create({
            animation: tl,
            trigger: containerRef.current,
            start: "center center",
            end: "+=3000",
            pin: true,
            scrub : 1,
            markers: false
        });
    },{scope:containerRef});
  return (
    <section id="clip-text" ref={containerRef}>
        <div className="mask-layer">
            <div className="text-content">
            <p>그 동안 고객과 셀러의  연결성을 강화하기 위해</p>
            <p>독립적이고 자율적인 연합군처럼 움직여 왔지만,</p>
            <div className="text-wrap">
                <div>
                    <span className="color-text">생성형 Ai 플레이</span>
                    <img src={img01} alt="생성형AI플레이" />
                    를
                </div>
                <div>
                    기반으로 한 <br className="mobile-br"/> 
                    <span className="color-text">One Team</span>
                    <img src={img02} alt="One Team" />
                    으로서
                </div>
            </div>
            <p>시너지 극대화에 <br className="mobile-br"/> 최선을 다하고 있습니다.</p>
            </div>
        </div>
    </section>
  )
}

export default ClipText