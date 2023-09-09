import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import useAuth from 'hooks/useAuth'

import { UserType } from 'models/UserType'

import { PersonalLayout } from 'components/layouts/PersonalLayout'

type ProtectedRouteType = {
  roleRequired?: UserType
  adminEdit?: boolean
}

export const ProtectedRoutes = (props: ProtectedRouteType) => {
  const { roleRequired, adminEdit = false } = props

  const { auth } = useAuth()

  if (roleRequired) {
    if (auth.loading) {
      return <div>load</div>
    }

    if (roleRequired === auth?.profile?.role && !auth.loading) {
      return (
        <PersonalLayout adminEdit={adminEdit}>
          <Outlet />
        </PersonalLayout>
      )
    }

    if (roleRequired !== auth?.profile?.role && !auth.loading) {
      return <Navigate to="/login" />
    }

    if (!auth?.isAuth && !auth.loading) {
      return <Navigate to="/login" />
    }
  }

  return auth?.isAuth ? <Outlet /> : <Navigate to="/login" />
}
