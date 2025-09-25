import { useState, useEffect } from 'react';
import { Lesson } from '@/types/lesson';
import { LessonCard } from './LessonCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

interface LessonListProps {
 lessons: Lesson[];
 onLessonSelect: (lesson: Lesson) => void;
}

export function LessonList({ lessons, onLessonSelect }: LessonListProps) {
 const [activeTab, setActiveTab] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

 const filteredLessons = lessons.filter(lesson => {
 if (activeTab === 'all') return true;
 return lesson.level === activeTab;
 });

 return (
 <div className="space-y-6">
 <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
 <TabsList className="grid w-full grid-cols-4">
 <TabsTrigger value="all">All</TabsTrigger>
 <TabsTrigger value="beginner">Beginner</TabsTrigger>
 <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
 <TabsTrigger value="advanced">Advanced</TabsTrigger>
 </TabsList>
 </Tabs>

 <motion.div
 layout
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
 >
 {filteredLessons.map(lesson => (
 <LessonCard
 key={lesson.id}
 lesson={lesson}
 onClick={() => onLessonSelect(lesson)}
 />
 ))}
 </motion.div>
 </div>
 );
}