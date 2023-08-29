import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'

import { PersonalLayout } from 'components/layouts/PersonalLayout'

type ProtectedRouteType = {
  roleRequired?: 'ADMIN' | 'USER'
  adminEdit?: boolean
}

export const ProtectedRoutes = (props: ProtectedRouteType) => {
  const { roleRequired, adminEdit = false } = props

  const { auth, role } = useAuth()

  if (roleRequired) {
    if (roleRequired === role) {
      return (
        <PersonalLayout adminEdit={adminEdit}>
          <Outlet />
        </PersonalLayout>
      )
    }

    if (roleRequired !== role) {
      return <Navigate to="/denied" />
    }

    if (!auth) {
      return <Navigate to="/login" />
    }
  }

  return auth ? <Outlet /> : <Navigate to="/login" />
}
