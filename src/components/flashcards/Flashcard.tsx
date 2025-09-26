import { useState } from 'react';
import { VocabularyCard } from '@/types/vocabulary';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Star, Check, X, RefreshCw } from 'lucide-react';

interface FlashcardProps {
 card: VocabularyCard;
 onReview: (ease: number) => void;
 onMarkFavorite: (id: string) => void;
}

export function Flashcard({ card, onReview, onMarkFavorite }: FlashcardProps) {
 const [isFlipped, setIsFlipped] = useState(false);

 const handleFlip = () => {
 setIsFlipped(!isFlipped);
 };

 const playPronunciation = () => {
 // Implement pronunciation functionality
 console.log(`Playing pronunciation for: ${card.word}`);
 };

 return (
 <motion.div
 className="w-full max-w-md mx-auto perspective-1000"
 initial={false}
 animate={{ rotateY: isFlipped ?180 :0 }}
 transition={{ duration:0.6, ease: 'easeInOut' }}
 >
 <Card className="h-64 flex items-center justify-center cursor-pointer relative overflow-hidden" onClick={handleFlip}>
 {/* Favorite Button */}
 <Button
 variant="ghost"
 size="icon"
 className={`absolute top-2 right-2 z-10 ${isFlipped ? 'text-white' : 'text-gray-500'}`}
 onClick={(e) => {
 e.stopPropagation();
 onMarkFavorite(card.id);
 }}
 >
 <Star className={`h-5 w-5 ${card.isFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`} />
 </Button>

 <AnimatePresence mode="wait">
 {!isFlipped ? (
 <motion.div
 key="front"
 initial={{ opacity:0, rotateY:180 }}
 animate={{ opacity:1, rotateY:0 }}
 exit={{ opacity:0, rotateY: -180 }}
 transition={{ duration:0.3 }}
 className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
 >
 <h3 className="text-2xl font-bold mb-2">{card.word}</h3n <p className="text-gray-500 mb-4">Click to see the translation</p>
 <Button
 variant="outline"
 size="icon"
 className="rounded-full"
 onClick={(e) => {
 e.stopPropagation();
 playPronunciation();
 }}
 >
 <Volume2 className="h-5 w-5" />
 </Button>
 </motion.div>
 ) : (
 <motion.div
 key="back"
 initial={{ opacity:0, rotateY:180 }}
 animate={{ opacity:1, rotateY:0 }}
 exit={{ opacity:0, rotateY: -180 }}
 transition={{ duration:0.3 }}
 className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
 >
 <h3 className="text-2xl font-bold mb-2">{card.translation}</h3>
 <p className="text-indigo-100 mb-4">How well did you remember it?</p>
 <div className="flex justify-center space-x-2">
 {[1,2,3,4,5].map((ease) => (
 <Button
 key={ease}
 size="sm"
 variant={ease <=3 ? 'outline' : 'default'}
 onClick={(e) => {
 e.stopPropagation();
 onReview(ease);
 }}
 className={`w-8 h-8 rounded-full ${ease <=3 ? 'text-white border-white hover:bg-white/10' : 'bg-white text-indigo-600 hover:bg-white/90'}`}
 >
 {ease}
 </Button>
 ))}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </Card>
 </motion.div>
 );
}