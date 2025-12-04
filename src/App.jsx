import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Secretariat from './pages/Secretariat';
import Committees from './pages/Committees';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secretariat" element={<Secretariat />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/committees/:id" element={<Committees />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
