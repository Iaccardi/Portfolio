import React from 'react';
import { CustomNavbar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AnimatedRoutes from './components/AnimatedRoutes';



function App() {

  return (
      <>
      <CustomNavbar />

      <div className='main-container' style={{ minHeight: '100vh' }}>
        <AnimatedRoutes />
      </div>
      

       
      
    </>
  );
}

export default App;
