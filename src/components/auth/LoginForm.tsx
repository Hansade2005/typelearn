import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

interface LoginFormProps {
 onSuccess: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const { signIn, loading, error } = useAuth();

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 await signIn(email, password);
 if (!error) onSuccess();
 };

 return (
 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg"
 >
 <div>
 <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
 </div>
 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
 <div className="rounded-md shadow-sm space-y-4">
 <div>
 <Label htmlFor="email-address">Email address</Label>
 <Input
 id="email-address"
 name="email"
 type="email"
 autoComplete="email"
 required
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
 />
 </div>
 <div>
 <Label htmlFor="password">Password</Label>
 <Input
 id="password"
 name="password"
 type="password"
 autoComplete="current-password"
 required
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
 />
 </div>
 </div>

 {error && (
 <div className="text-red-500 text-sm">{error.message}</div>
 )}

 <div>
 <Button
 type="submit"
 disabled={loading}
 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
 >
 {loading ? 'Signing in...' : 'Sign in'}
 </Button>
 </div>
 </form>
 </motion.div>
 );
}