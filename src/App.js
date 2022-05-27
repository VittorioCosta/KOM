import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import ErrorScreen from "./screen/ErrorScreen";
import logo from './assets/image/logo.jpg' 

function App() {
  return (
    <Router className='App'>
      <img src={logo} alt='Keep On Movin Edinburgh' style={{display:'none'}} />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
