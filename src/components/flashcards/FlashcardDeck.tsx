import { useState, useEffect } from 'react';
import { VocabularyCard } from '@/types/vocabulary';
import { Flashcard } from './Flashcard';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface FlashcardDeckProps {
  cards: (VocabularyCard & { isFavorite?: boolean })[];
  onReviewComplete: (card: VocabularyCard, ease: number) => void;
  onMarkFavorite: (id: string) => void;
}

export function FlashcardDeck({ cards, onReviewComplete, onMarkFavorite }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleReview = (ease: number) => {
    onReviewComplete(currentCard, ease);
    handleNext();
  };

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentCard.id}
          initial={{ x: direction * 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Flashcard
            card={currentCard}
            onReview={handleReview}
            onMarkFavorite={onMarkFavorite}
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between">
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          variant="outline"
        >
          Previous
        </Button>
        <span className="text-gray-500">
          {currentIndex + 1} of {cards.length}
        </span>
        <Button
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
}