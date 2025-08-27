import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import DashboardLayout from './components/DashboardLayout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App
