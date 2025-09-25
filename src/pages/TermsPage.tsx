import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const termsSections = [
 {
 title: 'Acceptance of Terms',
 content: [
 'By accessing or using TypeLearn, you agree to be bound by these Terms of Service and our Privacy Policy.',
 'If you do not agree to these terms, please do not use our services.'
 ]
 },
 {
 title: 'User Accounts',
 content: [
 'You are responsible for maintaining the confidentiality of your account and password.',
 'You are responsible for all activities that occur under your account.'
 ]
 },
 {
 title: 'Intellectual Property',
 content: [
 'All content and materials available on TypeLearn, including but not limited to text, graphics, logos, and software, are the property of TypeLearn or its licensors and are protected by copyright and other intellectual property laws.',
 'You may not use, reproduce, distribute, or create derivative works from any content or materials without our prior written consent.'
 ]
 },
 {
 title: 'User Conduct',
 content: [
 'You agree not to use TypeLearn for any illegal or unauthorized purpose.',
 'You agree not to interfere with or disrupt the operation of TypeLearn or the servers or networks connected to TypeLearn.'
 ]
 },
 {
 title: 'Termination',
 content: [
 'We may terminate or suspend your account and access to TypeLearn immediately, without prior notice or liability, for any reason whatsoever.',
 'Upon termination, your right to use TypeLearn will immediately cease.'
 ]
 },
 {
 title: 'Disclaimer of Warranties',
 content: [
 'TypeLearn is provided on an "as is" and "as available" basis without any warranties of any kind.',
 'We do not warrant that TypeLearn will be error-free or uninterrupted, or that any defects will be corrected.'
 ]
 },
 {
 title: 'Limitation of Liability',
 content: [
 'In no event shall TypeLearn or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of TypeLearn.',
 'Our total liability for any claims arising out of or relating to your use of TypeLearn shall not exceed the amount you paid, if any, for accessing TypeLearn.'
 ]
 }
];

export default function TermsPage() {
 return (
 <div className="min-h-screen bg-gray-50">
 <div className="container mx-auto px-4 py-16">
 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 className="text-center mb-16"
 >
 <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Terms of Service</h1>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Last updated: {new Date().toLocaleDateString()}
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5, delay:0.2 }}
 >
 <Card>
 <CardHeader>
 <CardTitle>Terms of Service</CardTitle>
 </CardHeader>
 <CardContent className="space-y-8">
 <p className="text-gray-600">
 These Terms of Service govern your use of TypeLearn and the services we provide. By accessing or using TypeLearn, you agree to be bound by these Terms.
 </p>

 {termsSections.map((section, index) => (
 <div key={index} className="space-y-4">
 <h2 className="text-xl font-semibold">{section.title}</h2>
 <ul className="list-disc pl-6 space-y-2 text-gray-600">
 {section.content.map((item, itemIndex) => (
 <li key={itemIndex}>{item}</li>
 ))}
 </ul>
 </div>
 ))}

 <div className="mt-8 pt-8 border-t border-gray-200">
 <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
 <p className="text-gray-600">
 If you have any questions about these Terms of Service, please contact us at:
 </p>
 <p className="text-gray-600 mt-2">
 support@typelarn.com
 </p>
 </div>
 </CardContent>
 </Card>
 </motion.div>
 </div>
 </div>
 );
}