import { Lesson, LessonProgress } from '@/types/lesson';
import { VocabularyCard } from '@/types/vocabulary';
import { DailyStreak, StreakStats } from '@/types/streak';
import { LeaderboardEntry, FriendEntry } from '@/types/leaderboard';

// Mock lesson data
const mockLessons: Lesson[] = [
 {
 id: '1',
 title: 'Greetings',
 description: 'Learn basic greetings in Spanish',
 language: 'Spanish',
 level: 'beginner',
 type: 'translation',
 content: 'Hello: Hola\nGoodbye: Adiós\nPlease: Por favor\nThank you: Gracias',
 createdAt: new Date('2023-01-15'),
 updatedAt: new Date('2023-01-15'),
 isCompleted: false
 },
 {
 id: '2',
 title: 'Numbers',
 description: 'Learn numbers1-10 in French',
 language: 'French',
 level: 'beginner',
 type: 'fill-in-the-blank',
 content: 'One: ____\nTwo: ____\nThree: ____\nFour: ____\nFive: ____',
 createdAt: new Date('2023-01-20'),
 updatedAt: new Date('2023-01-20'),
 isCompleted: false
 },
 {
 id: '3',
 title: 'Food',
 description: 'Learn common food words in Italian',
 language: 'Italian',
 level: 'intermediate',
 type: 'pronunciation',
 content: 'Apple: ____\nBread: ____\nCheese: ____\nWater: ____\nWine: ____',
 createdAt: new Date('2023-02-05'),
 updatedAt: new Date('2023-02-05'),
 isCompleted: false
 }
];

// Mock vocabulary data
const mockVocabulary: VocabularyCard[] = [
 {
 id: '1',
 word: 'Hello',
 translation: 'Hola',
 language: 'Spanish',
 level: 'beginner',
 createdAt: new Date('2023-01-15'),
 lastReviewed: new Date('2023-01-15'),
 nextReview: new Date(Date.now() +86400000), //1 day later
 reviewCount:0,
 easeFactor:2.5
 },
 {
 id: '2',
 word: 'Goodbye',
 translation: 'Adiós',
 language: 'Spanish',
 level: 'beginner',
 createdAt: new Date('2023-01-15'),
 lastReviewed: new Date('2023-01-15'),
 nextReview: new Date(Date.now() +86400000), //1 day later
 reviewCount:0,
 easeFactor:2.5
 },
 {
 id: '3',
 word: 'Thank you',
 translation: 'Gracias',
 language: 'Spanish',
 level: 'beginner',
 createdAt: new Date('2023-01-15'),
 lastReviewed: new Date('2023-01-15'),
 nextReview: new Date(Date.now() +86400000), //1 day later
 reviewCount:0,
 easeFactor:2.5
 },
 {
 id: '4',
 word: 'One',
 translation: 'Uno',
 language: 'Spanish',
 level: 'beginner',
 createdAt: new Date('2023-01-20'),
 lastReviewed: new Date('2023-01-20'),
 nextReview: new Date(Date.now() +86400000), //1 day later
 reviewCount:0,
 easeFactor:2.5
 },
 {
 id: '5',
 word: 'Two',
 translation: 'Dos',
 language: 'Spanish',
 level: 'beginner',
 createdAt: new Date('2023-01-20'),
 lastReviewed: new Date('2023-01-20'),
 nextReview: new Date(Date.now() +86400000), //1 day later
 reviewCount:0,
 easeFactor:2.5
 }
];

// Mock streak data
const mockStreaks: DailyStreak[] = [
 {
 id: '1',
 userId: '1',
 date: new Date('2023-10-10'),
 isCompleted: true,
 createdAt: new Date('2023-10-10')
 },
 {
 id: '2',
 userId: '1',
 date: new Date('2023-10-11'),
 isCompleted: true,
 createdAt: new Date('2023-10-11')
 },
 {
 id: '3',
 userId: '1',
 date: new Date('2023-10-12'),
 isCompleted: true,
 createdAt: new Date('2023-10-12')
 },
 {
 id: '4',
 userId: '1',
 date: new Date('2023-10-13'),
 isCompleted: false,
 createdAt: new Date('2023-10-13')
 },
 {
 id: '5',
 userId: '1',
 date: new Date('2023-10-14'),
 isCompleted: false,
 createdAt: new Date('2023-10-14')
 }
];

// Mock leaderboard data
const mockLeaderboard: LeaderboardEntry[] = [
 {
 userId: '1',
 username: 'LanguageMaster',
 points:1500,
 rank:1,
 avatarUrl: 'https://i.pravatar.cc/150?img=1',
 lastActivity: new Date('2023-10-20')
 },
 {
 userId: '2',
 username: 'WordWiz',
 points:1200,
 rank:2,
 avatarUrl: 'https://i.pravatar.cc/150?img=2',
 lastActivity: new Date('2023-10-19')
 },
 {
 userId: '3',
 username: 'GrammarGuru',
 points:1000,
 rank:3,
 avatarUrl: 'https://i.pravatar.cc/150?img=3',
 lastActivity: new Date('2023-10-18')
 },
 {
 userId: '4',
 username: 'VocabVirtuoso',
 points:800,
 rank:4,
 avatarUrl: 'https://i.pravatar.cc/150?img=4',
 lastActivity: new Date('2023-10-17')
 },
 {
 userId: '5',
 username: 'PhrasePro',
 points:600,
 rank:5,
 avatarUrl: 'https://i.pravatar.cc/150?img=5',
 lastActivity: new Date('2023-10-16')
 }
];

// Mock friends data
const mockFriends: FriendEntry[] = [
 {
 userId: '2',
 username: 'WordWiz',
 avatarUrl: 'https://i.pravatar.cc/150?img=2',
 isOnline: true,
 lastActivity: new Date('2023-10-20')
 },
 {
 userId: '3',
 username: 'GrammarGuru',
 avatarUrl: 'https://i.pravatar.cc/150?img=3',
 isOnline: false,
 lastActivity: new Date('2023-10-19')
 },
 {
 userId: '4',
 username: 'VocabVirtuoso',
 avatarUrl: 'https://i.pravatar.cc/150?img=4',
 isOnline: true,
 lastActivity: new Date('2023-10-18')
 }
];

// Mock API functions
const mockApi = {
 lessons: {
 getAll: async (): Promise<Lesson[]> => {
 await new Promise(resolve => setTimeout(resolve,800));
 return mockLessons;
 },
 getById: async (id: string): Promise<Lesson> => {
 await new Promise(resolve => setTimeout(resolve,500));
 const lesson = mockLessons.find(l => l.id === id);
 if (!lesson) throw new Error('Lesson not found');
 return lesson;
 },
 complete: async (lessonId: string, userId: string): Promise<LessonProgress> => {
 await new Promise(resolve => setTimeout(resolve,600));
 const lesson = mockLessons.find(l => l.id === lessonId);
 if (!lesson) throw new Error('Lesson not found');

 lesson.isCompleted = true;

 return {
 lessonId,
 userId,
 completedAt: new Date(),
 score:100,
 attempts:1
 };
 }
 },
 flashcards: {
 getAll: async (): Promise<VocabularyCard[]> => {
 await new Promise(resolve => setTimeout(resolve,800));
 return mockVocabulary;
 },
 review: async (cardId: string, ease: number): Promise<VocabularyCard> => {
 await new Promise(resolve => setTimeout(resolve,500));
 const card = mockVocabulary.find(c => c.id === cardId);
 if (!card) throw new Error('Card not found');

 // Update card with review information
 card.reviewCount +=1;
 card.lastReviewed = new Date();
 card.easeFactor = Math.max(1.3, card.easeFactor +0.1 - (5 - ease) *0.08);
 card.nextReview = new Date(Date.now() + card.easeFactor *86400000); // Convert days to milliseconds

 return card;
 }
 },
 streaks: {
 getAll: async (userId: string): Promise<DailyStreak[]> => {
 await new Promise(resolve => setTimeout(resolve,800));
 return mockStreaks.filter(s => s.userId === userId);
 },
 getStats: async (userId: string): Promise<StreakStats> => {
 await new Promise(resolve => setTimeout(resolve,500));
 const userStreaks = mockStreaks.filter(s => s.userId === userId);

 // Calculate current streak
 let currentStreak =0;
 let date = new Date();
 date.setHours(0,0,0,0);

 while (true) {
 const streak = userStreaks.find(s => {
 const streakDate = new Date(s.date);
 streakDate.setHours(0,0,0,0);
 return streakDate.getTime() === date.getTime() && s.isCompleted;
 });

 if (streak) {
 currentStreak++;
 date.setDate(date.getDate() -1);
 } else {
 break;
 }
 }

 // Calculate longest streak
 let longestStreak =0;
 let tempStreak =0;
 let lastDate = new Date(0);

 userStreaks.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

 for (const streak of userStreaks) {
 const streakDate = new Date(streak.date);
 streakDate.setHours(0,0,0,0);

 if (streak.isCompleted) {
 if (streakDate.getTime() === lastDate.getTime() +86400000) {
 tempStreak++;
 } else {
 tempStreak =1;
 }

 longestStreak = Math.max(longestStreak, tempStreak);
 lastDate = streakDate;
 }
 }

 // Calculate total days
 const totalDays = userStreaks.filter(s => s.isCompleted).length;

 // Get last activity date
 const lastActivity = userStreaks.reduce((latest, streak) => {
 const streakDate = new Date(streak.date);
 return streakDate > latest ? streakDate : latest;
 }, new Date(0));

 return {
 currentStreak,
 longestStreak,
 totalDays,
 lastActivity
 };
 },
 complete: async (userId: string, date: Date): Promise<DailyStreak> => {
 await new Promise(resolve => setTimeout(resolve,600));
 const streakDate = new Date(date);
 streakDate.setHours(0,0,0,0);

 let streak = mockStreaks.find(s => {
 const sDate = new Date(s.date);
 sDate.setHours(0,0,0,0);
 return s.userId === userId && sDate.getTime() === streakDate.getTime();
 });

 if (!streak) {
 streak = {
 id: (mockStreaks.length +1).toString(),
 userId,
 date: streakDate,
 isCompleted: true,
 createdAt: new Date()
 };
 mockStreaks.push(streak);
 } else {
 streak.isCompleted = true;
 }

 return streak;
 }
 },
 leaderboard: {
 getGlobal: async (): Promise<LeaderboardEntry[]> => {
 await new Promise(resolve => setTimeout(resolve,800));
 return mockLeaderboard;
 },
 getFriends: async (userId: string): Promise<FriendEntry[]> => {
 await new Promise(resolve => setTimeout(resolve,600));
 return mockFriends;
 }
 }
};

export default mockApi;