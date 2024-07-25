'use client'

import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { useLenis } from "./components/lenis"
import { CSSProperties, useEffect, useRef, useState } from "react"

export default function Page () {
  const { scrollY } = useScroll()
  const [isGoingDown, setIsGoingDown] = useState(true)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (!previous) {
      return
    }
    if (latest > previous && latest > 90) {
      setIsGoingDown(true)
    } else if (latest < previous) {
      setIsGoingDown(false)
    }
  })


  const [color, setColor] = useState('#000')
  const x = useMotionValue(0)
  const lenisRef = useLenis(lenis => {
    x.set(lenis.progress)

    if(lenis.progress > 0.45) {
      setColor('#fff')
    }
    else {
      setColor('#000')
    }
  })

  // Uppercase Height
  const YTFI = useTransform(x, [0, 1], [760, 528])
  // Ascender Height
  const YTAS = useTransform(x, [0, 1], [854, 649])

  // Lowercase Height
  const YTLC = useTransform(x, [0, 1], [570, 416])
  // Descender Depth
  const YTDE = useTransform(x, [0, 1], [-98, -305])

  const YTUC = useTransform(x, [0, 1], [760, 538])

  const fontVariationSettings = useMotionTemplate`"YTLC" ${YTLC}, "YTDE" ${YTDE}, "YTFI" ${YTFI}, "YTAS" ${YTAS}, "YTUC" ${YTUC}`

  return (
    <motion.div className="flex text-black h-[400vw] relative bg-gradient-to-b from-white via-black/75 to-black"
      animate={{ color }}
    >
      <div className="flex w-full flex-1 items-center justify-center sticky top-0 h-screen">
        <div className="font-roboto-flex text-center">
          <div className="text-[10vw]">
            Gummi
            <motion.span
            style={{fontVariationSettings}}>
            {isGoingDown ? 'sig' : 'rís'}
            </motion.span>
          </div>
          <div className="text-[3vw]">
            Scroll to the bottom and up
          </div>
          
        </div>
      </div>
    </motion.div>
  )
}