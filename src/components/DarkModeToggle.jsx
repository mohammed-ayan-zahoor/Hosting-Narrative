import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check system preference on mount
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-[100] bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform group"
            aria-label="Toggle Dark Mode"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
            >
                {isDark ? (
                    <Moon size={20} className="text-indigo-400 fill-indigo-400/20" />
                ) : (
                    <Sun size={20} className="text-amber-500 fill-amber-500/20" />
                )}
            </motion.div>
        </button>
    );
};

export default DarkModeToggle;
