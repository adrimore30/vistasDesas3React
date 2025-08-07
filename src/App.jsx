// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import Chat from './pages/Chat';
import Publication from './pages/Publication';
import './App.css';

function App() {
  const location = useLocation();
  const isChatRoute = location.pathname === '/chat';

  return (
    <>
      {/* Mostrar Navbar solo si no es la vista de chat */}
      {!isChatRoute && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<UserProfile />} />
        <Route path="/chat" element={<Chat />} />      
        <Route path="/publicar" element={<Publication />} />
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Mostrar Footer solo si no es la vista de chat */}
      {!isChatRoute && <Footer />}
    </>
  );
}

export default App;
