import React from 'react';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import App from './App';
const Main = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/App" element={<App/>} />
        </Routes>
    </Router>
    </>
)}

export default Main;