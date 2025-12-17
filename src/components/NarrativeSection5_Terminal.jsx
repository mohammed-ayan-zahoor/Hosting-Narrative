import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import StorySection from './StorySection';
import { Terminal, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NarrativeSection5_Terminal = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'Connecting to remote server...' },
        { type: 'system', content: 'Connection established.' },
        { type: 'system', content: 'Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.0-1035-aws x86_64)' }
    ]);
    const [accessGranted, setAccessGranted] = useState(false);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    // Auto-scroll to bottom of terminal
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const cmd = input.trim();

            // Add user command to history
            const newHistory = [...history, { type: 'user', content: cmd }];

            // Command processing logic
            if (cmd.startsWith("ssh root") && cmd.length > 7) {
                newHistory.push({ type: 'success', content: 'Authenticating...' });
                newHistory.push({ type: 'success', content: 'Access Granted. You are now root.' });
                setAccessGranted(true);
            } else if (cmd === 'clear') {
                setHistory([]);
                setInput('');
                return;
            } else {
                newHistory.push({ type: 'error', content: `Command not found: ${cmd}` });
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <StorySection
            id="terminal-access"
            title={t.section5.title}
            className="bg-slate-900 border-t border-slate-800"
            visual={
                <div
                    className="w-full max-w-2xl mx-auto bg-slate-950 rounded-lg shadow-2xl overflow-hidden border border-slate-800 font-mono text-sm relative"
                    onClick={() => inputRef.current?.focus()}
                >
                    {/* Terminal Header */}
                    <div className="bg-slate-800 px-4 py-2 flex items-center justify-between select-none">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        <div className="text-slate-400 text-xs">root@myserver:~</div>
                        <div className="w-4" /> {/* Spacer */}
                    </div>

                    {/* Terminal Body */}
                    <div className="p-4 h-[300px] overflow-y-auto custom-scrollbar flex flex-col gap-1 cursor-text">
                        {history.map((line, i) => (
                            <div key={i} className={`${line.type === 'user' ? 'text-white font-bold mt-2' :
                                    line.type === 'error' ? 'text-red-400' :
                                        line.type === 'success' ? 'text-emerald-400' :
                                            'text-slate-400'
                                }`}>
                                {line.type === 'user' ? '> ' : ''}{line.content}
                            </div>
                        ))}

                        {/* Input Line */}
                        {!accessGranted && (
                            <div className="flex items-center gap-2 text-white animate-fade-in">
                                <span className="text-emerald-500 font-bold">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="bg-transparent border-none outline-none flex-1 font-mono text-white placeholder-slate-600"
                                    placeholder="Type 'ssh root'..."
                                    autoFocus
                                />
                            </div>
                        )}

                        {accessGranted && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-4 border border-emerald-500/30 bg-emerald-500/10 rounded flex items-center gap-3 text-emerald-400"
                            >
                                <CheckCircle size={20} />
                                <span>Root Access Confirmed. System Ready.</span>
                            </motion.div>
                        )}
                        <div ref={bottomRef} />
                    </div>
                </div>
            }
        >
            <p className="text-lg text-slate-300 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section5.p1_start} <strong className="font-semibold text-emerald-400 font-mono">{t.section5.p1_strong}</strong>.
            </p>
            <p className="text-lg text-slate-300 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section5.p2}
            </p>

            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-emerald-500 my-6">
                <p className="font-mono text-sm text-emerald-400 mb-1">
                    <span className="font-bold mr-2">{t.section5.try_label}</span>
                    {t.section5.try_action} <span className="bg-slate-900 px-2 py-0.5 rounded text-white mx-1">{t.section5.try_cmd}</span> {t.section5.try_end}
                </p>
            </div>

            <p className="text-lg text-slate-300 dark:text-slate-300 mb-6 font-light leading-relaxed">
                {t.section5.p3_start} <strong className="font-semibold text-white">{t.section5.p3_strong}</strong> {t.section5.p3_end}
            </p>
        </StorySection>
    );
};

export default NarrativeSection5_Terminal;
