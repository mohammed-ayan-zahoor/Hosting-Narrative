import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Laptop from './Laptop';
import { MonitorX } from 'lucide-react';

const Section1_Local = () => {
    const [isOnline, setIsOnline] = useState(true);

    // Cycle the state to show the problem
    useEffect(() => {
        const interval = setInterval(() => {
            setIsOnline(prev => !prev);
        }, 4000); // 4 seconds loop
        return () => clearInterval(interval);
    }, []);

    return (
        <SectionWrapper id="local-problem" className="bg-zinc-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem with "Local"</h2>
                <p className="text-zinc-600 max-w-md mx-auto">
                    You built a website on your computer. It looks great.
                </p>
            </div>

            <div className="relative py-10">
                <Laptop
                    isScreenOn={isOnline}
                    screenContent={
                        <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
                            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <div className="h-2 w-20 bg-slate-100 rounded"></div>
                            <div className="h-2 w-16 bg-slate-100 rounded"></div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute top-2 left-2 bg-slate-100 px-2 py-0.5 rounded text-[10px] text-slate-500 font-mono"
                            >
                                localhost:3000
                            </motion.div>
                        </div>
                    }
                />

                {/* Status Indicator */}
                <motion.div
                    animate={{
                        opacity: isOnline ? 0 : 1,
                        y: isOnline ? 10 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                >
                    <div className="bg-rose-100 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                        <MonitorX size={24} />
                        <div className="text-left">
                            <p className="font-bold text-sm">Offline</p>
                            <p className="text-xs opacity-80">Computer is off</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.p
                key={isOnline ? "on" : "off"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 text-zinc-500 font-medium h-6"
            >
                {isOnline ? "Your computer is on. Website is visible." : "Computer sleeps? Website disappears."}
            </motion.p>
        </SectionWrapper>
    );
};

export default Section1_Local;
