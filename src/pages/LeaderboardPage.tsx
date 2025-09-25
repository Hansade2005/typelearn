import { useState, useEffect } from 'react';
import { LeaderboardEntry, FriendEntry } from '@/types/leaderboard';
import { LeaderboardTable } from '@/components/leaderboard/LeaderboardTable';
import { FriendsList } from '@/components/leaderboard/FriendsList';
import mockApi from '@/api/mockApi';
import { motion } from 'framer-motion';

function LeaderboardPage() {
 const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
 const [friends, setFriends] = useState<FriendEntry[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
 const fetchData = async () => {
 try {
 setLoading(true);
 const [leaderboardData, friendsData] = await Promise.all([
 mockApi.leaderboard.getGlobal(),
 mockApi.leaderboard.getFriends('1')
 ]);
 setLeaderboard(leaderboardData);
 setFriends(friendsData);
 } catch (err) {
 setError('Failed to load leaderboard data');
 } finally {
 setLoading(false);
 }
 };

 fetchData();
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
 <h1 className="text-3xl font-bold mb-8">Leaderboard</h1>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2">
 <h2 className="text-xl font-semibold mb-4">Global Rankings</h2>
 <LeaderboardTable entries={leaderboard} />
 </div>

 <div>
 <FriendsList friends={friends} />
 </div>
 </div>
 </motion.div>
 );
}

export default LeaderboardPage;