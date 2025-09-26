import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu, Moon, Sun, LogOut, User, BookOpen, Award, Users, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
 { name: 'Home', path: '/', icon: BookOpen },
 { name: 'Lessons', path: '/lessons', icon: BookOpen },
 { name: 'Flashcards', path: '/flashcards', icon: Award },
 { name: 'Leaderboard', path: '/leaderboard', icon: Users },
 { name: 'Skill Tree', path: '/skill-tree', icon: Target },
];

export function Header() {
 const { user, signOut } = useAuth();
 const { theme, setTheme } = useTheme();
 const location = useLocation();
 const [isOpen, setIsOpen] = useState(false);

 return (
 <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
 <div className="container flex h-16 items-center justify-between">
 {/* Logo */}
 <Link to="/" className="flex items-center space-x-2">
 <BookOpen className="h-6 w-6 text-primary" />
 <span className="font-bold text-xl bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">TypeLearn</span>
 </Link>

 {/* Desktop Navigation */}
 <nav className="hidden md:flex items-center space-x-6">
 {navItems.map((item) => (
 <Link
 key={item.path}
 to={item.path}
 className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
 >
 <item.icon className="h-4 w-4" />
 <span>{item.name}</span>
 </Link>
 ))}
 </nav>

 {/* Actions */}
 <div className="flex items-center space-x-2">
 {/* Theme Toggle */}
 <Button
 variant="ghost"
 size="icon"
 onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
 className="rounded-full"
 >
 {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
 </Button>

 {/* User Actions */}
 {user ? (
 <div className="flex items-center space-x-2">
 <Link to="/profile">
 <Button variant="ghost" size="icon" className="rounded-full">
 <User className="h-5 w-5" />
 </Button>
 </Link>
 <Button
 variant="ghost"
 size="icon"
 onClick={signOut}
 className="rounded-full"
 >
 <LogOut className="h-5 w-5" />
 </Button>
 </div>
 ) : (
 <Link to="/login">
 <Button>Login</Button>
 </Link>
 )}

 {/* Mobile Menu Button */}
 <Sheet open={isOpen} onOpenChange={setIsOpen}>
 <SheetTrigger asChild>
 <Button variant="ghost" size="icon" className="md:hidden rounded-full">
 <Menu className="h-5 w-5" />
 </Button>
 </SheetTrigger>

 <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
 <div className="flex flex-col h-full">
 <div className="p-4 border-b">
 <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
 <BookOpen className="h-6 w-6 text-primary" />
 <span className="font-bold text-xl bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">TypeLearn</span>
 </Link>
 </div>

 <nav className="flex-1 overflow-y-auto p-4">
 {navItems.map((item) => (
 <Link
 key={item.path}
 to={item.path}
 onClick={() => setIsOpen(false)}
 className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.path ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'}`}
 >
 <item.icon className="h-4 w-4" />
 <span>{item.name}</span>
 </Link>
 ))}
 </nav>

 <div className="p-4 border-t">
 {user ? (
 <div className="flex flex-col space-y-2">
 <Link to="/profile" onClick={() => setIsOpen(false)}>
 <Button variant="outline" className="w-full justify-start">
 <User className="h-4 w-4 mr-2" />
 Profile
 </Button>
 </Link>
 <Button
 variant="outline"
 className="w-full justify-start"
 onClick={() => {
 signOut();
 setIsOpen(false);
 }}
 >
 <LogOut className="h-4 w-4 mr-2" />
 Sign Out
 </Button>
 </div>
 ) : (
 <Link to="/login" onClick={() => setIsOpen(false)}>
 <Button className="w-full">Login</Button>
 </Link>
 )}
 </div>
 </div>
 </SheetContent>
 </Sheet>
 </div>
 </div>
 </header>
 );
}