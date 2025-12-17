
import { motion } from 'framer-motion';
import StorySection from './StorySection';
import { Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NarrativeSection4_ServerFarm = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <StorySection
            id="server-farm"
            title={t.section4.title}
            className="bg-slate-50 dark:bg-slate-900"
            visual={
                <div className="relative w-full h-[400px] bg-slate-900 rounded-lg shadow-2xl overflow-hidden flex flex-col items-center justify-center border border-slate-800">
                    {/* Perspective Grid Floor */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.5)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] opacity-30 pointer-events-none origin-bottom"></div>

                    <div className="flex gap-4 z-10">
                        {[0, 1, 2].map((col) => (
                            <div key={col} className="flex flex-col gap-2">
                                {[0, 1, 2, 3].map((row) => (
                                    <motion.div
                                        key={row}
                                        initial={{ opacity: 0.5 }}
                                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                                        transition={{ duration: 2, delay: (col + row) * 0.2, repeat: Infinity }}
                                        className="w-16 h-8 bg-slate-800 border border-slate-700 rounded flex items-center justify-between px-2 shadow-lg"
                                    >
                                        <div className="flex gap-1">
                                            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                                            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-75"></div>
                                        </div>
                                        <Server size={12} className="text-slate-600" />
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-10 text-slate-500 font-mono text-xs tracking-widest">DATA CENTER 01</div>
                </div>
            }
        >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section4.p1_start} <strong className="font-semibold text-slate-900 dark:text-white">{t.section4.p1_strong}</strong>{t.section4.p1_end}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section4.p2}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section4.p3}
            </p>
        </StorySection>
    );
};

export default NarrativeSection4_ServerFarm;

