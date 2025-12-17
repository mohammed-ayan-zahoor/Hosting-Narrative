import { motion } from 'framer-motion';
import { useState } from 'react';
import StorySection from './StorySection';
import { Github, ArrowUp, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NarrativeSection6_GitHub = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Beam animation
    const [isPushed, setIsPushed] = useState(false);

    const handlePush = () => {
        setIsPushed(true);
        setTimeout(() => setIsPushed(false), 3000); // Reset after animation
    };

    return (
        <StorySection
            id="moving-code"
            title={t.section6.title}
            className="bg-white dark:bg-slate-950"
            visual={
                <div className="relative w-full h-[500px] flex items-center justify-center gap-10">
                    {/* Laptop Left */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-16 bg-slate-800 rounded-md border-b-4 border-slate-700 flex items-center justify-center">
                            <span className="text-xs text-white">Your Laptop</span>
                        </div>
                    </div>

                    {/* The Beam Path */}
                    <div className="relative w-48 h-2 bg-slate-200 dark:bg-slate-700 rounded overflow-hidden flex items-center">
                        {isPushed && (
                            <motion.div
                                className="absolute left-0 top-0 bottom-0 w-8 bg-blue-500 blur-sm"
                                initial={{ x: -32 }}
                                animate={{ x: 200 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        )}
                        {/* Connecting Line Visual */}
                        <div className="w-full border-t border-dashed border-slate-400"></div>
                    </div>


                    {/* GitHub Center */}
                    <div className="flex flex-col items-center relative z-10">
                        <motion.div
                            className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-xl"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Github size={48} />
                        </motion.div>
                        <span className="font-bold mt-2 text-slate-800 dark:text-slate-200">GitHub</span>
                    </div>

                    {/* The Beam Path 2 */}
                    <div className="relative w-48 h-2 bg-slate-200 dark:bg-slate-700 rounded overflow-hidden flex items-center">
                        {isPushed && (
                            <motion.div
                                className="absolute left-0 top-0 bottom-0 w-8 bg-purple-500 blur-sm"
                                initial={{ x: -32 }}
                                animate={{ x: 200 }}
                                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                            />
                        )}
                        <div className="w-full border-t border-dashed border-slate-400"></div>
                    </div>

                    {/* Server Right */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-32 bg-slate-800 rounded-md border-b-4 border-slate-700 flex flex-col items-center justify-evenly p-2">
                            <div className="w-full h-1 bg-green-500/20 rounded"></div>
                            <div className="w-full h-1 bg-green-500/20 rounded"></div>
                            <div className="w-full h-1 bg-green-500/20 rounded"></div>
                            <span className="text-[10px] text-white">Server</span>
                        </div>
                    </div>
                </div>
            }
        >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section6.p1}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section6.p2_start} <strong className="font-semibold text-slate-900 dark:text-white">{t.section6.p2_strong}</strong>{t.section6.p2_end}
            </p>

            <ul className="space-y-4 my-6">
                <li className="flex items-start gap-3">
                    <div className="bg-zinc-100 dark:bg-slate-800 p-1 rounded mt-1"><ArrowUp size={16} className="text-slate-600 dark:text-slate-200" /></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300"><strong>{t.section6.list1_strong}</strong> {t.section6.list1_text}</span>
                </li>
                <li className="flex items-start gap-3">
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-1 rounded mt-1"><ArrowDown size={16} className="text-indigo-600 dark:text-indigo-400" /></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300"><strong>{t.section6.list2_strong}</strong> {t.section6.list2_text}</span>
                </li>
            </ul>

            <button
                onClick={handlePush}
                disabled={isPushed}
                className="mt-4 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg shadow hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
                <Github size={18} />
                {isPushed ? "Deploying..." : "Push to Deploy"}
            </button>
        </StorySection >
    );

    const handleFileDrop = (fileName, info) => {
        // Check if dropped roughly over the layout 
        if (laptopRef.current && info.offset.x < 100 && info.offset.x > -100 && info.offset.y < 100) {
            // Simulate drop
            setIsDropped(true);
            setTimeout(() => setIsDropped(false), 1000);
        }
    };
};

export default NarrativeSection6_GitHub;
