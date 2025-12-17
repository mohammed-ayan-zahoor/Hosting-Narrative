import { motion } from 'framer-motion';
import { useState } from 'react';
import StorySection from './StorySection';
import { PowerOff, Zap, ZapOff } from 'lucide-react';

const NarrativeSection2_Shutdown = () => {
    const [isPowered, setIsPowered] = useState(true);

    return (
        <StorySection
            id="shutdown-problem"
            title="But you have to sleep."
            className="bg-zinc-100 dark:bg-slate-900 text-white transition-colors duration-1000"
            reverse={true}
            visual={
                <div className="relative w-full h-[500px] flex items-center justify-center px-4">

                    {/* The "Room" Container */}
                    <div className={`relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 border-4 ${isPowered ? 'bg-blue-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>

                        {/* Status Light - Top Right */}
                        <div className="absolute top-6 right-6 flex items-center gap-2 z-30">
                            <span className={`text-xs font-bold tracking-wider ${isPowered ? 'text-emerald-600' : 'text-rose-500'}`}>
                                {isPowered ? 'ONLINE' : 'OFFLINE'}
                            </span>
                            <div className={`w-3 h-3 rounded-full ${isPowered ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-rose-500 shadow-[0_0_10px_#f43f5e]'}`} />
                        </div>

                        {/* Center PC Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    scale: isPowered ? 1 : 0.9,
                                    filter: isPowered ? 'grayscale(0%)' : 'grayscale(100%) brightness(0.5)'
                                }}
                                className="flex flex-col items-center"
                            >
                                <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 ${isPowered ? 'bg-white shadow-xl' : 'bg-slate-800'}`}>
                                    {isPowered ? (
                                        <Zap size={48} className="text-amber-500 fill-amber-500" />
                                    ) : (
                                        <PowerOff size={48} className="text-slate-600" />
                                    )}
                                </div>

                                {isPowered ? (
                                    <div className="bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-lg text-slate-600 font-medium">
                                        System Running...
                                    </div>
                                ) : (
                                    <div className="text-rose-500 font-mono font-bold text-xl tracking-widest animate-pulse">
                                        CONNECTION LOST
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Power Switch Overlay */}
                        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-40">
                            <button
                                onClick={() => setIsPowered(!isPowered)}
                                className={`px-8 py-3 rounded-full font-bold shadow-lg transform active:scale-95 transition-all text-white flex items-center gap-2 ${isPowered
                                        ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/30'
                                        : 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30'
                                    }`}
                            >
                                {isPowered ? <ZapOff size={18} /> : <Zap size={18} />}
                                {isPowered ? "Pull the Plug" : "Turn On"}
                            </button>
                        </div>

                        {/* Darkness Overlay */}
                        <div className={`absolute inset-0 bg-slate-950/80 pointer-events-none transition-opacity duration-700 ${isPowered ? 'opacity-0' : 'opacity-100'}`} />

                    </div>
                </div>
            }
        >
            <p>
                Eventually, you turn off your computer. Or it goes to sleep. Or the internet cuts out.
            </p>
            <p>
                The moment that happens, <strong className="text-rose-500">POOF</strong>.
            </p>
            <p className="text-slate-400 italic border-l-2 border-slate-300 pl-4">
                <span className="text-xs font-bold bg-rose-100 text-rose-600 px-1 rounded mr-2 uppercase">Interact</span>
                Try {isPowered ? "pulling the plug" : "turning it back on"} to see what happens.
            </p>
            <p>
                Your website disappears from the world. Nobody can visit it. You need a solution that stays awake forever.
            </p>
        </StorySection>
    );
};

export default NarrativeSection2_Shutdown;
