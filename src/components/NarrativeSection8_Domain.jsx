import { useRef, useState } from 'react';
import { motion, useDragControls } from 'framer-motion';
import StorySection from './StorySection';
import { Globe, Link as LinkIcon, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NarrativeSection8_Domain = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const [isConnected, setIsConnected] = useState(false);

    // Drag logic
    const constraintsRef = useRef(null);

    const handleDragEnd = (_, info) => {
        // Since we are dragging along X, check if we moved enough to the right
        // The container is flexible, but assuming a decent screen width, 200px is a solid "intention"
        if (info.offset.x > 150) {
            setIsConnected(true);
        }
    };

    return (
        <StorySection
            id="dns-domain"
            title={t.section8.title}
            className="bg-white dark:bg-slate-950"
            visual={
                <div ref={constraintsRef} className="relative w-full h-[300px] flex items-center justify-between px-10 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">

                    {/* Domain Node */}
                    <div className="flex flex-col items-center z-10">
                        <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                            <Globe size={40} />
                        </div>
                        <span className="font-bold mt-2 text-slate-800 dark:text-slate-200">mywebsite.com</span>
                    </div>

                    {/* Elastic Cable (Simplified Visual) */}
                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 mx-4 relative rounded-full overflow-hidden flex items-center">
                        {/* Static Track Line */}

                        <motion.div
                            className="h-full bg-orange-500"
                            initial={{ width: "0%" }}
                            animate={{ width: isConnected ? "100%" : "0%" }}
                            transition={{ type: "spring", stiffness: 50 }}
                        />
                        {!isConnected && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-slate-400 font-mono pointer-events-none">
                                Disconnected
                            </div>
                        )}
                    </div>

                    {/* IP Node */}
                    <div className="flex flex-col items-center z-10">
                        <div className={`w-20 h-20 rounded-lg flex items-center justify-center text-white shadow-lg transition-colors duration-500 ${isConnected ? 'bg-blue-600' : 'bg-slate-400'}`}>
                            <Server size={40} />
                        </div>
                        <span className="font-bold mt-2 text-slate-800 dark:text-slate-200">172.217.16.46</span>
                    </div>

                    {/* Drag Handle (Simulated Action) */}
                    {!isConnected && (
                        <motion.button
                            drag="x"
                            dragConstraints={constraintsRef}
                            dragElastic={0.1}
                            dragMomentum={false}
                            onDragEnd={handleDragEnd}
                            className="absolute left-32 z-20 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-xl border-4 border-orange-500 flex items-center justify-center cursor-move"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <LinkIcon size={20} className="text-orange-500" />
                        </motion.button>
                    )}
                </div>
            }
        >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section8.p1_start} <strong className="font-semibold text-slate-900 dark:text-white">{t.section8.p1_strong}</strong> {t.section8.p1_end}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section8.p2_start} <strong className="font-semibold text-slate-900 dark:text-white">{t.section8.p2_strong}</strong> {t.section8.p2_end}
            </p>

            <div className="flex items-center gap-2 mt-4 text-sm font-bold text-orange-600 dark:text-orange-400">
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 rounded border border-orange-200 dark:border-orange-800">{t.section8.connect_label}</span>
                {t.section8.connect_desc}
            </div>
        </StorySection>
    );
};

export default NarrativeSection8_Domain;
