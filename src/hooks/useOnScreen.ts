import { RefObject, useEffect, useState } from 'react'

const useOnScreen = (ref: RefObject<HTMLElement>, rootMargin: string) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        rootMargin,
      },
    )

    const currentElement = ref?.current

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [ref, rootMargin])

  return isVisible
}

export default useOnScreen
