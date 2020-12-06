import React, { useLayoutEffect, useState } from "react"

const useViewport = () => {
  const [size, setSize] = useState<number[]>([0, 0])

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener("resize", updateSize)
    updateSize()

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return size
}

export default useViewport
