import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Topbar from './components/Topbar'; 
import Navbar from './components/Navbar';
import Home from "./Pages/Home";
import Main from "./components/Main";
import Berita from "./Pages/Berita";
import Login from './components/Login'; 
import LoginPage from "./Pages/Login";
import Footer from './components/Footer'; 
// import ('./style.css')


// import ('./style_login.css')
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/berita",
    element: <Berita/>
  },
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
      <RouterProvider router={router}/>  
  );
}
 
export default App;