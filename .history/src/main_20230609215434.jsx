import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Layout/Route/router'
import AuthProvider from './Context/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNotifications } from 'react-notifications-component'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-notifications-component/dist/theme.css'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ReactNotifications />
      <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
