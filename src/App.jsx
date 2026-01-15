import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Secretariat from './pages/Secretariat';
import Committees from './pages/Committees';
import CommitteeDetail from './pages/CommitteeDetail';
import Contact from './pages/Contact';
import ConferenceDetails from './pages/ConferenceDetails';
import Letter from './pages/Letter';
import Registration from './pages/Registration';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secretariat" element={<Secretariat />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/committees/:committeeId" element={<CommitteeDetail />} />
          <Route path="/conference-details" element={<ConferenceDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/letter/:role" element={<Letter />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
