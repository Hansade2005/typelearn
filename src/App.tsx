import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import { Toaster } from '@/components/ui/sonner';

function App() {
 return (
 <Router>
 <Toaster />
 <Routes>
 <Route path="/login" element={<LoginPage />} />
 <Route path="/" element={<HomePage />} />
 </Routes>
 </Router>
 );
}

export default App;