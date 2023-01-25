import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
// import SimpleLayout from './layouts/simple';
//
// import BlogPage from './pages/BlogPage';
import Communication from './pages/Communication';
import LoginPage from './pages/LoginPage';
// import Page404 from './pages/Page404';
// import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Installation from './pages/Enquiry/Installation';
import Complaint from './pages/Enquiry/Complaint';
import Survey from './pages/Enquiry/Survey';
import Orders from './pages/Orders';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        // { path: 'user', element: <UserPage /> },
        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      
      path: 'factory-manager',
      element: <LoginPage />,
    },
    {
      path: 'enquiry',
      // element:<Installation />,
      children:[
        { element: <Navigate to="/enquiry/" />, index: true },
        { path:'installation', element: <Installation /> },
        { path:'complaint', element: <Complaint /> },
        { path:'survey', element: <Survey />}
      ]
    },
    {
      path: 'orders',
      element: <Orders />,
    },
    {
      path: 'communication',
      element: <Communication />,
    },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}
