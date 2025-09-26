import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const footerLinks = [
 { name: 'About', path: '/about' },
 { name: 'Contact', path: '/contact' },
 { name: 'FAQs', path: '/faqs' },
 { name: 'Privacy', path: '/privacy' },
 { name: 'Terms', path: '/terms' },
];

const socialLinks = [
 { icon: Facebook, url: 'https://facebook.com', name: 'Facebook' },
 { icon: Twitter, url: 'https://twitter.com', name: 'Twitter' },
 { icon: Instagram, url: 'https://instagram.com', name: 'Instagram' },
 { icon: Linkedin, url: 'https://linkedin.com', name: 'LinkedIn' },
];

export function Footer() {
 return (
 <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
 <div className="container px-4 py-12">
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
 {/* About Section */}
 <div className="space-y-4">
 <div className="flex items-center space-x-2">
 <BookOpen className="h-8 w-8 text-white" />
 <span className="text-2xl font-bold">TypeLearn</span>
 </div>
 <p className="text-gray-300">
 TypeLearn is your comprehensive language learning platform designed to help you master new languages through interactive lessons, flashcards, and community features.
 </p>
 </div>

 {/* Quick Links */}
 <div>
 <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
 <ul className="space-y-2">
 {footerLinks.map((link) => (
 <li key={link.path}>
 <Link
 to={link.path}
 className="text-gray-300 hover:text-white transition-colors hover:underline"
 >
 {link.name}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Contact Info */}
 <div>
 <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
 <ul className="space-y-2">
 <li className="flex items-center">
 <Mail className="h-5 w-5 mr-2" />
 <a href="mailto:support@typelarn.com" className="text-gray-300 hover:text-white transition-colors">
 support@typelarn.com
 </a>
 </li>
 <li className="flex items-center">
 <Phone className="h-5 w-5 mr-2" />
 <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
 +1 (234)567-890
 </a>
 </li>
 </ul>
 </div>

 {/* Social Media */}
 <div>
 <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
 <div className="flex space-x-4">
 {socialLinks.map((social) => (
 <a
 key={social.name}
 href={social.url}
 target="_blank"
 rel="noopener noreferrer"
 className="text-gray-300 hover:text-white transition-colors"
 aria-label={social.name}
 >
 <social.icon className="h-6 w-6" />
 </a>
 ))}
 </div>
 </div>
 </div>

 {/* Copyright */}
 <div className="mt-12 pt-8 border-t border-indigo-700 text-center text-gray-400">
 <p>&copy; {new Date().getFullYear()} TypeLearn. All rights reserved.</p>
 </div>
 </div>
 </footer>
 );
}