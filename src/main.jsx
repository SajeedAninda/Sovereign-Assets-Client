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
import AllRequests from './Components/Admin/All Requests/AllRequests.jsx';
import MyAsset from './Components/Employee/My Asset/MyAsset.jsx';
import MyTeam from './Components/Employee/My Team/MyTeam.jsx';
import CustomAsset from './Components/Employee/Custom Asset Request/CustomAsset.jsx';
import CustomRequestsAdmin from './Components/Admin/Custom Requests Admin/CustomRequestsAdmin.jsx';
import Profile from './Components/Pages/Profile/Profile.jsx';
import EmployeeRoute from './Components/Pages/EmployeeRoute/EmployeeRoute.jsx';
import AdminRoute from './Components/Pages/Admin Route/AdminRoute.jsx';
import PrivateRoute from './Components/Pages/Private Route/PrivateRoute.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Contact from './Components/Pages/Contact/Contact.jsx';
import Team from './Components/Pages/Team/Team.jsx';


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
        element: <AdminRoute><AddAsset></AddAsset></AdminRoute>
      },
      {
        path: "/assetList",
        element: <AdminRoute><AssetList></AssetList></AdminRoute>
      },
      {
        path: "/updateAsset/:id",
        element: <UpdateAsset></UpdateAsset>,
        loader: ({ params }) => fetch(`https://sovereign-asset-solutions-server.vercel.app/updateAsset/${params.id}`, {
          credentials: 'include'
        })
      }
      ,
      {
        path: "/addEmployee",
        element: <AdminRoute><AddEmployee></AddEmployee></AdminRoute>
      },
      {
        path: "/employeeList",
        element: <AdminRoute><EmployeeList></EmployeeList></AdminRoute>
      },
      {
        path: "/requestAsset",
        element: <EmployeeRoute><RequestAsset></RequestAsset></EmployeeRoute>
      },
      {
        path: "/allRequests",
        element: <AdminRoute><AllRequests></AllRequests></AdminRoute>
      },
      {
        path: "/myAssets",
        element: <EmployeeRoute><MyAsset></MyAsset></EmployeeRoute>
      },
      {
        path: "/myTeam",
        element: <EmployeeRoute><MyTeam></MyTeam></EmployeeRoute>
      },
      {
        path: "/requestCustomAsset",
        element: <EmployeeRoute><CustomAsset></CustomAsset></EmployeeRoute>
      },
      {
        path: "/customRequests",
        element: <AdminRoute><CustomRequestsAdmin></CustomRequestsAdmin></AdminRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/team",
        element: <Team></Team>
      }
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
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthenticationProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
