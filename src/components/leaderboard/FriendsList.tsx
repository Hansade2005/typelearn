import { FriendEntry } from '@/types/leaderboard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface FriendsListProps {
 friends: FriendEntry[];
}

export function FriendsList({ friends }: FriendsListProps) {
 return (
 <Card>
 <CardHeader>
 <CardTitle>Friends</CardTitle>
 </CardHeader>
 <CardContent>
 <div className="space-y-4">
 {friends.map((friend, index) => (
 <motion.div
 key={friend.userId}
 initial={{ opacity:0, x: -20 }}
 animate={{ opacity:1, x:0 }}
 transition={{ delay: index *0.05 }}
 className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
 >
 <div className="flex items-center space-x-3">
 <Avatar className="h-10 w-10">
 <AvatarImage src={friend.avatarUrl} />
 <AvatarFallback>{friend.username.charAt(0)}</AvatarFallback>
 </Avatar>
 <div>
 <p className="font-medium">{friend.username}</p>
 <p className="text-sm text-gray-500">
 Last active: {friend.lastActivity.toLocaleDateString()}
 </p>
 </div>
 </div>
 <Badge variant={friend.isOnline ? 'default' : 'secondary'}>{
 friend.isOnline ? 'Online' : 'Offline'
 }</Badge>
 </motion.div>
 ))}
 </div>
 </CardContent>
 </Card>
 );
}