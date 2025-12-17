import { motion } from 'framer-motion';
import { useState } from 'react';
import StorySection from './StorySection';
import Laptop from './Laptop';
import { FolderOpen, FileCode, CheckCircle } from 'lucide-react';

const NarrativeSection1_Local = () => {
    const [filesUploaded, setFilesUploaded] = useState(0);

    return (
        <StorySection
            id="local-beginning"
            title="It starts with a folder."
            className="bg-zinc-50 dark:bg-slate-950"
            visual={
                <div className="relative w-full max-w-lg mx-auto h-[400px] flex items-center justify-center">
                    {/* Laptop as the container */}
                    <Laptop
                        isScreenOn={true}
                        screenContent={
                            <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">

                                {/* Drop Zone Indicator */}
                                {filesUploaded < 3 && (
                                    <div className="absolute inset-0 border-2 border-dashed border-slate-700 m-4 rounded-lg flex items-center justify-center pointer-events-none">
                                        <span className="text-slate-600 text-xs font-mono">Drag files here</span>
                                    </div>
                                )}

                                {/* The "Local" Folder */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col items-center z-10"
                                >
                                    <div className="bg-blue-500/20 p-4 rounded-xl border border-blue-500/50 backdrop-blur-sm mb-2 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                        {filesUploaded >= 3 ? (
                                            <CheckCircle size={48} className="text-emerald-400" />
                                        ) : (
                                            <FolderOpen size={48} className="text-blue-400" />
                                        )}
                                    </div>
                                    <span className="text-slate-300 font-mono text-sm">
                                        {filesUploaded >= 3 ? "Project Ready" : "/my-website"}
                                    </span>
                                </motion.div>

                                {/* Localhost Badge */}
                                <div className="absolute top-4 left-4 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    <span className="text-xs text-slate-500 font-mono">localhost:3000</span>
                                </div>
                            </div>
                        }
                    />

                    {/* Draggable Files area - Overlaying the laptop but positioned absolutely */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[1, 2, 3].map((i) => (
                            <DraggableFile key={i} index={i} onDrop={() => setFilesUploaded(prev => Math.min(prev + 1, 3))} />
                        ))}
                    </div>
                </div>
            }
        >
            <p>
                Imagine you have a folder on your computer labeled <strong className="text-indigo-600 dark:text-indigo-400 font-medium">"My Website"</strong>.
                Inside, you have all your code files.
            </p>
            <p>
                You open it in your browser, and it works beautifully. You can see it, click around, and enjoy what you built.
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-sm border-l-2 border-slate-300 dark:border-slate-700 pl-4 italic">
                <span className="text-xs font-bold bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-1 rounded mr-2 uppercase tracking-wide">Try It</span>
                Drag the floating files into the laptop screen!
            </p>
        </StorySection>
    );
};

const DraggableFile = ({ index, onDrop }) => {
    const [dropped, setDropped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: (index - 2) * 80, y: 100 }}
            whileInView={{ opacity: dropped ? 0 : 1, y: 100 }}
            transition={{ delay: 0.5 + (index * 0.2), duration: 1 }}
            drag={!dropped}
            dragConstraints={{ top: -150, left: -100, right: 100, bottom: 0 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.2, cursor: "grabbing" }}
            onDragEnd={(event, info) => {
                // Simple hit detection logic: if dragged up enough (into laptop area)
                if (info.offset.y < -50) {
                    setDropped(true);
                    onDrop();
                }
            }}
            className={`absolute bottom-0 left-1/2 -ml-4 pointer-events-auto cursor-grab ${dropped ? 'hidden' : ''}`}
            style={{ x: (index - 2) * 60 }}
        >
            <div className="bg-slate-800 p-3 rounded-lg border border-slate-600 shadow-xl flex flex-col items-center gap-2 w-16 group hover:border-indigo-400 transition-colors">
                <FileCode size={24} className="text-indigo-400" />
                <div className="h-1 w-8 bg-slate-600 rounded-full" />
                <div className="h-1 w-6 bg-slate-600 rounded-full" />
            </div>
        </motion.div>
    );
};


export default NarrativeSection1_Local;
