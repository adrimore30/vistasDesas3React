import { Routes, Route } from 'react-router-dom'; // 👈 ¡IMPORTANTE!
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import { Publication } from './pages/Publication';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
     
     
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/publicar" element={<Publication />} />

      </Routes>
      

      <Footer />
    </>
  );
}

export default App;
