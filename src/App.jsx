import { Routes, Route } from 'react-router-dom'; // 👈 ¡IMPORTANTE!
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
       <div className="main-content">
      <div className="form-container">
        <div className="form-box login-container">
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
      </div>
    </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
