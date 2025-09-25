import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface TranslationExerciseProps {
 word: string;
 translation: string;
 onComplete: (isCorrect: boolean) => void;
}

export function TranslationExercise({
 word,
 translation,
 onComplete
}: TranslationExerciseProps) {
 const [userTranslation, setUserTranslation] = useState('');
 const [isSubmitted, setIsSubmitted] = useState(false);
 const [isCorrect, setIsCorrect] = useState(false);

 const handleSubmit = () => {
 const normalizedUserTranslation = userTranslation.trim().toLowerCase();
 const normalizedCorrectTranslation = translation.trim().toLowerCase();
 const correct = normalizedUserTranslation === normalizedCorrectTranslation;

 setIsCorrect(correct);
 setIsSubmitted(true);
 onComplete(correct);
 };

 return (
 <div className="space-y-4">
 <p className="text-lg">Translate: {word}</p>

 <div className="flex items-center space-x-4">
 <Input
 value={userTranslation}
 onChange={(e) => setUserTranslation(e.target.value)}
 disabled={isSubmitted}
 className="flex-1"
 />
 <Button
 onClick={handleSubmit}
 disabled={isSubmitted || !userTranslation}
 >
 Submit
 </Button>
 </div>

 {isSubmitted && (
 <motion.div
 initial={{ opacity:0, y: -10 }}
 animate={{ opacity:1, y:0 }}
 className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
 >
 {isCorrect ? (
 <p>Correct! The translation is: {translation}</p>
 ) : (
 <p>Incorrect. The correct translation is: {translation}</p>
 )}
 </motion.div>
 )}
 </div>
 );
}