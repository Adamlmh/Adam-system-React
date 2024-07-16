import LoginPage from '../pages/LoginPage/index'
import  UserPage  from '../pages/UserPage/index';
const routes = [
    {
      path:'/',
      element:<LoginPage/>,
    },
    {
      path:'/user',
      element:<UserPage/>
    }
]



export default routes;