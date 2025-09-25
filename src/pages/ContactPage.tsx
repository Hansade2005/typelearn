import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
 name: string;
 email: string;
 subject: string;
 message: string;
}

export default function ContactPage() {
 const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 const { name, value } = e.target;
 setFormData(prev => ({ ...prev, [name]: value }));
 };

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setIsSubmitting(true);

 // Simulate API call
 await new Promise(resolve => setTimeout(resolve,1500));

 setIsSubmitting(false);
 setSubmitStatus('success');
 setFormData({ name: '', email: '', subject: '', message: '' });
 };

 return (
 <div className="min-h-screen bg-gray-50">
 <div className="container mx-auto px-4 py-16">
 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 className="text-center mb-16"
 >
 <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Contact Us</h1>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
 </p>
 </motion.div>

 <div className="grid md:grid-cols-2 gap-8">
 <motion.div
 initial={{ opacity:0, x:-20 }}
 animate={{ opacity:1, x:0 }}
 transition={{ duration:0.5, delay:0.2 }}
 >
 <Card className="h-full">
 <CardHeader>
 <CardTitle>Contact Information</CardTitle>
 </CardHeader>
 <CardContent className="space-y-6">
 <div className="flex items-start space-x-4">
 <div className="bg-indigo-100 p-3 rounded-full">
 <Mail className="h-6 w-6 text-indigo-600" />
 </div>
 <div>
 <h3 className="font-medium">Email</h3>
 <p className="text-gray-600">support@typelarn.com</p>
 </div>
 </div>

 <div className="flex items-start space-x-4">
 <div className="bg-indigo-100 p-3 rounded-full">
 <Phone className="h-6 w-6 text-indigo-600" />
 </div>
 <div>
 <h3 className="font-medium">Phone</h3>
 <p className="text-gray-600">+1 (555)123-4567</p>
 </div>
 </div>

 <div className="flex items-start space-x-4">
 <div className="bg-indigo-100 p-3 rounded-full">
 <MapPin className="h-6 w-6 text-indigo-600" />
 </div>
 <div>
 <h3 className="font-medium">Address</h3>
 <p className="text-gray-600">123 Language Street, Education City, LC12345</p>
 </div>
 </div>

 <div className="pt-4">
 <h3 className="font-medium mb-2">Business Hours</h3>
 <ul className="space-y-1 text-gray-600">
 <li>Monday - Friday:9:00 AM -6:00 PM</li>
 <li>Saturday:10:00 AM -4:00 PM</li>
 <li>Sunday: Closed</li>
 </ul>
 </div>
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
 <CardTitle>Send Us a Message</CardTitle>
 </CardHeader>
 <CardContent>
 {submitStatus === 'success' ? (
 <div className="text-center py-8">
 <div className="bg-green-100 p-4 rounded-lg mb-4">
 <h3 className="text-green-800 font-medium">Message Sent Successfully!</h3>
 <p className="text-green-600 mt-1">We'll get back to you as soon as possible.</p>
 </div>
 <Button onClick={() => setSubmitStatus('idle')} variant="outline">Send Another Message</Button>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-4">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="space-y-2">
 <label htmlFor="name" className="text-sm font-medium">Name</label>
 <Input
 id="name"
 name="name"
 value={formData.name}
 onChange={handleChange}
 required
 />
 </div>
 <div className="space-y-2">
 <label htmlFor="email" className="text-sm font-medium">Email</label>
 <Input
 id="email"
 name="email"
 type="email"
 value={formData.email}
 onChange={handleChange}
 required
 />
 </div>
 </div>

 <div className="space-y-2">
 <label htmlFor="subject" className="text-sm font-medium">Subject</label>
 <Input
 id="subject"
 name="subject"
 value={formData.subject}
 onChange={handleChange}
 required
 />
 </div>

 <div className="space-y-2">
 <label htmlFor="message" className="text-sm font-medium">Message</label>
 <Textarea
 id="message"
 name="message"
 value={formData.message}
 onChange={handleChange}
 required
 rows={5}
 />
 </div>

 <Button type="submit" disabled={isSubmitting} className="w-full">
 {isSubmitting ? 'Sending...' : 'Send Message'}
 </Button>
 </form>
 )}
 </CardContent>
 </Card>
 </motion.div>
 </div>
 </div>
 </div>
 );
}