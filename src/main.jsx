import { StrictMode, Suspense } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, BrowserRouter, useRouteError } from 'react-router-dom'
import Home from './components/Home.jsx';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Work from './components/Work.jsx'
import User from './components/User.jsx'
import UsernameForm from './components/UsernameForm.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import UsersList from './components/UsersList.jsx'
import AdminEntryForm from './components/AdminEntryForm.jsx'
import AdminSingle from './components/AdminSingle.jsx'
// import users
// import Career from './components/Career.jsx'
const IndexPageElements = () => {
  return(
    <div>
      <UsernameForm/>
      <AdminEntryForm/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorBoundary/>,
    children: [
      
      {
        path: 'home',
        element: <Home/>,
      },
      {
        path: 'about',
        element: <About/>,
      } ,
      {
        path: 'work',
        element: <Work/>,
        errorElement: <ErrorBoundary/>,
      } ,
      
      
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        index: true,
        element: <IndexPageElements/>
      },
      
      {
        path: 'user/:username',
        element: <User/>
      },
      {
        path: 'UsersList',
        element: <UsersList/>
      },
      {
        path: 'admin/:adminName',
        element: <AdminSingle/>,
        
      },
      
    ]
  },

  // function ErrorBoundary() {
  //   let error = useRouteError();
  //   console.log(error);
  //   return <div>404</div>
  // }

]);



const root = createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
)
