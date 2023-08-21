import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'

import { HomePage } from './home/HomePage'

export const Router = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
