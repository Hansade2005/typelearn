import { useState, useEffect } from 'react';
import { DailyStreak, StreakStats } from '@/types/streak';
import { StreakCalendar } from '@/components/streak/StreakCalendar';
import mockApi from '@/api/mockApi';
import { motion } from 'framer-motion';

function StreakPage() {
 const [streaks, setStreaks] = useState<DailyStreak[]>([]);
 const [stats, setStats] = useState<StreakStats>({ currentStreak:0, longestStreak:0, totalDays:0, lastActivity: new Date() });
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
 const fetchStreaks = async () => {
 try {
 setLoading(true);
 const [streaksData, statsData] = await Promise.all([
 mockApi.streaks.getAll('1'),
 mockApi.streaks.getStats('1')
 ]);
 setStreaks(streaksData);
 setStats(statsData);
 } catch (err) {
 setError('Failed to load streak data');
 } finally {
 setLoading(false);
 }
 };

 fetchStreaks();
 }, []);

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
 <h1 className="text-3xl font-bold mb-8">Daily Streak</h1>

 <StreakCalendar streaks={streaks} stats={stats} />
 </motion.div>
 );
}

export default StreakPage;