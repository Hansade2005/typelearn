import { useState, useEffect } from 'react';
import { VocabularyCard } from '@/types/vocabulary';
import { FlashcardDeck } from '@/components/flashcards/FlashcardDeck';
import mockApi from '@/api/mockApi';
import { motion } from 'framer-motion';

function FlashcardsPage() {
 const [cards, setCards] = useState<VocabularyCard[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
 const fetchCards = async () => {
 try {
 setLoading(true);
 const data = await mockApi.flashcards.getAll();
 setCards(data);
 } catch (err) {
 setError('Failed to load flashcards');
 } finally {
 setLoading(false);
 }
 };

 fetchCards();
 }, []);

 const handleReviewComplete = async (card: VocabularyCard, ease: number) => {
 try {
 const updatedCard = await mockApi.flashcards.review(card.id, ease);
 setCards(prevCards =>
 prevCards.map(c => c.id === updatedCard.id ? updatedCard : c)
 );
 } catch (err) {
 setError('Failed to update flashcard');
 }
 };

 if (loading) {
 return (
 <div className="flex justify-center items-center h-screen">
 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
 </div>
 );
 }

 if (error) {
 return (
 <div className="text-center text-red-500 py-8">
 {error}
 </div>
 );
 }

 return (
 <motion.div
 initial={{ opacity:0 }}
 animate={{ opacity:1 }}
 transition={{ duration:0.5 }}
 className="container mx-auto py-8"
 >
 <h1 className="text-3xl font-bold mb-8">Flashcards</h1>

 {cards.length >0 ? (
 <FlashcardDeck
 cards={cards}
 onReviewComplete={handleReviewComplete}
 />
 ) : (
 <div className="text-center text-gray-500">No flashcards available</div>
 )}
 </motion.div>
 );
}

export default FlashcardsPage;