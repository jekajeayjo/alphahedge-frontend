import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'

import { HomePage } from './home/HomePage'
import { Dashboard } from './personal/dashboard/Dashboard'
import { Investments } from './personal/investments/Investments'

export const Router = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personal" element={<Dashboard />} />
      <Route path="/personal/investments" element={<Investments />} />
    </Routes>
  )
}
