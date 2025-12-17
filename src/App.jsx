import ScrollProgressLine from './components/ScrollProgressLine';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/Footer';
import NarrativeSection1_Local from './components/NarrativeSection1_Local';
import NarrativeSection2_Shutdown from './components/NarrativeSection2_Shutdown';
import NarrativeSection3_Buying from './components/NarrativeSection3_Buying';
import NarrativeSection4_ServerFarm from './components/NarrativeSection4_ServerFarm';
import NarrativeSection5_Terminal from './components/NarrativeSection5_Terminal';
import NarrativeSection6_GitHub from './components/NarrativeSection6_GitHub';
import NarrativeSection7_IP from './components/NarrativeSection7_IP';
import NarrativeSection8_Domain from './components/NarrativeSection8_Domain';
import NarrativeSection9_SSL from './components/NarrativeSection9_SSL';
import Section7_Recap from './components/Section7_Recap';

function App() {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 w-full overflow-x-hidden transition-colors duration-500">
      <ScrollProgressLine />
      <DarkModeToggle />

      {/* Intro Hero */}
      <div className="h-[60vh] flex flex-col items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-500">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-center text-slate-900 dark:text-white">
          How the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Web Works</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-2xl font-light">A visual story for builders.</p>
        <div className="animate-bounce mt-16 text-slate-300 dark:text-slate-700">↓</div>
      </div>

      <NarrativeSection1_Local />
      <NarrativeSection2_Shutdown />
      <NarrativeSection3_Buying />
      <NarrativeSection4_ServerFarm />
      <NarrativeSection5_Terminal />
      <NarrativeSection6_GitHub />
      <NarrativeSection7_IP />
      <NarrativeSection8_Domain />
      <NarrativeSection9_SSL />

      {/* Final Recap with Scroll to Top */}
      <div id="final-recap">
        <Section7_Recap />
      </div>

      <Footer />
    </main>
  );
}

export default App;
