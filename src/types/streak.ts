export interface DailyStreak {
 id: string;
 userId: string;
 date: Date;
 isCompleted: boolean;
 createdAt: Date;
}

export interface StreakStats {
 currentStreak: number;
 longestStreak: number;
 totalDays: number;
 lastActivity: Date;
}

export interface StreakError {
 message: string;
 code: string;
}