import { motion } from 'framer-motion';

const Server = ({ className }) => {
    return (
        <div className={`relative w-40 md:w-52 mx-auto ${className}`}>
            {/* Server Rack Box */}
            <div className="bg-slate-900 dark:bg-black rounded-lg shadow-2xl p-4 border border-slate-700 dark:border-slate-800 relative z-10">
                {/* Lights */}
                <div className="flex justify-between mb-4">
                    <div className="flex gap-1.5">
                        {[1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                                className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                            />
                        ))}
                    </div>
                    <div className="w-8 h-2 bg-slate-700 dark:bg-slate-800 rounded-full" />
                </div>

                {/* Server Units (Slots) */}
                <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-4 bg-slate-800 dark:bg-slate-900 rounded border border-slate-700 dark:border-slate-800 flex items-center px-2">
                            <motion.div
                                animate={{ opacity: [0.2, 0.8, 0.2] }}
                                transition={{ duration: 0.2 + Math.random(), repeat: Infinity, delay: Math.random() }}
                                className="w-1.5 h-1.5 rounded-full bg-blue-500"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* "Always On" Badge/Aura */}
            <div className="absolute inset-0 bg-blue-500/5 blur-2xl -z-10 rounded-full scale-110" />
        </div>
    );
};

export default Server;
