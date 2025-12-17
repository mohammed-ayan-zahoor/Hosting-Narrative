import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import StorySection from './StorySection';

const Section7_Recap = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <StorySection
            id="recap-complete"
            title="The Complete Journey"
            className="bg-indigo-50 dark:bg-slate-900"
            visual={
                <div className="relative w-full h-full flex flex-col items-center justify-center py-20">
                    {/* Timeline Visual - Simplified for Recap */}
                    <div className="w-[2px] h-full bg-slate-200 dark:bg-slate-800 absolute left-1/2 -translate-x-1/2" />

                    {[
                        "Local Code", "Buying Hosting", "Server Setup", "Domain Link", "SSL Secure"
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative z-10 bg-white dark:bg-slate-800 border-2 border-indigo-500 px-4 py-2 rounded-full shadow-lg mb-8 last:mb-0 text-sm font-bold text-slate-700 dark:text-slate-200"
                        >
                            {step}
                        </motion.div>
                    ))}
                </div>
            }
        >
            <p>
                From a folder on your laptop to a secure, world-accessible website.
            </p>
            <p>
                It seems complex, but it's just powerful computers talking to each other.
            </p>

            <div className="mt-12">
                <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-indigo-500/30 transition-all hover:scale-105"
                >
                    Start Your Website
                    <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </StorySection>
    );
};

export default Section7_Recap;
