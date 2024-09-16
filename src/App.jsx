import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  LandingPage from "./pages/LandingPage";
import './App.css';
import GenreSelection from './pages/GenreSelection';
import Fun from './pages/Fun_page';

function App() {
  return (
    <div className='bg-gradient-to-l from-sky-400 via-rose-400 to-lime-400 min-h-screen w-full'>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/genre" element={<GenreSelection/>} />
          <Route path="/fun" element={<Fun/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;