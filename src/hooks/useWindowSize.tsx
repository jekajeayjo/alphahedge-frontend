import { useEffect, useState } from 'react'

type sizeType = {
  width: number
  height: number
}

export const useWindowSize = (): sizeType => {
  const [windowSize, setWindowSize] = useState<sizeType>({
    width: 0,
    height: 0,
  })
  useEffect(() => {
    function handleResize(): void {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
