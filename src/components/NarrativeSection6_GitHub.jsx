
import { motion } from 'framer-motion';
import { useState } from 'react';
import StorySection from './StorySection';
import { Github, Cloud, ArrowDown, UploadCloud } from 'lucide-react';

const NarrativeSection6_GitHub = () => {
    const [isPushed, setIsPushed] = useState(false);

    return (
        <StorySection
            id="shipping-code"
            title="Shipping the code."
            className="bg-white dark:bg-slate-950"
            reverse={true}
            visual={
                <div className="relative w-full h-[500px] flex items-center justify-center">

                    {/* The Process Container */}
                    <div className="relative w-full max-w-sm flex flex-col items-center gap-12">

                        {/* 1. You (Local) */}
                        <div className="flex flex-col items-center relative z-20">
                            <div className="bg-slate-900 text-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                                <Github size={32} />
                                <div className="text-left">
                                    <div className="font-bold text-sm">git push origin main</div>
                                    <div className="text-[10px] text-slate-400">hash: 8f2a9c</div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Push Button */}
                        {!isPushed ? (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsPushed(true)}
                                className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-2 z-30 animate-bounce-slight"
                            >
                                <UploadCloud size={24} />
                                PUSH TO DEPLOY
                            </motion.button>
                        ) : (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="bg-emerald-500 text-white px-6 py-2 rounded-full font-bold shadow-lg z-30"
                            >
                                Deployment Started!
                            </motion.div>
                        )}

                        {/* 2. The Cloud (Remote) */}
                        <div className="flex flex-col items-center relative z-20">
                            <div className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-6 rounded-full shadow-inner border border-indigo-100 dark:border-indigo-800">
                                <Cloud size={48} />
                            </div>
                            <span className="text-xs font-bold mt-2 text-indigo-400 uppercase tracking-widest">The Cloud Warehouse</span>
                        </div>

                        {/* The Transport Beam (Only animate if pushed) */}
                        {isPushed && (
                            <div className="absolute inset-0 flex justify-center pointer-events-none">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={{ y: 250, opacity: [0, 1, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                            ease: "linear"
                                        }}
                                        className="absolute top-10"
                                    >
                                        <div className="w-3 h-3 bg-indigo-500 dark:bg-indigo-400 rounded-sm rotate-45 shadow-[0_0_10px_#6366f1]" />
                                    </motion.div>
                                ))}
                                <motion.div
                                    className="absolute w-1 h-full bg-indigo-100 dark:bg-indigo-900/20 -z-10"
                                    initial={{ height: 0 }}
                                    animate={{ height: '100%' }}
                                />
                            </div>
                        )}

                    </div>
                </div>
            }
        >
            <p>
                Now you're logged in. But the server is empty. Your code is still on your laptop.
            </p>
            <p>
                The best way to move it? <strong className="text-zinc-900 dark:text-white">GitHub</strong>.
            </p>
            <ul className="space-y-4 my-6">
                <li className="flex items-start gap-3">
                    <div className="bg-zinc-100 dark:bg-slate-800 p-1 rounded mt-1"><Cloud size={16} className="dark:text-slate-200" /></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300"><strong>Step 1:</strong> Push code to GitHub (The Warehouse).</span>
                </li>
                <li className="flex items-start gap-3">
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-1 rounded mt-1"><ArrowDown size={16} className="text-indigo-600 dark:text-indigo-400" /></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300"><strong>Step 2:</strong> Tell your server to "Clone" (download) it.</span>
                </li>
            </ul>
            <p>
                Now your server has an exact copy of your website. It is ready to show the world.
            </p>
        </StorySection >
    );
};

export default NarrativeSection6_GitHub;
