import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const faqs = [
 {
 question: 'What languages does TypeLearn support?',
 answer: 'TypeLearn currently supports English, Spanish, French, German, and Italian. We\'re constantly adding new languages to our platform.'
 },
 {
 question: 'How does the spaced repetition system work?',
 answer: 'Our spaced repetition system uses an algorithm that determines how often you should review each flashcard based on your performance. The more you remember a word, the less frequently you\'ll see it again.'
 },
 {
 question: 'Is TypeLearn free to use?',
 answer: 'Yes, TypeLearn is completely free to use. We believe that everyone should have access to quality language learning resources.'
 },
 {
 question: 'How do I track my progress?',
 answer: 'You can track your progress through the dashboard, which shows your learning streaks, completed lessons, and flashcard reviews. We also provide detailed statistics to help you understand your improvement over time.'
 },
 {
 question: 'Can I learn at my own pace?',
 answer: 'Absolutely! TypeLearn is designed to be flexible, so you can learn at your own pace. You can take as much time as you need to complete lessons and reviewcards.'
 },
 {
 question: 'How do I get help if I\'m stuck?',
 answer: 'If you\'re having trouble with a lesson or flashcard, you can use our built-in hints and explanations. You can also contact our support team through the Contact page if you need additional assistance.'
 }
];

export default function FAQsPage() {
 return (
 <div className="min-h-screen bg-gray-50">
 <div className="container mx-auto px-4 py-16">
 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 className="text-center mb-16"
 >
 <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Frequently Asked Questions</h1>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Find answers to common questions about TypeLearn and our language learning platform.
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5, delay:0.2 }}
 >
 <Card>
 <CardHeader>
 <CardTitle>Common Questions</CardTitle>
 </CardHeader>
 <CardContent>
 <Accordion type="single" collapsible className="w-full">
 {faqs.map((faq, index) => (
 <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
 <AccordionTrigger className="text-left hover:no-underline py-4">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-gray-600 py-4">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </CardContent>
 </Card>
 </motion.div>

 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5, delay:0.4 }}
 className="mt-16 text-center"
 >
 <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
 <p className="text-gray-600 mb-6">If you can't find the answer to your question here, please feel free to contact us.</p>
 <a href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
 Contact Us
 </a>
 </motion.div>
 </div>
 </div>
 );
}