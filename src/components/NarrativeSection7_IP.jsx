import { motion } from 'framer-motion';
import StorySection from './StorySection';
import { Globe, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NarrativeSection7_IP = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <StorySection
            id="ip-address"
            title={t.section7.title}
            className="bg-slate-50 dark:bg-slate-900"
            visual={
                <div className="relative w-full h-[400px] flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                    {/* The Internet Map Background */}
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'radial-gradient(circle, #64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                    />

                    {/* Server Node */}
                    <motion.div
                        className="relative z-10 flex flex-col items-center"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                    >
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] animate-pulse">
                            <Server size={32} />
                        </div>
                        <div className="mt-4 bg-white dark:bg-slate-900 px-4 py-2 rounded shadow text-slate-900 dark:text-slate-100 font-mono font-bold border border-slate-200 dark:border-slate-700">
                            172.217.16.46
                        </div>
                    </motion.div>

                    {/* Connecting Lines */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
                        <div className="w-[1px] h-[80%] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50 absolute"></div>
                    </div>
                </div>
            }
        >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section7.p1_start} <strong className="font-semibold text-slate-900 dark:text-white">{t.section7.p1_strong}</strong> {t.section7.p1_end}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section7.p2}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section7.p3_start} <strong className="font-semibold text-slate-900 dark:text-white">{t.section7.p3_strong}</strong>{t.section7.p3_end}
            </p>
        </StorySection>
    );
};

export default NarrativeSection7_IP;
