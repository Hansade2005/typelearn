export interface Quiz {
  id: string;
  title: string;
  description: string;
  language: string;
  questions: QuizQuestion[];
  duration: number;
  maxScore: number;
  createdAt: Date;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: number;
}

export interface QuizResult {
  id: string;
  quizId: string;
  userId: string;
  score: number;
  maxScore: number;
  percentage: number;
  timeTaken: number;
  completedAt: Date;
 answers: QuizAnswer[];
}

export interface QuizAnswer {
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
  timeTaken: number;
}