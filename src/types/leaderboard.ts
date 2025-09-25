export interface LeaderboardEntry {
 userId: string;
 username: string;
 points: number;
 rank: number;
 avatarUrl?: string;
 lastActivity: Date;
}

export interface FriendEntry {
 userId: string;
 username: string;
 avatarUrl?: string;
 isOnline: boolean;
 lastActivity: Date;
}

export interface LeaderboardError {
 message: string;
 code: string;
}