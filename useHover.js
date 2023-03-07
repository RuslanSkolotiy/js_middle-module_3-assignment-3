import { useEffect, useRef, useState } from "react";

export default function useHover() {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    useEffect(()=>{
        function mouseover() {
            setHovered(true);
        }
        function mouseout() {
            setHovered(false);
        }
        ref.current.addEventListener('mouseover', mouseover);
        ref.current.addEventListener('mouseout', mouseout);
        return () => {
            ref.current.removeEventListener('mouseover', mouseover);
            ref.current.removeEventListener('mouseout', mouseout);
        }
    }, []);
    return { hovered, ref };
}
