import { Lesson } from '@/types/lesson';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface LessonCardProps {
 lesson: Lesson;
 onClick: () => void;
}

export function LessonCard({ lesson, onClick }: LessonCardProps) {
 return (
 <motion.div
 whileHover={{ scale:1.02 }}
 whileTap={{ scale:0.98 }}
 onClick={onClick}
 className="cursor-pointer"
 >
 <Card className="h-full">
 <CardHeader>
 <div className="flex justify-between items-start">
 <CardTitle>{lesson.title}</CardTitle>
 <Badge variant={lesson.isCompleted ? 'default' : 'secondary'}>{
 lesson.isCompleted ? 'Completed' : 'In Progress'
 }</Badge>
 </div>
 <CardDescription>{lesson.description}</CardDescription>
 </CardHeader>
 <CardContent>
 <div className="flex justify-between items-center">
 <span className="text-sm text-gray-500">Level: {lesson.level}</span>
 <span className="text-sm text-gray-500">Type: {lesson.type}</span>
 </div>
 </CardContent>
 </Card>
 </motion.div>
 );
}