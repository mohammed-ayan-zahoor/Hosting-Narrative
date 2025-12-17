import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import StorySection from './StorySection';
import { Server, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NarrativeSection3_Buying = () => {
    const [isPaid, setIsPaid] = useState(false);
    const { language } = useLanguage();
    const t = translations[language];

    // Drag logic for swipe to pay
    const x = useMotionValue(0);
    // Move all useTransform calls here, unconditionally
    const textOpacity = useTransform(x, [0, 100], [1, 0]);
    const buttonBackground = useTransform(x, [0, 200], ['#4f46e5', '#10b981']);

    const handleDragEnd = (_, info) => {
        if (info.offset.x > 150) {
            setIsPaid(true);
        }
    };

    return (
        <StorySection
            id="buying-hosting"
            title={t.section3.title}
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
                        {!isPaid ? (
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
                                <div className="relative h-14 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center px-1 overflow-hidden" style={{ backgroundColor: '#f1f5f9' }}>
                                    {/* Note: simplistic inline style for track background fallback */}
                                    <motion.div
                                        className="text-center w-full text-xs font-bold text-slate-400 uppercase tracking-widest absolute pointers-events-none"
                                        style={{ opacity: textOpacity }}
                                    >
                                        Swipe to Pay
                                    </motion.div>

                                    {/* Draggable Button */}
                                    <motion.div
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 200 }}
                                        dragElastic={0.1}
                                        style={{ x, background: buttonBackground }}
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
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section3.p1_start} <strong className="font-semibold text-slate-900 dark:text-white">{t.section3.p1_strong}</strong>{t.section3.p1_end}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section3.p2}
            </p>

            <blockquote className="border-l-4 border-emerald-500 pl-4 py-3 my-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-r-lg">
                <p className="text-slate-700 dark:text-slate-200 italic font-medium">
                    {t.section3.quote}
                </p>
            </blockquote>

            <div className="mt-8 bg-slate-100 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mb-2 uppercase tracking-wider">Definition</p>
                <p className="text-lg text-slate-800 dark:text-slate-200">
                    {t.section3.p3_start} <strong className="text-indigo-600 dark:text-indigo-400">{t.section3.p3_strong}</strong> {t.section3.p3_end}
                </p>
            </div>
        </StorySection>
    );
};

export default NarrativeSection3_Buying;
