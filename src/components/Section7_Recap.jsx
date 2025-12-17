import { motion } from 'framer-motion';
import { ArrowUp, Check } from 'lucide-react';
import StorySection from './StorySection';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Section7_Recap = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const steps = [
        t.recap.step1,
        t.recap.step2,
        t.recap.step3,
        t.recap.step4,
        t.recap.step5,
        t.recap.step6
    ];

    return (
        <StorySection
            id="recap-complete"
            title={t.recap.title}
            className="bg-indigo-50 dark:bg-slate-900"
            visual={
                <div className="relative w-full h-full flex flex-col items-center justify-center py-20">
                    {/* Timeline Visual - Simplified for Recap */}
                    <div className="w-[2px] h-full bg-slate-200 dark:bg-slate-800 absolute left-1/2 -translate-x-1/2" />

                    {t.recap.timeline.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative z-10 bg-white dark:bg-slate-800 border-2 border-indigo-500 px-4 py-2 rounded-full shadow-lg mb-8 last:mb-0 text-sm font-bold text-slate-700 dark:text-slate-200"
                        >
                            {step}
                        </motion.div>
                    ))}
                </div>
            }
        >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.recap.congrats}
            </p>
            <ul className="space-y-3 mb-8 text-slate-600 dark:text-slate-300">
                {steps.map((step, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="font-medium">{step}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-12">
                <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-indigo-500/30 transition-all hover:scale-105"
                >
                    {t.recap.scroll_top}
                    <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </StorySection>
    );
};

export default Section7_Recap;
