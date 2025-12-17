import { motion } from 'framer-motion';

const Laptop = ({ screenContent, isScreenOn = true }) => {
    return (
        <div className="relative w-64 md:w-96 mx-auto">
            {/* Lid / Screen Frame */}
            <div className="bg-slate-800 dark:bg-slate-700 rounded-t-xl p-2 pb-0 relative z-10 shadow-lg">
                {/* Screen */}
                <div className="bg-slate-900 w-full aspect-[16/10] rounded-t-lg relative overflow-hidden transition-colors duration-500">
                    <motion.div
                        initial={false}
                        animate={{ opacity: isScreenOn ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full bg-white dark:bg-slate-900 relative"
                    >
                        {screenContent}
                    </motion.div>

                    {/* Reflection/Glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 pointer-events-none" />
                </div>
            </div>

            {/* Base */}
            <div className="bg-slate-700 dark:bg-slate-600 h-3 w-[110%] -ml-[5%] rounded-b-lg shadow-xl relative z-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-600 dark:bg-slate-500 rounded-b-md"></div>
            </div>
        </div>
    );
};

export default Laptop;
