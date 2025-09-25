import { useState } from 'react';
import { Lesson } from '@/types/lesson';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface LessonPlayerProps {
 lesson: Lesson;
 onComplete: () => void;
}

export function LessonPlayer({ lesson, onComplete }: LessonPlayerProps) {
 const [progress, setProgress] = useState(0);
 const [isCompleted, setIsCompleted] = useState(false);

 const handleComplete = () => {
 setIsCompleted(true);
 onComplete();
 };

 return (
 <Card className="w-full max-w-3xl mx-auto">
 <CardHeader>
 <CardTitle>{lesson.title}</CardTitle>
 </CardHeader>
 <CardContent className="space-y-6">
 <div className="prose dark:prose-invert">
 <p>{lesson.content}</p>
 </div>

 <div className="flex justify-between items-center">
 <Button variant="outline" onClick={onComplete}>Back to Lessons</Button>
 {!isCompleted ? (
 <Button onClick={handleComplete}>Complete Lesson</Button>
 ) : (
 <Button variant="secondary" disabled>Lesson Completed</Button>
 )}
 </div>
 </CardContent>
 </Card>
 );
}