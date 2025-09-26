import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BookOpen, Users, Target, Award, ChevronRight, PlayCircle, Languages, Clock, TrendingUp, Globe } from 'lucide-react';

const features = [
 {
 icon: Languages,
 title: 'Multiple Languages',
 description: 'Learn from a wide selection of languages with comprehensive courses.',
 link: '/lessons'
 },
 {
 icon: Clock,
 title: 'Flexible Learning',
 description: 'Study at your own pace with our adaptive learning system.',
 link: '/lessons'
 },
 {
 icon: TrendingUp,
 title: 'Track Progress',
 description: 'Monitor your improvement with detailed statistics and insights.',
 link: '/streak'
 },
 {
 icon: Globe,
 title: 'Global Community',
 description: 'Connect with learners worldwide and practice together.',
 link: '/leaderboard'
 }
];

const testimonials = [
 {
 name: 'Sarah Johnson',
 role: 'Language Student',
 content: 'TypeLearn has completely transformed my language learning experience. The interactive lessons and community features make learning so much more engaging and effective.'
 },
 {
 name: 'Michael Chen',
 role: 'Language Enthusiast',
 content: 'I\'ve tried many language learning apps, but TypeLearn stands out with its personalized approach and excellent progress tracking. I\'ve made incredible progress in just a few months.'
 },
 {
 name: 'Emma Rodriguez',
 role: 'Student',
 content: 'As a student preparing for my studies abroad, TypeLearn has been invaluable. The comprehensive lessons and practice tools have helped me build my language skills quickly and confidently.'
 }
];

export default function HomePage() {
 const { user, signOut } = useAuth();
 const [currentTestimonial, setCurrentTestimonial] = useState(0);

 useEffect(() => {
 const interval = setInterval(() => {
 setCurrentTestimonial((prev) => (prev +1) % testimonials.length);
 },5000);
 return () => clearInterval(interval);
 }, []);

 return (
 <div className="min-h-screen">
 {/* Hero Section */}
 <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
 <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
 <motion.div
 initial={{ opacity:0, x: -50 }}
 animate={{ opacity:1, x:0 }}
 transition={{ duration:0.8 }}
 className="md:w-1/2 mb-12 md:mb-0"
 >
 <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
 Master Languages with TypeLearn
 </h1>
 <p className="text-xl mb-8">
 Interactive lessons, community learning, and personalized progress tracking to help you achieve fluency.
 </p>
 <div className="flex space-x-4">
 {user ? (
 <Button variant="secondary" size="lg" onClick={signOut}>
 Sign Out
 </Button>
 ) : (
 <Link to="/login">
 <Button size="lg">
 Get Started
 </Button>
 </Link>
 )}
 <Link to="/lessons">
 <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
 <PlayCircle className="mr-2 h-5 w-5" />
 Watch Demo
 </Button>
 </Link>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity:0, x:50 }}
 animate={{ opacity:1, x:0 }}
 transition={{ duration:0.8, delay:0.2 }}
 className="md:w-1/2"
 >
 <div className="relative">
 <div className="bg-white rounded-lg shadow-2xl p-6">
 <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
 {/* Placeholder for video */}
 <div className="flex items-center justify-center h-full">
 <PlayCircle className="h-16 w-16 text-indigo-500" />
 </div>
 </div>
 <div className="mt-4">
 <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn Spanish in30 Days</h3>
 <p className="text-gray-600">
 Our comprehensive course helps you build conversational Spanish skills in just30 days.
 </p>
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* Features Section */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <motion.div
 initial={{ opacity:0, y:20 }}
 whileInView={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 viewport={{ once: true }}
 className="text-center mb-16"
 >
 <h2 className="text-3xl font-bold mb-4">Why Choose TypeLearn?</h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 We offer a unique combination of features designed to make your language learning journey as effective and enjoyable as possible.
 </p>
 </motion.div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {features.map((feature, index) => (
 <motion.div
 key={index}
 initial={{ opacity:0, y:20 }}
 whileInView={{ opacity:1, y:0 }}
 transition={{ duration:0.5, delay: index *0.1 }}
 viewport={{ once: true }}
 >
 <Link to={feature.link} className="block h-full">
 <Card className="h-full hover:shadow-lg transition-shadow hover:bg-indigo-50">
 <CardHeader className="flex flex-row items-center space-x-4">
 <div className="bg-indigo-100 p-3 rounded-full">
 <feature.icon className="h-6 w-6 text-indigo-600" />
 </div>
 <CardTitle>{feature.title}</CardTitle>
 </CardHeader>
 <CardContent>
 <CardDescription>{feature.description}</CardDescription>
 <div className="mt-4 flex items-center text-indigo-600 font-medium">
 Learn More <ChevronRight className="ml-1 h-4 w-4" />
 </div>
 </CardContent>
 </Card>
 </Link>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Testimonials Section */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <motion.div
 initial={{ opacity:0, y:20 }}
 whileInView={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 viewport={{ once: true }}
 className="text-center mb-16"
 >
 <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Hear from real learners who have achieved success with TypeLearn.
 </p>
 </motion.div>

 <div className="max-w-3xl mx-auto">
 <motion.div
 key={currentTestimonial}
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 exit={{ opacity:0, y: -20 }}
 transition={{ duration:0.5 }}
 >
 <Card className="bg-indigo-50">
 <CardContent className="pt-6">
 <div className="flex items-center mb-6">
 <div className="bg-indigo-600 text-white rounded-full h-12 w-12 flex items-center justify-center mr-4">
 {testimonials[currentTestimonial].name.charAt(0)}
 </div>
 <div>
 <h3 className="font-semibold">{testimonials[currentTestimonial].name}</h3>
 <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
 </div>
 </div>
 <p className="text-gray-700 italic text-lg">
 "{testimonials[currentTestimonial].content}"
 </p>
 </CardContent>
 </Card>
 </motion.div>

 <div className="flex justify-center mt-8 space-x-2">
 {testimonials.map((_, index) => (
 <button
 key={index}
 onClick={() => setCurrentTestimonial(index)}
 className={`h-2 w-2 rounded-full ${index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300'}`}
 />
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-16 bg-indigo-600 text-white">
 <div className="container mx-auto px-4 text-center">
 <motion.div
 initial={{ opacity:0, y:20 }}
 whileInView={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 viewport={{ once: true }}
 >
 <h2 className="text-3xl font-bold mb-6">Ready to Start Your Language Journey?</h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Join thousands of learners who are already mastering languages with TypeLearn.
 </p>
 <div className="flex justify-center space-x-4">
 {user ? (
 <Button variant="secondary" size="lg" onClick={signOut}>
 Sign Out
 </Button>
 ) : (
 <Link to="/login">
 <Button size="lg" variant="secondary">
 Get Started
 </Button>
 </Link>
 )}
 <Link to="/lessons">
 <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
 Explore Lessons
 </Button>
 </Link>
 </div>
 </motion.div>
 </div>
 </section>
 </div>
 );
}