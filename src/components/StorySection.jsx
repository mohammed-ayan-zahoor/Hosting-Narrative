import { motion } from 'framer-motion';
import clsx from 'clsx';

const StorySection = ({
    id,
    title,
    children,
    visual,
    className,
    reverse = false
}) => {
    return (
        <section
            id={id}
            className={clsx(
                "min-h-screen w-full flex flex-col md:flex-row items-center px-4 md:px-6 py-12 md:py-24 relative overflow-hidden transition-colors duration-500",
                // Spacing Fix: Adjusted for mobile responsiveness
                "gap-12 md:gap-32 lg:gap-48",
                reverse ? "md:flex-row-reverse" : "",
                className
            )}
        >
            {/* Search/Text Column - Sticky on Desktop */}
            <div className="w-full md:w-5/12 flex flex-col justify-center relative z-20">
                <div className="md:sticky md:top-32 w-full">
                    {title && (
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-balance leading-tight text-slate-900 dark:text-white transition-colors"
                        >
                            {title}
                        </motion.h2>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 font-light transition-colors"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>

            {/* Visual Column - Scrollable */}
            <div className="w-full md:w-6/12 relative min-h-[50vh] flex items-center justify-center">
                {visual}
            </div>
        </section>
    );
};

export default StorySection;
