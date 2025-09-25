import { useState, useEffect } from 'react';
import { Lesson } from '@/types/lesson';
import { LessonList } from '@/components/lessons/LessonList';
import { LessonPlayer } from '@/components/lessons/LessonPlayer';
import mockApi from '@/api/mockApi';
import { motion } from 'framer-motion';

function LessonsPage() {
 const [lessons, setLessons] = useState<Lesson[]>([]);
 const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
 const fetchLessons = async () => {
 try {
 setLoading(true);
 const data = await mockApi.lessons.getAll();
 setLessons(data);
 } catch (err) {
 setError('Failed to load lessons');
 } finally {
 setLoading(false);
 }
 };

 fetchLessons();
 }, []);

 const handleLessonSelect = (lesson: Lesson) => {
 setSelectedLesson(lesson);
 };

 const handleLessonComplete = async () => {
 if (selectedLesson) {
 try {
 await mockApi.lessons.complete(selectedLesson.id, '1');
 const updatedLessons = await mockApi.lessons.getAll();
 setLessons(updatedLessons);
 setSelectedLesson(null);
 } catch (err) {
 setError('Failed to complete lesson');
 }
 }
 };

 if (loading) {
 return (
 <div className="flex justify-center items-center h-screen">
 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
 </div>
 );
 }

 if (error) {
 return (
 <div className="text-center text-red-500 py-8">
 {error}
 </div>
 );
 }

 return (
 <motion.div
 initial={{ opacity:0 }}
 animate={{ opacity:1 }}
 transition={{ duration:0.5 }}
 className="container mx-auto py-8"
 >
 <h1 className="text-3xl font-bold mb-8">Language Lessons</h1>

 {selectedLesson ? (
 <LessonPlayer
 lesson={selectedLesson}
 onComplete={handleLessonComplete}
 />
 ) : (
 <LessonList
 lessons={lessons}
 onLessonSelect={handleLessonSelect}
 />
 )}
 </motion.div>
 );
}

export default LessonsPage;