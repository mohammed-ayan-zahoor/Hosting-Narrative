import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Lock, Unlock, ShieldCheck } from 'lucide-react';

const Section6_SSL = () => {
    return (
        <SectionWrapper id="ssl-security" className="bg-slate-900 text-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Trust (SSL)</h2>
                <p className="text-slate-400 max-w-md mx-auto">
                    Without SSL, your data is open. With SSL, it's sealed.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center w-full max-w-4xl">
                {/* Unsecure State (Initial) */}
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 0.3, scale: 0.9 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="flex flex-col items-center p-6 rounded-2xl bg-slate-800 border border-slate-700"
                >
                    <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mb-4 text-rose-500">
                        <Unlock size={32} />
                    </div>
                    <div className="flex flex-col gap-2 w-48">
                        <div className="h-2 bg-slate-700 rounded w-full"></div>
                        <div className="h-2 bg-slate-700 rounded w-2/3"></div>
                        <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                    </div>
                    <p className="mt-4 text-xs text-rose-400 font-mono">NOT SECURE</p>
                </motion.div>

                {/* Transition Arrow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="text-emerald-400 font-bold text-xl"
                >
                    →
                </motion.div>

                {/* Secure State (Final) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-emerald-900/50 to-slate-800 border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)] relative overflow-hidden"
                >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-white/5 skew-x-12 translate-x-full animate-[shimmer_2s_infinite]" />

                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6 text-white shadow-lg z-10">
                        <Lock size={40} />
                    </div>

                    <div className="bg-slate-950/50 px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-2 mb-4 z-10">
                        <Lock size={14} className="text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-medium">https://</span>
                        <span className="text-white text-sm">secure-site.com</span>
                    </div>

                    <div className="flex items-center gap-2 text-emerald-400 z-10">
                        <ShieldCheck size={16} />
                        <span className="text-xs font-bold tracking-wider">ENCRYPTED & SAFE</span>
                    </div>
                </motion.div>
            </div>

        </SectionWrapper>
    );
};

export default Section6_SSL;
