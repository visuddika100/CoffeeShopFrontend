import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';

function App() {
  return (
    <Routes>
      <Route path="/dashboared" element={<Dashboard/>} />
      <Route path="/dashboared2" element={<Dashboard2/>} />
      {/* <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>

  );
}

export default App;
