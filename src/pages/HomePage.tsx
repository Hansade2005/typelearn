import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function HomePage() {
 const { user, signOut } = useAuth();

 return (
 <div className="min-h-screen bg-gray-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 className="bg-white rounded-lg shadow-xl p-8"
 >
 <div className="flex justify-between items-center mb-8">
 <h1 className="text-3xl font-bold text-gray-900">Welcome to TypeLearn</h1>
 {user && (
 <Button onClick={signOut} variant="outline">
 Sign Out
 </Button>
 )}
 </div>

 {user ? (
 <div>
 <p className="text-lg text-gray-700 mb-6">
 You are logged in as {user.email}
 </p>
 {/* Additional content will go here */}
 </div>
 ) : (
 <div>
 <p className="text-lg text-gray-700 mb-6">
 Please sign in to access your language learning dashboard.
 </p>
 <Button onClick={() => window.location.href = '/login'}>Sign In</Button>
 </div>
 )}
 </motion.div>
 </div>
 </div>
 );
}

export default HomePage;