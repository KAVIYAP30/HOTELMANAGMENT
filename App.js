import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Book from './components/Book';
import Room from './components/Room';
import Service from './components/Service';
import Contact from './components/Contact';



function App() {
  const appRouter=createBrowserRouter(
    [
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/Login',
        element:<Login/>,
      },
      {
        path:'/SignUp',
        element:<SignUp/>,
      },
      {
        path:'/Navbar',
        element:<Navbar/>,
      },
      {
        path:'/Book',
        element:<Book/>,
      },
      {
        path:'/Room',
        element:<Room/>,
      },
      {
        path:'/Service',
        element:<Service/>,
      },
      {
        path:'/Contact',
        element:<Contact/>,
      },
      
     
      

    ]
  )
  return (
    <div className="App">
     <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
