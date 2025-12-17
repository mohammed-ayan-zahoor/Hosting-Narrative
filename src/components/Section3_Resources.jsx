import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import ProgressBar from './ProgressBar';
import { HardDrive, Cpu, Globe } from 'lucide-react';

const Section3_Resources = () => {
    return (
        <SectionWrapper id="resources-allocation" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What you actually buy</h2>
                <p className="text-zinc-600 max-w-md mx-auto">
                    Buying hosting = Renting space on that powerful computer.
                </p>
            </div>

            <div className="w-full max-w-md bg-white border border-slate-100 shadow-2xl rounded-2xl p-8 transform rotate-1 md:rotate-0 transition-transform">
                <h3 className="text-lg font-bold text-slate-800 mb-6 border-b pb-4">Server Resources</h3>

                <ProgressBar label="Storage Space" icon={HardDrive} delay={0.2} />
                <ProgressBar label="Memory (RAM)" icon={Cpu} delay={1.8} />
                <ProgressBar label="Public Access" icon={Globe} delay={3.4} />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 5, type: "spring" }}
                    className="mt-8 bg-emerald-50 text-emerald-600 p-4 rounded-xl flex items-center justify-center gap-2"
                >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="font-bold">Your website is online!</span>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Section3_Resources;
