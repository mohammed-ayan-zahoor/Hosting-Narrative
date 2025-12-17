import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressLine = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-slate-100 dark:bg-slate-800">
            <motion.div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left"
                style={{ scaleX, width: "100%" }}
            />
        </div>
    );
};

export default ScrollProgressLine;
