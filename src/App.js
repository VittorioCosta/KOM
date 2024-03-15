import React from "react";
import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import ErrorScreen from "./screen/ErrorScreen";
import FormSuccess from "./screen/FormSuccess";
import ReactGA from 'react-ga';


  const TRACKING_ID = "G-MM47NN7EQV"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  

  
  

function App() {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  

  return (
    <Router className='App'>
      
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/contact/form-success' element={<FormSuccess />} />
        <Route path='/form-success' element={<FormSuccess />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
