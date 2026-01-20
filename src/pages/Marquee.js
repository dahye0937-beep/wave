import "../styles/Marquee.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const Marquee = () => {
    //기본아이템 8개의 이름을 배열로 만들어서 처리
    const baseItems = Array.from({length:8},(_,idx)=>{
        return `item-${String(idx+1).padStart(2,'0')}`;
    });
    //무한 롤링을 위해서 3배 복제 : baseItems : ...
    const extendedItems = [...baseItems,...baseItems];
    const containerRef = useRef(null);
    useGSAP(()=>{
        //가로 무한 스크롤링
        gsap.to("ul",{
            xPercent: -50,
            duration: 20,
            ease: 'nene',
            repeat: -1
        });
        gsap.to(containerRef.current,{
            y:'50vh',
            ease: 'none',
            scrollTrigger:{
                trigger:containerRef.current,
                start:'top 50%',
                end: '+=200',
                scrub: 1,
                markers: false
            }
        })
    },{scope:containerRef});
    return (
        <aside id="marquee" ref={containerRef}>
            <ul>
                {
                    extendedItems.map((item,idx)=>{
                        return(
                            <li key={idx}>
                                <img 
                                src={require(`../assets/images/${item}.svg`)} 
                                alt={item}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default Marquee