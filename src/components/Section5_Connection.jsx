import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { User, Server, ArrowRight, Search, MapPin } from 'lucide-react';

const Section5_Connection = () => {
    return (
        <SectionWrapper id="connection-flow" className="bg-zinc-100">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connecting the Dots</h2>
                <p className="text-zinc-600 max-w-md mx-auto">
                    Your domain is the address. Hosting is the house.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 overflow-hidden w-full max-w-5xl">
                {/* User */}
                <div className="flex flex-col items-center z-10">
                    <div className="bg-white p-4 rounded-full shadow-lg mb-2">
                        <User size={32} className="text-slate-700" />
                    </div>
                    <span className="text-sm font-bold text-slate-500">You</span>
                </div>

                {/* Arrow 1 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="hidden md:flex flex-col items-center"
                >
                    <ArrowRight className="text-slate-300" />
                    <span className="text-[10px] text-slate-400 mt-1">Type URL</span>
                </motion.div>

                {/* Domain / DNS */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col items-center bg-white border border-indigo-200 p-6 rounded-2xl shadow-xl z-10"
                >
                    <Search size={24} className="text-indigo-500 mb-2" />
                    <span className="font-bold text-slate-800">example.com</span>
                    <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
                        <MapPin size={10} />
                        <span>Looking up address...</span>
                    </div>
                </motion.div>

                {/* Arrow 2 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="hidden md:flex flex-col items-center"
                >
                    <ArrowRight className="text-slate-300" />
                    <span className="text-[10px] text-slate-400 mt-1">Found It</span>
                </motion.div>

                {/* Server */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="flex flex-col items-center z-10"
                >
                    <div className="bg-slate-900 p-4 rounded-lg shadow-2xl mb-2 relative">
                        <Server size={32} className="text-white" />
                        <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    </div>
                    <span className="text-sm font-bold text-slate-500">Host</span>
                </motion.div>
            </div>

            {/* Website Delivery Line Animation */}
            <svg className="absolute top-1/2 left-0 w-full h-20 -z-0 pointer-events-none hidden md:block">
                <motion.path
                    d="M 200,40 Q 600,80 1000,40"
                    className="stroke-indigo-200 fill-none stroke-[4]"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 0.5 }}
                />
            </svg>

        </SectionWrapper>
    );
};

export default Section5_Connection;
