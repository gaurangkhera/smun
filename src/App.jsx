import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Secretariat from './pages/Secretariat';
import Committees from './pages/Committees';
import Contact from './pages/Contact';
import Letter from './pages/Letter';
import ConferenceDetails from './pages/ConferenceDetails';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secretariat" element={<Secretariat />} />
          <Route path="/secretariat/letter/:role" element={<Letter />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/conference-details" element={<ConferenceDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
