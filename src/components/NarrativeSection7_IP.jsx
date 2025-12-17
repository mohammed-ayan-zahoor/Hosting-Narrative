import { motion } from 'framer-motion';
import StorySection from './StorySection';
import { Search, Frown } from 'lucide-react';

const NarrativeSection7_IP = () => {
    return (
        <StorySection
            id="ip-problem"
            title="It lives on a number."
            className="bg-zinc-100 dark:bg-slate-900"
            visual={
                <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">

                    {/* Browser Window */}
                    <div className="w-full bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                        {/* Browser Bar */}
                        <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 flex items-center gap-4 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600" />
                                <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600" />
                            </div>
                            {/* The Ugly URL */}
                            <div className="flex-1 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-600 rounded px-3 py-1 text-sm font-mono text-slate-600 dark:text-slate-300 flex justify-between items-center">
                                <span>http://172.217.16.142</span>
                                <Search size={14} className="text-slate-400" />
                            </div>
                        </div>

                        {/* Website Content */}
                        <div className="h-48 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center">
                            <span className="text-xl font-bold text-slate-300 dark:text-slate-600">Your Website</span>
                        </div>
                    </div>

                    {/* The Confused User Bubble */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute -right-4 top-20 bg-rose-500 text-white p-4 rounded-tr-3xl rounded-bl-3xl rounded-tl-xl shadow-lg z-10 max-w-[200px]"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Frown size={20} />
                            <span className="font-bold text-sm">Wait...</span>
                        </div>
                        <p className="text-xs leading-relaxed">
                            "I have to type numbers? I can't remember this!"
                        </p>
                    </motion.div>

                </div>
            }
        >
            <p>
                Your website is live! But there's a problem.
            </p>
            <p>
                Computers find each other using <strong className="text-emerald-600 dark:text-emerald-400">IP Addresses</strong> (like 172.217.16.46).
            </p>
            <p>
                Humans are terrible at remembering long strings of numbers.
            </p>
        </StorySection>
    );
};

export default NarrativeSection7_IP;
