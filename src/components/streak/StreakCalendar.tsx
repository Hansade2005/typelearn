import { useState, useEffect } from 'react';
import { DailyStreak, StreakStats } from '@/types/streak';
import { DayPicker } from 'react-day-picker';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface StreakCalendarProps {
 streaks: DailyStreak[];
 stats: StreakStats;
}

export function StreakCalendar({ streaks, stats }: StreakCalendarProps) {
 const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

 const modifiers = {
 completed: streaks.filter(s => s.isCompleted).map(s => s.date),
 incomplete: streaks.filter(s => !s.isCompleted).map(s => s.date)
 };

 const modifiersStyles = {
 completed: {
 backgroundColor: '#4f46e5',
 color: 'white'
 },
 incomplete: {
 backgroundColor: '#f3f4f6',
 color: '#6b7280'
 }
 };

 return (
 <Card className="w-full max-w-3xl mx-auto">
 <CardHeader>
 <CardTitle>Daily Streak</CardTitle>
 </CardHeader>
 <CardContent className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ delay:0.1 }}
 className="bg-indigo-50 p-4 rounded-lg"
 >
 <h3 className="text-sm font-medium text-indigo-700">Current Streak</h3>
 <p className="mt-1 text-3xl font-semibold text-indigo-900">{stats.currentStreak}</p>
 </motion.div>

 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ delay:0.2 }}
 className="bg-indigo-50 p-4 rounded-lg"
 >
 <h3 className="text-sm font-medium text-indigo-700">Longest Streak</h3>
 <p className="mt-1 text-3xl font-semibold text-indigo-900">{stats.longestStreak}</p>
 </motion.div>

 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ delay:0.3 }}
 className="bg-indigo-50 p-4 rounded-lg"
 >
 <h3 className="text-sm font-medium text-indigo-700">Total Days</h3>
 <p className="mt-1 text-3xl font-semibold text-indigo-900">{stats.totalDays}</p>
 </motion.div>
 </div>

 <DayPicker
 mode="single"
 selected={selectedDate}
 onSelect={setSelectedDate}
 modifiers={modifiers}
 modifiersStyles={modifiersStyles}
 className="mx-auto"
 />
 </CardContent>
 </Card>
 );
}