import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import About from './pages/About/About';
import Booking from './pages/Booking/Booking';
import Contact from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="booking" element={<Booking />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
