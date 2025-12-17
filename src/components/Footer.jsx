const Footer = () => {
    return (
        <footer className="w-full py-12 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                <div className="mb-6">
                    <h3 className="text-sm uppercase tracking-widest text-indigo-500 font-bold mb-2">Developed By</h3>
                    <p className="text-2xl font-serif text-slate-800 dark:text-slate-200 tracking-tight">Mohammed Ayan</p>
                </div>

                <div className="h-px w-12 bg-slate-300 dark:bg-slate-700 my-6" />

                <div className="text-slate-500 dark:text-slate-400 text-sm font-light space-y-1">
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300">3F Tech Solutions</p>
                    <p>Karnataka</p>
                </div>

                <div className="mt-12 text-xs text-slate-400">
                    © {new Date().getFullYear()} Visual Story. All rights reserved.
                </div>
            </div>
        </footer>


    );
};

export default Footer;
