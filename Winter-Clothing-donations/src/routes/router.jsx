import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategoryByDIvision from '../pages/CategoryByDIvision';
import AuthLayouts from '../layouts/AuthLayouts';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import AuthProvider from '../provider/AuthProvider';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import UpdateProfile from '../pages/UpdateProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/category/:division",
                element:

        
                <CategoryByDIvision />,
                loader: async ({ params }) => {
                    const response = await fetch('/Donation.json');
                    const data = await response.json();
                    return data.filter(campaign => campaign.division === params.division);
                }
            }
        ],
    },
    {
        path:"auth",
        element:<AuthLayouts></AuthLayouts>,
        children:[
           {
            path:"/auth/login",
            element:<Login></Login>,
           },
           {
            path:"/auth/register",
            element:<Register></Register>,
           },
           {
            path:'/auth/dashboard',
            element:
                <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            
           },
           {
            path:'/auth/forgot-password',
            element:<ForgotPassword></ForgotPassword>

           },
           {
            path:'/auth/update_profile',
            element:<UpdateProfile></UpdateProfile>

           },
        ]
    }
]);

export default router;