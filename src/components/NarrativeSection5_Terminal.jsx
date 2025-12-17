import { motion } from 'framer-motion';
import { useState } from 'react';
import StorySection from './StorySection';
import { Terminal, Key, Lock, Fingerprint } from 'lucide-react';

const NarrativeSection5_Terminal = () => {
    return (
        <StorySection
            id="terminal-interface"
            title="The Cockpit (Terminal)"
            className="bg-zinc-100 dark:bg-zinc-900"
            visual={
                <div className="relative w-full max-w-lg mx-auto">

                    {/* Credentials Card flying in */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute -top-12 -left-4 z-20 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-xl border border-indigo-100 dark:border-slate-700 flex items-center gap-3"
                    >
                        <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full text-amber-600 dark:text-amber-500">
                            <Key size={20} />
                        </div>
                        <div className="text-xs dark:text-slate-300">
                            <p className="font-bold text-slate-700 dark:text-slate-200">ACCESS GRANTED</p>
                            <p className="font-mono text-slate-500 dark:text-slate-400">user: root</p>
                            <p className="font-mono text-slate-500 dark:text-slate-400">pass: ********</p>
                        </div>
                    </motion.div>

                    {/* Terminal Window */}
                    <div className="bg-slate-900 rounded-lg shadow-2xl overflow-hidden font-mono text-sm relative z-10 min-h-[300px] flex flex-col">
                        <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-rose-500" />
                                <div className="w-3 h-3 rounded-full bg-amber-500" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                            </div>
                            <span className="text-slate-400 text-xs ml-2">root@server-01:~</span>
                        </div>

                        <div className="p-6 text-slate-300 flex-1 flex flex-col gap-2" onClick={() => document.getElementById('terminal-input')?.focus()}>
                            <p>Welcome to Ubuntu 22.04 LTS</p>
                            <p className="text-slate-500">Last login: Tue Dec 17 09:23:01</p>
                            <br />

                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-emerald-400 shrink-0">root@server:~$</span>
                                <InteractiveTerminalInput onComplete={() => { }} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        >
            <p>
                How do you talk to this remote computer? You don't use a mouse. You use the <strong className="text-indigo-600 dark:text-indigo-400">Terminal</strong>.
            </p>
            <p>
                Think of it like a chat window where you text commands to your server.
            </p>
            <p>
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm font-bold text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600">Try It:</span>
                Click the terminal and type <span className="font-mono text-emerald-600 dark:text-emerald-400">ssh root</span> to connect.
            </p>
            <p>
                To get in, you need the <strong className="text-amber-600 dark:text-amber-500">Credentials</strong> (Username & Password) that the hosting company gave you.
            </p>
        </StorySection>
    );
};

const InteractiveTerminalInput = ({ onComplete }) => {
    const [input, setInput] = useState("");
    const [completed, setCompleted] = useState(false);
    const targetCommand = "ssh root@172.217.16.46";

    const handleChange = (e) => {
        const val = e.target.value;
        setInput(val);
        if (val.toLowerCase().startsWith("ssh root") && val.length > 7) {
            setCompleted(true);
            onComplete();
        }
    };

    return (
        <>
            {!completed ? (
                <div className="relative flex-1">
                    <input
                        id="terminal-input"
                        type="text"
                        value={input}
                        onChange={handleChange}
                        className="bg-transparent border-none outline-none text-slate-100 w-full absolute inset-0 opacity-0 cursor-text"
                        autoComplete="off"
                    />
                    <span className="text-slate-100">{input}</span>
                    <motion.span
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-slate-300 inline-block align-middle ml-1"
                    />
                </div>
            ) : (
                <div className="flex flex-col gap-2 w-full">
                    <span className="text-slate-100">{targetCommand}</span>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-emerald-300 mt-2"
                    >
                        &gt; Authenticating...
                        <br />
                        &gt; <span className="text-emerald-400 font-bold">Access Granted.</span>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default NarrativeSection5_Terminal;
