import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import useProfile from 'hooks/context/useProfile'

import { UserType } from 'models/UserType'

import { PersonalLayout } from 'components/layouts/PersonalLayout'
import { PageLoader } from 'components/shared/Loader'
import useGetMainInfo from 'hooks/useGetMainInfo'

type ProtectedRouteType = {
  roleRequired?: UserType
  adminEdit?: boolean
}

export const ProtectedRoutes = (props: ProtectedRouteType) => {
  const { roleRequired, adminEdit = false } = props

  const { payload } = useProfile()

  const getUser = useGetMainInfo()

  if (roleRequired) {
    if (payload.loading) {
      return <PageLoader />
    }

    if (adminEdit && payload && roleRequired === payload?.profile?.role) {
      console.log('to-do')
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
