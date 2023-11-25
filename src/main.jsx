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
import AssetList from './Components/Admin/Asset List/AssetList.jsx';
import UpdateAsset from './Components/Admin/Admin Update Asset/UpdateAsset.jsx';
import AddEmployee from './Components/Admin/Add Employee/AddEmployee.jsx';
import UpgradePackage from './Components/Admin/Upgrade Package/UpgradePackage.jsx';
import EmployeeList from './Components/Admin/Employee List/EmployeeList.jsx';
import RequestAsset from './Components/Employee/Request Asset/RequestAsset.jsx';


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
      {
        path: "/assetList",
        element: <AssetList></AssetList>
      },
      {
        path: "/updateAsset/:id",
        element: <UpdateAsset></UpdateAsset>,
        loader: ({ params }) => fetch(`http://localhost:5000/updateAsset/${params.id}`)
      },
      {
        path: "/addEmployee",
        element: <AddEmployee></AddEmployee>
      },
      {
        path: "/employeeList",
        element: <EmployeeList></EmployeeList>
      },
      {
        path: "/requestAsset",
        element: <RequestAsset></RequestAsset>
      },
    ],
  },
  {
    path: "/payment",
    element: <AdminPayment></AdminPayment>,
  },
  {
    path: "/upgradePackage",
    element: <UpgradePackage></UpgradePackage>
  },


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
