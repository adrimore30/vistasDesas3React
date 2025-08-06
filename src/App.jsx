import { Routes, Route } from 'react-router-dom'; // 👈 ¡IMPORTANTE!
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
   
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/perfil" element={<UserProfile />} /> 


        <Route path="/" element={<Home />} />

      </Routes>
      
   
     

      <Footer />
    </>
  );
}

export default App;
