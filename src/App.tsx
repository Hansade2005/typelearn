import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import FAQsPage from '@/pages/FAQsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import LessonsPage from '@/pages/LessonsPage';
import FlashcardsPage from '@/pages/FlashcardsPage';
import StreakPage from '@/pages/StreakPage';
import LeaderboardPage from '@/pages/LeaderboardPage';
import SkillTreePage from '@/pages/SkillTreePage';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
 return (
 <Router>
 <div className="flex flex-col min-h-screen">
 <Header />
 <main className="flex-1">
 <Toaster />
 <Routes>
 <Route path="/login" element={<LoginPage />} />
 <Route path="/" element={<HomePage />} />
 <Route path="/about" element={<AboutPage />} />
 <Route path="/contact" element={<ContactPage />} />
 <Route path="/faqs" element={<FAQsPage />} />
 <Route path="/privacy" element={<PrivacyPage />} />
 <Route path="/terms" element={<TermsPage />} />
 <Route path="/lessons" element={<LessonsPage />} />
 <Route path="/flashcards" element={<FlashcardsPage />} />
 <Route path="/streak" element={<StreakPage />} />
 <Route path="/leaderboard" element={<LeaderboardPage />} />
 <Route path="/skill-tree" element={<SkillTreePage />} />
 </Routes>
 </main>
 <Footer />
 </div>
 </Router>
 );
}

export default App;