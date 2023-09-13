import { RouterProvider } from 'react-router-dom'
import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import useAuth from 'hooks/useAuth'

import { appRouter } from 'pages/ui/appRouter'
import useGetMainInfo from 'hooks/useGetMainInfo'

export const App = () => {
  const getMainInfo = useGetMainInfo()

  const { setAuth } = useAuth()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getMainInfo()
    } else {
      setAuth({ loading: false, isAuth: false })
    }
  }, [])

  return (
    <>
      <ToastContainer position="top-right" />
      <RouterProvider router={appRouter} />
    </>
  )
}
