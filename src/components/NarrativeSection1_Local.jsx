import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import StorySection from './StorySection';
import { FolderOpen, FileCode, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NarrativeSection1_Local = () => {
    // Track dropped files by ID/Label
    const [droppedFiles, setDroppedFiles] = useState([]);
    const { language } = useLanguage();
    const t = translations[language];

    const allFiles = ["index.html", "style.css", "script.js"];
    const isComplete = droppedFiles.length === allFiles.length;

    const laptopRef = useRef(null);

    // Defining the handler inside the component to pass to children
    function handleFileDrop(fileName, info) {
        if (!laptopRef.current) return;

        const dropZone = laptopRef.current.getBoundingClientRect();
        const dropX = info.point.x;
        const dropY = info.point.y;

        // Check if drop point is inside the laptop rect
        if (
            dropX >= dropZone.left &&
            dropX <= dropZone.right &&
            dropY >= dropZone.top &&
            dropY <= dropZone.bottom
        ) {
            setDroppedFiles(prev => {
                if (prev.includes(fileName)) return prev;
                return [...prev, fileName];
            });
        }
    }

    return (
        <StorySection
            id="local-environment"
            title={t.section1.title}
            className="bg-white dark:bg-slate-950"
            visual={
                <div className="relative w-full h-[400px] flex items-center justify-center">

                    {/* Draggable Files - Only show those NOT yet dropped */}
                    <DraggableFile
                        delay={0}
                        x={-150} y={0}
                        icon={<FileCode size={24} className="text-blue-500" />}
                        label="index.html"
                        isDropped={droppedFiles.includes("index.html")}
                        onDragEnd={(e, info) => handleFileDrop("index.html", info)}
                    />
                    <DraggableFile
                        delay={0.1}
                        x={-180} y={-70}
                        icon={<FileCode size={24} className="text-yellow-500" />}
                        label="style.css"
                        isDropped={droppedFiles.includes("style.css")}
                        onDragEnd={(e, info) => handleFileDrop("style.css", info)}
                    />
                    <DraggableFile
                        delay={0.2}
                        x={-150} y={-140}
                        icon={<FileCode size={24} className="text-yellow-400" />}
                        label="script.js"
                        isDropped={droppedFiles.includes("script.js")}
                        onDragEnd={(e, info) => handleFileDrop("script.js", info)}
                    />

                    {/* Laptop Container */}
                    <div className="flex flex-col items-center relative z-10">
                        {/* Laptop Screen Area */}
                        <div ref={laptopRef} className="relative w-80 h-52 bg-slate-800 rounded-t-xl border-x-4 border-t-4 border-slate-700 flex flex-col items-center justify-center overflow-hidden bg-slate-900 shadow-2xl">
                            {/* Webcam dot */}
                            <div className="absolute top-1 w-1 h-1 bg-slate-600 rounded-full"></div>

                            {!isComplete ? (
                                <motion.div
                                    className="border-2 border-dashed border-slate-500 rounded-lg p-8 flex flex-col items-center text-slate-400"
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <FolderOpen size={48} className="mb-2 opacity-50" />
                                    <span className="text-xs font-mono">{t.section1.try_desc}</span>
                                    <span className="text-[10px] mt-2 text-slate-500">{droppedFiles.length} / 3 Uploaded</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex flex-col items-center text-emerald-400"
                                >
                                    <CheckCircle size={64} className="mb-2" />
                                    <span className="font-bold text-lg">Project Ready</span>
                                    <span className="text-xs text-slate-400 font-mono">localhost:3000 running...</span>
                                </motion.div>
                            )}
                        </div>

                        {/* Laptop Base */}
                        <div className="w-96 h-4 bg-slate-700 rounded-b-xl shadow-xl relative z-20 flex justify-center border-t border-slate-900/50">
                            <div className="w-16 h-1 bg-slate-600 rounded-b-md mt-0"></div> {/* Notch */}
                        </div>
                    </div>

                </div>
            }
        >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section1.p1_start} <strong className="font-semibold text-slate-900 dark:text-white">{t.section1.p1_strong}</strong>{t.section1.p1_end}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section1.p2}
            </p>

            <blockquote className="border-l-4 border-amber-400 pl-4 py-3 my-8 bg-amber-50 dark:bg-amber-900/20 rounded-r-lg">
                <p className="text-slate-700 dark:text-slate-200 italic font-medium">
                    {t.section1.p3_start} <span className="text-amber-600 dark:text-amber-400 not-italic">{t.section1.p3_strong}</span>{t.section1.p3_end}
                </p>
            </blockquote>

            <div className="flex items-center gap-2 mt-4 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded border border-indigo-200 dark:border-indigo-800">{t.section1.try_it}</span>
                {t.section1.try_desc}
            </div>
        </StorySection>
    );
};

const DraggableFile = ({ x, y, delay, icon, label, onDragEnd, isDropped }) => {
    if (isDropped) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x, y }}
            animate={{ opacity: 1, x, y }}
            transition={{ delay, duration: 0.5 }}
            drag
            dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
            whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 50 }}
            onDragEnd={onDragEnd}
            className="absolute z-20 flex flex-col items-center gap-1 cursor-grab"
        >
            <div className="bg-white dark:bg-slate-800 p-2 rounded shadow-lg border border-slate-200 dark:border-slate-700">
                {icon}
            </div>
            <span className="text-xs font-mono text-slate-500 bg-white/80 dark:bg-slate-900/80 px-1 rounded">{label}</span>
        </motion.div>
    );
};

export default NarrativeSection1_Local;
