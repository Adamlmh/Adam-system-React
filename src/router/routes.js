import LoginPage from '../pages/LoginPage/index'
import  UserPage  from '../pages/UserPage/index';
import AdminPage from '../pages/AdminPage/index';
const routes = [
    {
      path:'/',
      element:<LoginPage/>,
    },
    {
      path:'/user',
      element:<UserPage/>
    },
    {
      path:'/admin',
      element:<AdminPage/>
    }
]



export default routes;