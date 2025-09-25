import { LeaderboardEntry } from '@/types/leaderboard';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

interface LeaderboardTableProps {
 entries: LeaderboardEntry[];
}

export function LeaderboardTable({ entries }: LeaderboardTableProps) {
 return (
 <div className="overflow-x-auto">
 <Table>
 <TableHeader>
 <TableRow>
 <TableHead className="w-[50px]">Rank</TableHead>
 <TableHead>User</TableHead>
 <TableHead>Points</TableHead>
 <TableHead>Last Activity</TableHead>
 </TableRow>
 </TableHeader>
 <TableBody>
 {entries.map((entry, index) => (
 <motion.tr
 key={entry.userId}
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ delay: index *0.05 }}
 >
 <TableCell className="font-medium">
 {entry.rank}
 </TableCell>
 <TableCell>
 <div className="flex items-center space-x-3">
 <Avatar className="h-8 w-8">
 <AvatarImage src={entry.avatarUrl} />
 <AvatarFallback>{entry.username.charAt(0)}</AvatarFallback>
 </Avatar>
 <span>{entry.username}</span>
 </div>
 </TableCell>
 <TableCell className="font-medium">{entry.points}</TableCell>
 <TableCell>
 {entry.lastActivity.toLocaleDateString()}
 </TableCell>
 </motion.tr>
 ))}
 </TableBody>
 </Table>
 </div>
 );
}