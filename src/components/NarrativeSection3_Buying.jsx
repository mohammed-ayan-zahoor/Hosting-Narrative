import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import StorySection from './StorySection';
import { CreditCard, Server, ArrowRight, Check } from 'lucide-react';

const NarrativeSection3_Buying = () => {
    const [purchased, setPurchased] = useState(false);
    const x = useMotionValue(0);
    const xInput = [0, 200]; // Slider width
    const opacity = useTransform(x, xInput, [1, 0]);
    const bg = useTransform(x, xInput, ["#eef2ff", "#dcfce7"]);

    const handleDragEnd = () => {
        if (x.get() > 150) {
            setPurchased(true);
        } else {
            // Snap back happens automatically via layout animation usually, 
            // but we rely on dragSnapToOrigin/constraints here or re-render
        }
    };

    return (
        <StorySection
            id="buying-hosting"
            title="So, you rent a computer."
            className="bg-white dark:bg-slate-950"
            visual={

                <div className="relative w-full h-[400px] flex items-center justify-center">
                    {/* Background Blob */}
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-10 left-10 w-60 h-60 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl -z-10 opacity-50"
                    />

                    {/* The Interactive Card */}
                    <motion.div
                        className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 w-72 relative overflow-hidden"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                    >
                        {!purchased ? (
                            <>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-indigo-600 p-2 rounded-lg text-white">
                                            <Server size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 dark:text-slate-200">Pro VPS</div>
                                            <div className="text-xs text-slate-500">2 Year Plan</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-lg text-slate-800 dark:text-slate-200">$143</div>
                                        <div className="text-[10px] text-slate-500">Total</div>
                                    </div>
                                </div>

                                {/* Slider Track */}
                                <div className="relative h-14 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center px-1 overflow-hidden">
                                    <motion.div
                                        className="text-center w-full text-xs font-bold text-slate-400 uppercase tracking-widest absolute pointers-events-none"
                                        style={{ opacity }}
                                    >
                                        Swipe to Pay
                                    </motion.div>

                                    {/* Draggable Button */}
                                    <motion.div
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 200 }}
                                        dragElastic={0.1}
                                        style={{ x, background: x.get() > 100 ? '#10b981' : '#4f46e5' }}
                                        onDragEnd={handleDragEnd}
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white cursor-grab active:cursor-grabbing z-10 shadow-md"
                                    >
                                        <ArrowRight size={20} />
                                    </motion.div>
                                </div>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-8 gap-4"
                            >
                                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">
                                    <Check size={32} />
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-lg text-slate-800 dark:text-slate-200">Purchased!</div>
                                    <div className="text-xs text-slate-500 mt-1">Order #882910 Confirmed</div>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 p-3 rounded-lg flex items-center gap-3 mt-4">
                                    <Server size={16} className="text-indigo-500" />
                                    <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
                                        ip: 172.217.16.46
                                        <br />
                                        pass: ********
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            }
        >
            <p>
                So, you go shopping. Not for clothes, but for a <strong className="text-indigo-600">powerful remote computer</strong>.
            </p>
            <p>
                You visit a hosting provider (like Hostinger) and essentially say:
            </p>
            <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-r-lg text-slate-700 dark:text-slate-300 italic my-4">
                "Here is money. Please let me rent a slice of your super-computer for 2 years."
            </blockquote>
            <p>
                This is what <span className="font-bold">Hosting</span> is. It's renting a computer that never shuts down, lives in a secure building, and has blazing fast internet.
            </p>
        </StorySection >
    );
};

export default NarrativeSection3_Buying;
