import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// header
import Header from './header'


import Poster from './poster'
import ForUser from './foruser'



// login page
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import HomePage from './pages/HomePage';

// footer
import Footer from './components/foot/footer'


function App() {

  return (
    <>
      <Router>
        <div>
                <Routes>
                    <Route path="/" element={<LoginPage />} /> {/* Login page as the landing page */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forget-password" element={<ForgetPasswordPage />} />
                    <Route path="/home" element={<HomePage />} />
                  <Routes/>
          </div>
      
      <Footer/>
      <Router/>
    </>
  )
}

export default App
