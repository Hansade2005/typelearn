import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface PronunciationExerciseProps {
 word: string;
 onComplete: () => void;
}

export function PronunciationExercise({
 word,
 onComplete
}: PronunciationExerciseProps) {
 const [isRecording, setIsRecording] = useState(false);
 const [audioUrl, setAudioUrl] = useState<string | null>(null);
 const mediaRecorderRef = useRef<MediaRecorder | null>(null);
 const audioChunksRef = useRef<Blob[]>([]);

 const startRecording = async () => {
 try {
 const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
 const mediaRecorder = new MediaRecorder(stream);
 mediaRecorderRef.current = mediaRecorder;
 audioChunksRef.current = [];

 mediaRecorder.ondataavailable = (event) => {
 audioChunksRef.current.push(event.data);
 };

 mediaRecorder.onstop = () => {
 const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
 const audioUrl = URL.createObjectURL(audioBlob);
 setAudioUrl(audioUrl);
 };

 mediaRecorder.start();
 setIsRecording(true);
 } catch (error) {
 console.error('Error accessing microphone:', error);
 }
 };

 const stopRecording = () => {
 if (mediaRecorderRef.current) {
 mediaRecorderRef.current.stop();
 mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
 setIsRecording(false);
 }
 };

 const handleSubmit = () => {
 onComplete();
 };

 return (
 <div className="space-y-4">
 <p className="text-lg">Pronounce: {word}</p>

 <div className="flex items-center space-x-4">
 <Button
 onClick={isRecording ? stopRecording : startRecording}
 variant={isRecording ? 'destructive' : 'default'}
 >
 {isRecording ? 'Stop Recording' : 'Start Recording'}
 </Button>
 <Button
 onClick={handleSubmit}
 disabled={!audioUrl}
 >
 Submit Pronunciation
 </Button>
 </div>

 {audioUrl && (
 <div className="mt-4">
 <p className="text-sm text-gray-500 mb-2">Your recording:</p>
 <audio controls src={audioUrl} className="w-full" />
 </div>
 )}
 </div>
 );
}