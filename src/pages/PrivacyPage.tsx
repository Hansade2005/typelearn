import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const privacySections = [
 {
 title: 'Information We Collect',
 content: [
 'We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us.',
 'We may also collect information automatically when you use our services, including your IP address, browser type, and device information.'
 ]
 },
 {
 title: 'How We Use Your Information',
 content: [
 'We use the information we collect to provide, maintain, and improve our services.',
 'We may use your information to communicate with you, respond to your inquiries, and send you updates and promotional materials.'
 ]
 },
 {
 title: 'Information Sharing',
 content: [
 'We do not sell or rent your personal information to third parties.',
 'We may share your information with service providers who help us operate our business and deliver our services.'
 ]
 },
 {
 title: 'Data Security',
 content: [
 'We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, and destruction.',
 'Despite our efforts to secure your information, no method of transmission over the internet or electronic storage is100% secure.'
 ]
 },
 {
 title: 'Your Choices',
 content: [
 'You can access, update, or delete your personal information by logging into your account.',
 'You can opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.'
 ]
 },
 {
 title: 'Changes to This Policy',
 content: [
 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.',
 'We encourage you to review this privacy policy periodically for the latest information on our privacy practices.'
 ]
 }
];

export default function PrivacyPage() {
 return (
 <div className="min-h-screen bg-gray-50">
 <div className="container mx-auto px-4 py-16">
 <motion.div
 initial={{ opacity:0, y:20n animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 className="text-center mb-16"
 >
 <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Privacy Policy</h1>
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
 <CardTitle>Privacy Policy</CardTitle>
 </CardHeader>
 <CardContent className="space-y-8">
 <p className="text-gray-600">
 This Privacy Policy describes how TypeLearn collects, uses, and shares your personal information when you use our website and services.
 </p>

 {privacySections.map((section, index) => (
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
 If you have any questions about this Privacy Policy, please contact us at:
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