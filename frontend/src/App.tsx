import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';
import VenuesPage from './pages/VenuesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* Root'u home'a yönlendir */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Protected home route */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/venues" element={<VenuesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
