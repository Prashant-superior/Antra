import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';
import GenreSelection from './pages/GenreSelection';
import Game from './pages/Game';

function App() {
  return (
    <div className='bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen w-full'>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/genre" element={<GenreSelection/>} />
          <Route path="/game" element={<Game/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;