import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import useProfile from 'hooks/context/useProfile'

import { UserType } from 'models/UserType'

import { PersonalLayout } from 'components/layouts/PersonalLayout'
import { PageLoader } from 'components/shared/Loader'

type ProtectedRouteType = {
  roleRequired?: UserType
  adminEdit?: boolean
}

export const ProtectedRoutes = (props: ProtectedRouteType) => {
  const { roleRequired, adminEdit = false } = props

  const { payload } = useProfile()

  if (roleRequired) {
    if (payload.loading) {
      return <PageLoader />
    }

    if (roleRequired === payload?.profile?.role && !payload.loading) {
      return (
        <PersonalLayout adminEdit={adminEdit}>
          <Outlet />
        </PersonalLayout>
      )
    }

    if (roleRequired !== payload?.profile?.role && !payload.loading) {
      return <Navigate to="/login" />
    }

    if (!payload?.isAuth && !payload.loading) {
      return <Navigate to="/login" />
    }
  }

  return payload?.isAuth ? <Outlet /> : <Navigate to="/login" />
}
