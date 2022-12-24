import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Navbar from './components/Navbar';
import Topbar from './components/Topbar'; 
import Footer from './components/Footer'; 
import ('./style.css')
 
function App() {
  return (
    <Router>
    <div>
      <Topbar/>
      <Navbar/>
      <Main/>
      <Footer />
    </div>
    </Router>
  );
}
 
export default App;