import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Search } from 'lucide-react';

const Section4_Domain = () => {
    return (
        <SectionWrapper id="domain-intro" className="bg-zinc-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Name (Domain)</h2>
                <p className="text-zinc-600 max-w-md mx-auto">
                    Computers speak in numbers. Humans speak in words.
                </p>
            </div>

            <div className="w-full max-w-md mx-auto relative h-32">
                {/* IP Address State */}
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 0, y: -20 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="bg-white border-2 border-slate-200 rounded-xl px-6 py-4 shadow-sm flex items-center gap-4">
                        <span className="text-slate-400 font-mono">IP:</span>
                        <span className="text-xl md:text-2xl font-mono tracking-widest text-slate-700">192.168.1.1</span>
                    </div>
                </motion.div>

                {/* Domain Name State */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="bg-white border-2 border-indigo-200 rounded-xl px-6 py-4 shadow-lg flex items-center gap-4 w-full">
                        <Search size={20} className="text-slate-400" />
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: "auto" }}
                            className="text-xl md:text-2xl font-bold text-indigo-600 overflow-hidden whitespace-nowrap"
                        >
                            mywebsite.com
                        </motion.span>
                        <span className="animate-pulse text-indigo-400">|</span>
                    </div>
                </motion.div>
            </div>

            <div className="mt-20 flex justify-center gap-12 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Machine</p>
                    <p className="font-mono text-slate-600 bg-slate-100 px-2 py-1 rounded">172.217.16.46</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    <p className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">Human</p>
                    <p className="font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">google.com</p>
                </motion.div>
            </div>

        </SectionWrapper>
    );
};

export default Section4_Domain;
