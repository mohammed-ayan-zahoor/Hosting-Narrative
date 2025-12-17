import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const SectionWrapper = ({ children, className, id }) => {
    return (
        <section
            id={id}
            className={cn(
                "min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden",
                "scroll-snap-align-start", // Optional snap
                className
            )}
        >
            <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
