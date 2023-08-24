import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'

import { HomePage } from './home/HomePage'
import { Dashboard } from './personal/dashboard/Dashboard'

export const Router = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personal" element={<Dashboard />} />
    </Routes>
  )
}
