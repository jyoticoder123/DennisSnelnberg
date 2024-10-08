import React, { useRef } from 'react'

const TextDiv = () => {

    const hoverRef = useRef(null)
    const parentRef = useRef(null)

    const mouseEntering = ()=>{
        hoverRef.current.style.transform = "translate(-50%, -50%) scale(1)"

    }

    const mouseLeaveing = ()=>{
        hoverRef.current.style.transform = "translate(-50%, -50%) scale(0)"

    }

    const mouseMoveing = (e)=>{
        const xPosition = e.clientX -parentRef.current.getBoundingClientRect().x
        const yPosition = e.clientY -parentRef.current.getBoundingClientRect().y

        hoverRef.current.style.left = xPosition+"px"
        hoverRef.current.style.top = yPosition+"px"


    }



  return (
    <div className="relative mb-16"
    ref={parentRef}
    onMouseEnter={mouseEntering}
    onMouseLeave={mouseLeaveing}
    onMouseMove={(e) =>{
        mouseMoveing(e)
    }}
    
    >
        <div ref={hoverRef} id="imageDiv" className=" overflow-hidden z-10 scale-0 h-[20vw] w-[21vw] -translate-x-1/2 -translate-y-1/2 absolute bg-red-500">
        <div className="h-full w-full">
            <img className="h-full w-full object-cover" src="https://dennissnellenberg.com/media/pages/work/aanstekelijk/441187fb44-1687423090/thumbnail-aanstekelijk-810x810-crop-q72.jpg" alt="" />
            <img className="h-full w-full object-cover" src="https://dennissnellenberg.com/media/pages/work/fabric/ac07564a5f-1688453092/thumbnail-fabric-darkgray-810x810-crop-q72.jpg" alt="" />
            <img className="h-full w-full object-cover" src="https://dennissnellenberg.com/media/pages/work/the-damai/b511d32d21-1710452224/thumbnail-thedamai-v2-810x810-crop-q72.jpg" alt="" />
            <img className="h-full w-full object-cover" src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice-810x810-crop-q72.jpg" alt="" />

        </div>

        </div>
        <div>
        <div className=" relative border-t-2 py-12 px-[7vw] flex items-center justify-between">
            <div className="absolute h-full z-20 w-full left-0 top-0"></div>
            <h1 className="text-[4.5vw]">TWICE</h1>
            <h5 className="text-xl ">Interaction & Development</h5>
        </div>
        <div className="border-t-2 py-12 px-[7vw] flex items-center justify-between">
            <div className="absolute h-full z-20 w-full left-0 top-0"></div>
            <h1 className="text-[4.5vw]">The Damai</h1>
            <h5 className="text-xl ">Design & Development</h5>
        </div>
        <div className="border-t-2 py-12 px-[7vw] flex items-center justify-between">
            <div className="absolute h-full z-20 w-full left-0 top-0"></div>
            <h1 className="text-[4.5vw]">FABRIC</h1>
            <h5 className="text-xl ">Design & Development</h5>
        </div>
        <div className="border-t-2 border-b-2 py-12 px-[7vw] flex items-center justify-between">
            <div className="absolute h-full z-20 w-full left-0 top-0"></div>
            <h1 className="text-[4.5vw]">Aanstekelijk</h1>
            <h5 className="text-xl ">Design & Development</h5>
        </div>
        </div>
    </div>
  )
}

export default TextDiv