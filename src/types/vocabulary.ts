export interface VocabularyCard {
 id: string;
 word: string;
 translation: string;
 language: string;
 level: 'beginner' | 'intermediate' | 'advanced';
 createdAt: Date;
 lastReviewed: Date;
 nextReview: Date;
 reviewCount: number;
 easeFactor: number;
}

export interface FlashcardError {
 message: string;
 code: string;
}