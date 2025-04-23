import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import Resources from './pages/Resources';
import Apply from './pages/Apply';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;