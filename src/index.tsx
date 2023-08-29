import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { appRouter } from 'pages'

import './styles/index.scss'

const container = document.getElementById('app') as HTMLElement

if (!container) {
  throw new Error(
    'Контейнер app не найден. Не удалось вмонтировать реакт приложение',
  )
}

const root = createRoot(container)

root.render(<RouterProvider router={appRouter} />)
