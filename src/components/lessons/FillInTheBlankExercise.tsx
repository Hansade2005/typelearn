import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface FillInTheBlankExerciseProps {
 question: string;
 answer: string;
 onComplete: (isCorrect: boolean) => void;
}

export function FillInTheBlankExercise({
 question,
 answer,
 onComplete
}: FillInTheBlankExerciseProps) {
 const [userAnswer, setUserAnswer] = useState('');
 const [isSubmitted, setIsSubmitted] = useState(false);
 const [isCorrect, setIsCorrect] = useState(false);

 const handleSubmit = () => {
 const normalizedUserAnswer = userAnswer.trim().toLowerCase();
 const normalizedCorrectAnswer = answer.trim().toLowerCase();
 const correct = normalizedUserAnswer === normalizedCorrectAnswer;

 setIsCorrect(correct);
 setIsSubmitted(true);
 onComplete(correct);
 };

 return (
 <div className="space-y-4">
 <p className="text-lg">{question}</p>

 <div className="flex items-center space-x-4">
 <Input
 value={userAnswer}
 onChange={(e) => setUserAnswer(e.target.value)}
 disabled={isSubmitted}
 className="flex-1"
 />
 <Button
 onClick={handleSubmit}
 disabled={isSubmitted || !userAnswer}
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
 <p>Correct! The answer is: {answer}</p>
 ) : (
 <p>Incorrect. The correct answer is: {answer}</p>
 )}
 </motion.div>
 )}
 </div>
 );
}