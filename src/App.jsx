import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';
import GenreSelection from './pages/GenreSelection';

function App() {
  return (
    <div className='bg-gradient-to-l from-sky-400 via-rose-400 to-lime-400 min-h-screen w-full'>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/genre" element={<GenreSelection/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;