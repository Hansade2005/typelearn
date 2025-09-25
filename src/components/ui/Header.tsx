import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
 { name: 'Home', path: '/' },
 { name: 'Lessons', path: '/lessons' },
 { name: 'Flashcards', path: '/flashcards' },
 { name: 'Streak', path: '/streak' },
 { name: 'Leaderboard', path: '/leaderboard' },
 { name: 'Skill Tree', path: '/skill-tree' },
 { name: 'About', path: '/about' },
 { name: 'Contact', path: '/contact' }
];

export function Header() {
 const { user, signOut } = useAuth();
 const [isOpen, setIsOpen] = useState(false);

 return (
 <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
 <div className="container flex h-16 items-center justify-between">
 <div className="flex items-center">
 <Link to="/" className="flex items-center space-x-2">
 <motion.div
 initial={{ scale:0.8, opacity:0 }}
 animate={{ scale:1, opacity:1 }}
 transition={{ duration:0.5 }}
 >
 <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">TypeLearn</span>
 </motion.div>
 </Link>
 </div>

 {/* Desktop Navigation */}
 <nav className="hidden md:flex items-center space-x-6">
 {navItems.map((item) => (
 <Link
 key={item.path}
 to={item.path}
 className="text-sm font-medium transition-colors hover:text-primary"
 >
 {item.name}
 </Link>
 ))}

 {user ? (
 <Button variant="ghost" onClick={signOut} className="text-sm">
 Sign Out
 </Button>
 ) : (
 <Link to="/login">
 <Button variant="ghost" className="text-sm">
 Sign In
 </Button>
 </Link>
 )}
 </nav>

 {/* Mobile Navigation */}
 <div className="md:hidden">
 <Sheet open={isOpen} onOpenChange={setIsOpen}>
 <SheetTrigger asChild>
 <Button variant="ghost" size="icon">
 <Menu className="h-6 w-6" />
 <span className="sr-only">Toggle menu</span>
 </Button>
 </SheetTrigger>
 <SheetContent side="right" className="w-[300px] sm:w-[400px]">
 <nav className="flex flex-col space-y-4 mt-8">
 {navItems.map((item) => (
 <Link
 key={item.path}
 to={item.path}
 className="text-sm font-medium transition-colors hover:text-primary"
 onClick={() => setIsOpen(false)}
 >
 {item.name}
 </Link>
 ))}

 {user ? (
 <Button variant="ghost" onClick={() => {
 signOut();
 setIsOpen(false);
 }} className="text-sm justify-start">
 Sign Out
 </Button>
 ) : (
 <Link to="/login" onClick={() => setIsOpen(false)}>
 <Button variant="ghost" className="text-sm justify-start">
 Sign In
 </Button>
 </Link>
 )}
 </nav>
 </SheetContent>
 </Sheet>
 </div>
 </div>
 </header>
 );
}