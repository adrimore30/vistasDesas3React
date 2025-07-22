import { Routes, Route } from 'react-router-dom'; // 👈 ¡IMPORTANTE!
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
     
      </Routes>

      <Footer />
    </>
  );
}

export default App;
