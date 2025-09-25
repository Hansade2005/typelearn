export interface Lesson {
 id: string;
 title: string;
 description: string;
 language: string;
 level: 'beginner' | 'intermediate' | 'advanced';
 type: 'fill-in-the-blank' | 'translation' | 'pronunciation';
 content: string;
 createdAt: Date;
 updatedAt: Date;
 isCompleted: boolean;
}

export interface LessonProgress {
 lessonId: string;
 userId: string;
 completedAt: Date;
 score: number;
 attempts: number;
}

export interface LessonError {
 message: string;
 code: string;
}