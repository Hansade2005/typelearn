import { useState } from 'react';
import { Lesson } from '@/types/lesson';
import { motion } from 'framer-motion';

interface SkillTreeProps {
 lessons: Lesson[];
 onLessonSelect: (lesson: Lesson) => void;
}

export function SkillTree({ lessons, onLessonSelect }: SkillTreeProps) {
 const [hoveredLesson, setHoveredLesson] = useState<string | null>(null);

 // Organize lessons by level
 const levels = {
 beginner: lessons.filter(l => l.level === 'beginner'),
 intermediate: lessons.filter(l => l.level === 'intermediate'),
 advanced: lessons.filter(l => l.level === 'advanced')
 };

 return (
 <div className="relative w-full h-[600px] overflow-hidden">
 {/* Background */}
 <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50"></div>

 {/* Connecting lines */}
 <svg className="absolute inset-0 w-full h-full" width="0" height="0">
 <defs>
 <marker
 id="arrowhead"
 markerWidth="10"
 markerHeight="7"
 refX="10"
 refY="3.5"
 orient="auto"
 >
 <polygon points="00,103.5,07" fill="#a5b4fc" />
 </marker>
 </defs>

 {/* Beginner to Intermediate */}
 <line
 x1="25%"
 y1="30%"
 x2="50%"
 y2="50%"
 stroke="#a5b4fc"
 strokeWidth="2"
 markerEnd="url(#arrowhead)"
 />

 {/* Intermediate to Advanced */}
 <line
 x1="50%"
 y1="50%"
 x2="75%"
 y2="70%"
 stroke="#a5b4fc"
 strokeWidth="2"
 markerEnd="url(#arrowhead)"
 />
 </svg>

 {/* Beginner Level */}
 <motion.div
 className="absolute top-[30%] left-[25%] w-48 h-48 flex flex-col items-center justify-center"
 whileHover={{ scale:1.05 }}
 >
 <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
 <span className="text-xl font-bold text-indigo-600">Beginner</span>
 </div>
 <div className="mt-4 space-y-2">
 {levels.beginner.map((lesson) => (
 <motion.div
 key={lesson.id}
 className={`p-2 rounded-lg cursor-pointer ${lesson.isCompleted ? 'bg-green-100' : 'bg-white'} shadow`}
 onClick={() => onLessonSelect(lesson)}
 onMouseEnter={() => setHoveredLesson(lesson.id)}
 onMouseLeave={() => setHoveredLesson(null)}
 whileHover={{ scale:1.05 }}
 >
 <span className="text-sm font-medium">{lesson.title}</span>
 </motion.div>
 ))}
 </div>
 </motion.div>

 {/* Intermediate Level */}
 <motion.div
 className="absolute top-[50%] left-[50%] w-48 h-48 flex flex-col items-center justify-center"
 whileHover={{ scale:1.05 }}
 >
 <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
 <span className="text-xl font-bold text-indigo-600">Intermediate</span>
 </div>
 <div className="mt-4 space-y-2">
 {levels.intermediate.map((lesson) => (
 <motion.div
 key={lesson.id}
 className={`p-2 rounded-lg cursor-pointer ${lesson.isCompleted ? 'bg-green-100' : 'bg-white'} shadow`}
 onClick={() => onLessonSelect(lesson)}
 onMouseEnter={() => setHoveredLesson(lesson.id)}
 onMouseLeave={() => setHoveredLesson(null)}
 whileHover={{ scale:1.05 }}
 >
 <span className="text-sm font-medium">{lesson.title}</span>
 </motion.div>
 ))}
 </div>
 </motion.div>

 {/* Advanced Level */}
 <motion.div
 className="absolute top-[70%] left-[75%] w-48 h-48 flex flex-col items-center justify-center"
 whileHover={{ scale:1.05 }}
 >
 <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
 <span className="text-xl font-bold text-indigo-600">Advanced</span>
 </div>
 <div className="mt-4 space-y-2">
 {levels.advanced.map((lesson) => (
 <motion.div
 key={lesson.id}
 className={`p-2 rounded-lg cursor-pointer ${lesson.isCompleted ? 'bg-green-100' : 'bg-white'} shadow`}
 onClick={() => onLessonSelect(lesson)}
 onMouseEnter={() => setHoveredLesson(lesson.id)}
 onMouseLeave={() => setHoveredLesson(null)}
 whileHover={{ scale:1.05 }}
 >
 <span className="text-sm font-medium">{lesson.title}</span>
 </motion.div>
 ))}
 </div>
 </motion.div>

 {/* Lesson tooltip */}
 {hoveredLesson && (
 <motion.div
 initial={{ opacity:0, scale:0.9 }}
 animate={{ opacity:1, scale:1 }}
 className="absolute z-10 bg-white p-4 rounded-lg shadow-xl w-64"
 style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
 >
 {lessons.find(l => l.id === hoveredLesson) && (
 <div>
 <h3 className="font-bold text-lg mb-2">{
 lessons.find(l => l.id === hoveredLesson)!.title
 }</h3>
 <p className="text-sm text-gray-600 mb-2">{
 lessons.find(l => l.id === hoveredLesson)!.description
 }</p>
 <div className="flex justify-between text-xs text-gray-500">
 <span>Level: {lessons.find(l => l.id === hoveredLesson)!.level}</span>
 <span>Type: {lessons.find(l => l.id === hoveredLesson)!.type}</span>
 </div>
 </div>
 )}
 </motion.div>
 )}
 </div>
 );
}