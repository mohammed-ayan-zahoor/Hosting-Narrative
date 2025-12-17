import { motion } from 'framer-motion';
import StorySection from './StorySection';
import Server from './Server';

const NarrativeSection4_ServerFarm = () => {
    return (
        <StorySection
            id="server-farm"
            title="The Server Farm"
            className="bg-slate-900 text-white"
            reverse={true}
            visual={
                <div className="relative w-full h-[500px] bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center perspective-500">

                    {/* Infinite Racks Background */}
                    <div className="absolute inset-0 flex justify-center gap-20 opacity-30 transform scale-75 blur-sm">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex flex-col gap-10">
                                <Server className="opacity-50" />
                                <Server className="opacity-50" />
                            </div>
                        ))}
                    </div>

                    {/* "My" Server - The Hero */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, z: -500 }}
                        whileInView={{ scale: 1, opacity: 1, z: 0 }}
                        transition={{ duration: 1.5, type: "spring" }}
                        className="relative z-10"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-bold px-4 py-1 rounded-full text-sm shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                            This one is YOURS
                        </div>
                        <Server className="scale-125" />
                    </motion.div>

                </div>
            }
        >
            <p>
                After paying, the hosting company takes you to their massive data center (digitally).
            </p>
            <p>
                They point to one specific rack among thousands and say:
                <br />
                <span className="text-emerald-400 font-bold">"This slot is reserved for you."</span>
            </p>
            <p className="text-slate-400">
                It has its own power, cooling, and internet. It is ready for your files.
            </p>
        </StorySection>
    );
};

export default NarrativeSection4_ServerFarm;
