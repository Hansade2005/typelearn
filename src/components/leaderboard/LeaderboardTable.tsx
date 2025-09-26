import { LeaderboardEntry } from '@/types/leaderboard';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal } from 'lucide-react';

interface LeaderboardTableProps {
 entries: LeaderboardEntry[];
}

export function LeaderboardTable({ entries }: LeaderboardTableProps) {
 const getMedalColor = (rank: number): string => {
 switch (rank) {
 case1: return 'gold';
 case2: return 'silver';
 case3: return 'bronze';
 default: return 'gray';
 }
 };

 return (
 <div className="border rounded-lg overflow-hidden">
 <Table>
 <TableHeader>
 <TableRow className="bg-indigo-50">
 <TableHead className="w-[50px]">Rank</TableHead>
 <TableHead>User</TableHead>
 <TableHead>Score</TableHead>
 <TableHead>Streak</TableHead>
 <TableHead>Last Active</TableHead>
 </TableRow>
 </TableHeader>
 <TableBody>
 {entries.map((entry, index) => (
 <TableRow key={entry.id} className={index %2 ===0 ? 'bg-gray-50' : ''}>
 <TableCell className="font-medium">
 {index <3 ? (
 <Medal className={`h-5 w-5 text-${getMedalColor(index +1)}`} />
 ) : (
 <span className="font-medium">{index +1}</span>
 )}
 </TableCell>
 <TableCell className="font-medium">
 <div className="flex items-center space-x-3">
 <Avatar className="h-8 w-8">
 <AvatarImage src={entry.avatarUrl} alt={entry.username} />
 <AvatarFallback>{entry.username.charAt(0)}</AvatarFallback>
 </Avatar>
 <span>{entry.username}</span>
 </div>
 </TableCell>
 <TableCell>
 <div className="flex items-center space-x-2">
 <Trophy className="h-4 w-4 text-yellow-500" />
 <span className="font-medium">{entry.score}</span>
 </div>
 </TableCell>
 <TableCell>
 <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
 {entry.streak} days
 </Badge>
 </TableCell>
 <TableCell className="text-gray-500">
 {new Date(entry.lastActive).toLocaleDateString()}
 </TableCell>
 </TableRow>
 ))}
 </TableBody>
 </Table>
 </div>
 );
}