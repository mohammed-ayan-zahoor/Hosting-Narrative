import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: 'en', label: 'English', short: 'EN' },
        { code: 'hn', label: 'Hinglish', short: 'HN' },
        { code: 'hi', label: 'Hindi', short: 'हिंदी' },
    ];

    return (
        <div className="fixed top-6 right-20 z-50">
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full shadow-lg border border-slate-200 dark:border-slate-800 p-1 flex items-center">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${language === lang.code
                                ? 'text-white'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                    >
                        {language === lang.code && (
                            <motion.div
                                layoutId="active-lang"
                                className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500 rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        )}
                        <span className="relative z-10">{lang.short}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;
