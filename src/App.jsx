import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-300 mb-4">404</h1>
        <p className="text-slate-600 mb-6">Page not found.</p>
        <a href="#/" className="px-4 py-2 rounded-lg bg-slate-900 text-white">
          Go Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
