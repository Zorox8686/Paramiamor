import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ReportForm from './components/ReportForm';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<ReportForm />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;