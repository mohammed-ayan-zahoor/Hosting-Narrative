import { motion } from 'framer-motion';

const ProgressBar = ({ label, icon: Icon, delay = 0 }) => {
    return (
        <div className="w-full max-w-sm mx-auto mb-6">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                    {Icon && <Icon size={18} />}
                    <span>{label}</span>
                </div>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: delay + 1 }}
                    className="text-xs text-indigo-500 font-bold"
                >
                    Allocated
                </motion.span>
            </div>

            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: delay, ease: "easeInOut" }}
                    className="h-full bg-indigo-500 rounded-full"
                />
            </div>
        </div>
    );
};

export default ProgressBar;
