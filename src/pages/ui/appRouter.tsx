import { createBrowserRouter } from 'react-router-dom'
import { PageLayout } from 'components/layouts/PageLayout'

import { ProtectedRoutes } from './ProtectedRoutes'

import { IndividualsPage } from './admins/IndividualsPage/IndividualsPage'
import { UsersPage } from './admins/UsersPage/UsersPage'
import { TransactionPage } from './admins/TransactionPage/TransactionPage'
import { VerificationPage } from './admins/VerificationPage/VerificationPage'

import { HomePage } from './home/HomePage'

import { DashboardPage } from './personal/DashboardPage/DashboardPage'
import { InvestmentsPage } from './personal/InvestmentsPage/InvestmentsPage'
import { FinancePage } from './personal/FinancePage/FinancePage'
import { PersonalHome } from './personal/PersonalHome/PersonalHome'

export const appRouter = createBrowserRouter([
  {
    element: PageLayout(),
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    element: ProtectedRoutes({ roleRequired: 'USER' }),
    errorElement: <div>error</div>,
    children: [
      {
        path: '/personal',
        element: <PersonalHome />,
      },
      {
        path: '/personal/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/personal/investments',
        element: <InvestmentsPage />,
      },
      {
        path: '/personal/finance',
        element: <FinancePage />,
      },
      {
        path: '/personal',
        element: <PersonalHome />,
      },
    ],
  },
  {
    element: ProtectedRoutes({ roleRequired: 'ADMIN' }),
    errorElement: <div>error</div>,
    children: [
      {
        path: '/admin',
        element: <PersonalHome />,
      },
      {
        path: '/admin/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/admin/individuals',
        element: <IndividualsPage />,
      },
      {
        path: '/admin/users',
        element: <UsersPage />,
      },
      {
        path: '/admin/transaction',
        element: <TransactionPage />,
      },
      {
        path: '/admin/verification',
        element: <VerificationPage />,
      },
    ],
  },
  {
    element: ProtectedRoutes({ roleRequired: 'ADMIN', adminEdit: true }),
    errorElement: <div>error</div>,
    children: [
      {
        path: '/admin/user/:id/dashboard',
        element: <DashboardPage adminEdit />,
      },
      {
        path: '/admin/user/:id/investments',
        element: <InvestmentsPage adminEdit />,
      },
      {
        path: '/admin/user/:id/finance',
        element: <FinancePage adminEdit />,
      },
      {
        path: '/admin/user/:id',
        element: <PersonalHome adminEdit />,
      },
    ],
  },
])
