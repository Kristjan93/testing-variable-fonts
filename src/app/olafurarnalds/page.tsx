'use client'

import { useRef } from "react";
import { ReactLenis, useLenis } from "../components/lenis";

export default function Page() {
const ref = useRef<HTMLDivElement>(null)
const menuref = useRef<HTMLDivElement>(null)

  useLenis((lenis) => {
    const width = lenis.dimensions.width
    const targetScroll = lenis.animatedScroll
    
    console.log('width', width)
    console.log('targetScroll', targetScroll)
    const scrollOffeset = Math.min(1- (targetScroll / width), 1)
    
      requestAnimationFrame(() => {
        if (ref.current && menuref.current) {
          ref.current.style.setProperty('--scroll-offset', scrollOffeset.toString())
          menuref.current.style.opacity = '1'
        }
      })
    
  })
  return (
      <div ref={ref}>
      <div className="fixed w-screen h-screen contain-strict -z-[1]"
      style={{
        transform: 'rotateY(180deg)'
      }}
      >
        <img
          src="/perfect-man.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div ref={menuref} className="text-white fixed top-16 w-full text-center font-open-sans text-[2em] opacity-0"
        style={{
          clipPath: 'polygon(calc(var(--scroll-offset, 0)*100%) 0,100% 0,100% 100%,calc(var(--scroll-offset, 0)*100%) 100%)'
        }}
      >
        Hvar er húfan mín ?
      </div>

      <main className="pl-[100vw] flex h-screen">
        <div className="h-screen flex bg-[#1A1A1A]">
          <div className="min-w-[490px] h-full flex flex-col">
            <div className="flex-1 text-center flex flex-col justify-end px-5 pb-3 text-white text-[44px]">
              <h3>Some kind of peas</h3>
            </div>
            <div className="flex-1 relative">
            <img
          src="/ok.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
            </div>
          </div>
          <div className="min-w-[490px] h-full flex flex-col">
            <div className="flex-1 text-center flex flex-col justify-end px-5 pb-3 text-white text-[44px]">
              <h3>for:get</h3>
            </div>
            <div className="flex-1 relative">
            <img
          src="/paint.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-left-top"
        />
            </div>
          </div>
          <div className="min-w-[490px] h-full flex flex-col">
            <div className="flex-1 text-center flex flex-col justify-end px-5 pb-3 text-white text-[44px]">
              <h3>This joke got old</h3>
            </div>
            <div className="flex-1 relative">
            <img
          src="/ok.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
            </div>
          </div>
          <div className="min-w-[490px] h-full flex flex-col">
            <div className="flex-1 text-center flex flex-col justify-end px-5 pb-3 text-white text-[44px]">
              <h3>i really like this website <a className="underline" href="https://olafurarnalds.com/works/">here</a></h3>
            </div>
            <div className="flex-1 relative">
            <img
          src="/ok.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
            </div>
          </div>
        </div>
      </main>

      </div>
  );
}
