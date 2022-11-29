import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/login'
// import Register from './components/Register'
// import PageNotFound from './components/PageNotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;