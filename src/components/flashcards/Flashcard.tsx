import { useState } from 'react';
import { VocabularyCard } from '@/types/vocabulary';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface FlashcardProps {
 card: VocabularyCard;
 onReview: (ease: number) => void;
}

export function Flashcard({ card, onReview }: FlashcardProps) {
 const [isFlipped, setIsFlipped] = useState(false);

 const handleFlip = () => {
 setIsFlipped(!isFlipped);
 };

 return (
 <motion.div
 className="w-full max-w-md mx-auto"
 initial={false}
 animate={{ rotateY: isFlipped ?180 :0 }}
 transition={{ duration:0.6 }}
 style={{ perspective:1000 }}
 >
 <Card className="h-64 flex items-center justify-center cursor-pointer" onClick={handleFlip}>
 {!isFlipped ? (
 <div className="text-center p-6">
 <h3 className="text-2xl font-bold mb-2">{card.word}</h3>
 <p className="text-gray-500">Click to see the translation</p>
 </div>
 ) : (
 <div className="text-center p-6">
 <h3 className="text-2xl font-bold mb-2">{card.translation}</h3>
 <p className="text-gray-500 mb-4">How well did you remember it?</p>
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
 >
 {ease}
 </Button>
 ))}
 </div>
 </div>
 )}
 </Card>
 </motion.div>
 );
}