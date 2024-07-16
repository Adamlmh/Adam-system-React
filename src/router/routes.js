import LoginPage from '../pages/LoginPage/index'
import  UserPage  from '../pages/UserPage/index';
import AdminPage from '../pages/AdminPage/index';
import {ControlCenter,Reviewmeeting,Modifyinformation,Handlingopinions} from '../components/admin/index';
import {Submitcontent,Recentmeetings,Personalcenter,Mystart,UserModifyinformation,Expressviews,Draftbox,Allmeetings}from '../components/user/index'
import { Navigate } from 'react-router-dom';
const routes = [
    {
      path:'/',
      element:<LoginPage/>,
    },
    {
      path:'/user',
      element:<UserPage/>,
      children:[
        { path: 'Submitcontent', element: <Submitcontent /> }, 
        { path: 'Recentmeetings', element: <Recentmeetings /> }, 
        { path: 'Personalcenter', element: <Personalcenter /> }, 
        { path: 'Mystart', element: <Mystart /> }, 
        { path: 'UserModifyinformation', element: <UserModifyinformation /> }, 
        { path: 'Expressviews', element: <Expressviews /> }, 
        { path: 'Draftbox', element: <Draftbox /> }, 
        { path: 'Allmeetings', element: <Allmeetings /> }, 
        { path: '', element: <Navigate to="Personalcenter" /> }, // 默认重定向到 Personalcenter
      ]
    },
    {
      path:'/admin',
      element:<AdminPage/>,
      children:[
        { path: 'ControlCenter', element: <ControlCenter /> }, 
        { path: 'Reviewmeeting', element: <Reviewmeeting /> }, 
        { path: 'Modifyinformation', element: <Modifyinformation /> }, 
        { path: 'Handlingopinions', element: <Handlingopinions /> }, 
        { path: '', element: <Navigate to="ControlCenter" /> }, // 默认重定向到 ControlCenter
      ]
    }
]
export default routes;