import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = [
 { name: 'About', path: '/about' },
 { name: 'Contact', path: '/contact' },
 { name: 'FAQs', path: '/faqs' },
 { name: 'Privacy Policy', path: '/privacy' },
 { name: 'Terms of Service', path: '/terms' }
];

const socialLinks = [
 { icon: Facebook, href: '#' },
 { icon: Twitter, href: '#' },
 { icon: Instagram, href: '#' },
 { icon: Linkedin, href: '#' }
];

export function Footer() {
 return (
 <footer className="bg-gray-900 text-white">
 <div className="container px-4 py-12 mx-auto">
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
 <div className="space-y-4">
 <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">TypeLearn</h3>
 <p className="text-gray-400">Master languages through interactive learning and practice.</p>
 <div className="flex space-x-4">
 {socialLinks.map((link, index) => (
 <a
 key={index}
 href={link.href}
 className="text-gray-400 hover:text-white transition-colors"
 >
 <link.icon className="h-6 w-6" />
 </a>
 ))}
 </div>
 </div>

 <div className="md:col-span-2">
 <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
 <div>
 <h4 className="text-lg font-semibold mb-4">Product</h4>
 <ul className="space-y-2">
 <li><Link to="/lessons" className="text-gray-400 hover:text-white transition-colors">Lessons</Link></li>
 <li><Link to="/flashcards" className="text-gray-400 hover:text-white transition-colors">Flashcards</Link></li>
 <li><Link to="/streak" className="text-gray-400 hover:text-white transition-colors">Streak</Link></li>
 </ul>
 </div>

 <div>
 <h4 className="text-lg font-semibold mb-4">Company</h4>
 <ul className="space-y-2">
 <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
 <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
 <li><Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
 </ul>
 </div>

 <div>
 <h4 className="text-lg font-semibold mb-4">Legal</h4>
 <ul className="space-y-2">
 <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
 <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
 </ul>
 </div>
 </div>
 </div>

 <div>
 <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
 <p className="text-gray-400 mb-4">Stay updated with our latest features and offers.</p>
 <form className="flex">
 <input
 type="email"
 placeholder="Your email"
 className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
 />
 <button
 type="submit"
 className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md transition-colors"
 >
 Subscribe
 </button>
 </form>
 </div>
 </div>

 <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
 <p className="text-gray-400 text-sm">© {new Date().getFullYear()} TypeLearn. All rights reserved.</p>
 <div className="flex space-x-6 mt-4 md:mt-0">
 {footerLinks.map((link) => (
 <Link
 key={link.path}
 to={link.path}
 className="text-gray-400 hover:text-white text-sm transition-colors"
 >
 {link.name}
 </Link>
 ))}
 </div>
 </div>
 </div>
 </footer>
 );
}