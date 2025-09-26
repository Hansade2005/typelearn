import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Target, Award } from 'lucide-react';

const features = [
 {
 icon: Users,
 title: 'Community Learning',
 description: 'Join a community of language learners and practice together.'
 },
 {
 icon: BookOpen,
 title: 'Interactive Lessons',
 description: 'Engage with interactive lessons that make learning fun and effective.'
 },
 {
 icon: Target,
 title: 'Personalized Path',
 description: 'Follow a personalized learning path tailored to your goals.'
 },
 {
 icon: Award,
 title: 'Track Your Progress',
 description: 'Monitor your progress and achieve your language learning milestones.'
 }
];

export default function AboutPage() {
 return (
 <div className="min-h-screen bg-gray-50">
 <div className="container mx-auto px-4 py-16">
 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 className="text-center mb-16"
 >
 <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">About TypeLearn</h1>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 We're on a mission to make language learning accessible, engaging, and effective for everyone.
 </p>
 </motion.div>

 <div className="grid md:grid-cols-2 gap-8 mb-16">
 <motion.div
 initial={{ opacity:0, x:-20 }}
 animate={{ opacity:1, x:0 }}
 transition={{ duration:0.5, delay:0.2 }}
 >
 <Card className="h-full">
 <CardHeader>
 <CardTitle>Our Story</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4">
 <p className="text-gray-600">
 Founded in2023, TypeLearn was created by a team of passionate educators and technologists who wanted to revolutionize language learning. We noticed that traditional methods were often boring and ineffective, so we set out to create a platform that makes learning languages fun and engaging.
 </p>
 <p className="text-gray-600">
 Our team combines expertise in linguistics, education, and technology to create the most effective language learning experience possible. We're constantly innovating and improving our platform to ensure our users have the best possible learning experience.
 </p>
 </CardContent>
 </Card>
 </motion.div>

 <motion.div
 initial={{ opacity:0, x:20 }}
 animate={{ opacity:1, x:0 }}
 transition={{ duration:0.5, delay:0.4 }}
 >
 <Card className="h-full">
 <CardHeader>
 <CardTitle>Our Mission</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4">
 <p className="text-gray-600">
 Our mission is to make language learning accessible to everyone, regardless of their background or experience level. We believe that language learning should be fun, engaging, and effective, and we're committed to creating a platform that delivers just that.
 </p>
 <p className="text-gray-600">
 We're dedicated to providing high-quality, personalized language learning experiences that help our users achieve their goals. Whether you're a beginner or an advanced learner, we're here to support you every step of the way.
 </p>
 </CardContent>
 </Card>
 </motion.div>
 </div>

 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5, delay:0.6 }}
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
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5, delay: index *0.1 }}
 >
 <Card className="h-full">
 <CardHeader className="flex flex-row items-center space-x-4">
 <div className="bg-indigo-100 p-3 rounded-full">
 <feature.icon className="h-6 w-6 text-indigo-600" />
 </div>
 <CardTitle>{feature.title}</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-gray-600">{feature.description}</p>
 </CardContent>
 </Card>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 );
}