import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Server from './Server';
import { ArrowRight, FileCode } from 'lucide-react';

const Section2_Hosting = () => {
    return (
        <SectionWrapper id="hosting-intro" className="bg-zinc-100">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Introducing Hosting</h2>
                <p className="text-zinc-600 max-w-md mx-auto">
                    We need a computer that never sleeps.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
                {/* Left: The "Idea" (Files) */}
                <div className="relative">
                    <div className="w-32 h-24 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-400">
                        <span className="text-slate-400 font-mono text-xs">Your Files</span>
                    </div>

                    {/* Fly Animation */}
                    <motion.div
                        initial={{ x: 0, opacity: 1, scale: 1 }}
                        whileInView={{ x: 150, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                        <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-200">
                            <FileCode className="text-indigo-600" size={24} />
                        </div>
                    </motion.div>
                </div>

                {/* Middle: Arrow */}
                <div className="hidden md:block">
                    <ArrowRight className="text-slate-300" size={32} />
                </div>

                {/* Right: The Solution (Server) */}
                <div className="relative">
                    <Server />

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -right-12 -top-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                    >
                        24/7 ONLINE
                    </motion.div>
                </div>
            </div>

            <p className="mt-12 text-zinc-500 font-medium">
                Hosting = A powerful computer that is always connected to the internet.
            </p>
        </SectionWrapper>
    );
};

export default Section2_Hosting;
