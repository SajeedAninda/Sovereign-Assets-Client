import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GuestHomepage from './Components/Homepage/Guest/Guest Homepage/Homepage.jsx';
import JoinAsEmployee from './Components/Pages/Join As Employee Page/JoinAsEmployee.jsx';
import JoinAsAdmin from './Components/Pages/Join As Admin/JoinAsAdmin.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import AuthenticationProvider from './Components/Authentication/AuthenticationProvider.jsx';
import { Toaster } from 'react-hot-toast';
import AdminPayment from './Components/Admin Payment/AdminPayment.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AddAsset from './Components/Admin/Admin Add Asset/AddAsset.jsx';


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <GuestHomepage />,
      },
      {
        path: "/joinAsEmployee",
        element: <JoinAsEmployee></JoinAsEmployee>,
      },
      {
        path: "/joinAsAdmin",
        element: <JoinAsAdmin></JoinAsAdmin>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addAsset",
        element: <AddAsset></AddAsset>
      },
    ],
  },
  {
    path: "/payment",
    element: <AdminPayment></AdminPayment>,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
        <RouterProvider router={router} />
      </AuthenticationProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
