import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import StorySection from './StorySection';
import { Globe, Link as LinkIcon, Book, ArrowRight } from 'lucide-react';

const NarrativeSection8_Domain = () => {
    const [connected, setConnected] = useState(false);

    // Drag logic for the connector
    const x = useMotionValue(0);

    return (
        <StorySection
            id="domain-solution"
            title="The Identity (Domain)"
            className="bg-white dark:bg-slate-950"
            reverse={true}
            visual={
                <div className="relative w-full max-w-2xl mx-auto h-[300px] flex items-center justify-between px-4 md:px-12 select-none">

                    {/* Left: Domain Name */}
                    <div className="flex flex-col items-center relative z-20">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transition-colors duration-500 ${connected ? 'bg-indigo-500 text-white' : 'bg-indigo-100 text-indigo-600'}`}>
                            <Globe size={40} />
                        </div>
                        <div className="mt-4 text-center">
                            <div className="font-bold text-lg dark:text-white">google.com</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider">Human Name</div>
                        </div>
                    </div>

                    {/* Middle: The Connection Cable */}
                    <div className="flex-1 mx-4 relative h-12 flex items-center">
                        {/* Cable Line */}
                        <div className="absolute inset-x-0 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-emerald-500"
                                style={{ width: connected ? '100%' : '0%' }}
                                initial={false}
                                animate={{ width: connected ? '100%' : '0%' }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        {/* Draggable Connector Head (Only visible if not connected) */}
                        {!connected && (
                            <motion.div
                                drag="x"
                                dragConstraints={{ left: 0, right: 200 }}
                                dragElastic={0.1}
                                style={{ x }}
                                onDragEnd={(e, info) => {
                                    if (info.offset.x > 100) {
                                        setConnected(true);
                                    }
                                }}
                                className="absolute left-0 w-12 h-12 bg-white border-4 border-indigo-500 rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing z-30"
                            >
                                <ArrowRight size={20} className="text-indigo-500" />
                            </motion.div>
                        )}

                        {/* Success Message */}
                        {connected && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute inset-x-0 -top-8 text-center text-xs font-bold text-emerald-500 uppercase tracking-widest"
                            >
                                DNS Propagated
                            </motion.div>
                        )}
                    </div>

                    {/* Right: IP Address */}
                    <div className="flex flex-col items-center relative z-20">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl border-2 transition-colors duration-500 ${connected ? 'bg-slate-800 border-emerald-500 text-emerald-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                            <span className="font-mono text-xs">172...</span>
                        </div>
                        <div className="mt-4 text-center">
                            <div className={`font-mono font-bold text-sm transition-colors ${connected ? 'text-emerald-500' : 'text-slate-400'}`}>
                                172.217.16.46
                            </div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider">Machine Address</div>
                        </div>
                    </div>

                </div>
            }
        >
            <p>
                The solution is a <strong className="text-indigo-600 dark:text-indigo-400">Domain Name</strong>.
            </p>
            <p>
                Think of it like a Phonebook for the internet.
            </p>
            <p>
                You buy a name (like google.com). Then, you create what's called an <strong className="bg-slate-200 dark:bg-slate-800 px-1 rounded">A Record</strong>.
            </p>
            <p className="border-l-2 pl-4 italic text-slate-500 text-sm">
                <span className="font-bold text-indigo-500">Task:</span> Drag the arrow to connect the name to the server!
            </p>
            <p>
                This basically tells the internet:
                <br />
                <em>"When someone types google.com, automatically send them to 172.217.16.46."</em>
            </p>
        </StorySection>
    );
};

export default NarrativeSection8_Domain;
