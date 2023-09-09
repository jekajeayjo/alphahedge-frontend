import { RouterProvider } from 'react-router-dom'
import React, { useEffect } from 'react'

import useAuth from 'hooks/useAuth'

import { appRouter } from 'pages/ui/appRouter'
import useGetMainInfo from 'hooks/useGetMainInfo'

export const App = () => {
  const getMainInfo = useGetMainInfo()

  const { setAuth, auth } = useAuth()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getMainInfo()
    } else {
      setAuth({ loading: false, isAuth: false })
    }
  }, [])

  return <RouterProvider router={appRouter} />
}
