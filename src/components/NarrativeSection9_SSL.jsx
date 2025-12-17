
import { motion } from 'framer-motion';
import { useState } from 'react';
import StorySection from './StorySection';
import { Lock, Unlock, ShieldCheck, ShieldAlert } from 'lucide-react';

const NarrativeSection9_SSL = () => {
    const [isLocked, setIsLocked] = useState(false);

    return (
        <StorySection
            id="ssl-trust"
            title="The Trust (SSL)"
            className="bg-zinc-50 dark:bg-slate-950"
            visual={
                <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">

                    {/* Browser Bar */}
                    <motion.div
                        animate={{
                            borderColor: isLocked ? '#10b981' : '#f43f5e',
                            boxShadow: isLocked ? '0 0 20px rgba(16,185,129,0.2)' : '0 0 0px transparent'
                        }}
                        className="w-full bg-white dark:bg-slate-900 rounded-xl shadow-lg border-2 overflow-hidden mb-8 transition-colors duration-500"
                    >
                        <div className="bg-slate-50 dark:bg-slate-950 px-4 py-3 flex items-center gap-4 border-b border-slate-100 dark:border-slate-800">
                            {/* The Interactive Lock */}
                            <button
                                onClick={() => setIsLocked(!isLocked)}
                                className={`p-2 rounded-lg transition-colors duration-300 ${isLocked ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-500 hover:bg-rose-200'}`}
                            >
                                {isLocked ? <Lock size={16} /> : <Unlock size={16} />}
                            </button>

                            <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-3 py-1 text-sm font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                <span className={isLocked ? "text-emerald-500 font-bold" : "text-slate-400"}>https://</span>
                                <span>google.com</span>
                            </div>
                        </div>
                        <div className="h-40 flex items-center justify-center bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
                            {isLocked ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex flex-col items-center text-emerald-500"
                                >
                                    <ShieldCheck size={64} />
                                    <span className="font-bold mt-2">Connection Secure</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="flex flex-col items-center text-rose-400"
                                >
                                    <ShieldAlert size={64} />
                                    <span className="font-bold mt-2">Not Secure</span>
                                </motion.div>
                            )}

                            {/* Matrix Rain / Encryption visualization in background */}
                            {isLocked && (
                                <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-around">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <motion.div
                                            key={i}
                                            initial={{ y: -100 }}
                                            animate={{ y: 200 }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                            className="text-[10px] font-mono font-bold text-emerald-600 writing-vertical-lr"
                                        >
                                            101010101
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <p className="text-slate-400 italic text-sm">
                        <span className="font-bold text-emerald-500">Click the Lock</span> to encrypt the connection!
                    </p>

                </div>
            }
        >
            <p>
                One last problem. The internet is a dangerous place.
            </p>
            <p>
                Browsers warn users: <span className="text-rose-500 font-bold">"Not Secure"</span> if you don't have protection.
            </p>
            <p>
                You need an <strong className="text-emerald-600">SSL Certificate</strong>.
            </p>
            <p>
                It's like putting your website inside a digital armored car. It encrypts the data so nobody can steal it.
                Once you have it, you get the <span className="text-emerald-600 font-bold">Green Lock</span>.
            </p>
        </StorySection>
    );
};

export default NarrativeSection9_SSL;
