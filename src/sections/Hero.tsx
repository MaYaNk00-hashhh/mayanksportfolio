import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl opacity-70" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-70" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full">
                            Full Stack Developer & Product Designer
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                            Building <span className="text-primary-600 dark:text-primary-500">high-converting</span> digital products for startups.
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            I help founders and businesses turn complex ideas into scalable, user-centric applications that drive revenue and growth. No fluff, just results.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="#projects"
                                className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary-500/25"
                            >
                                View Selected Work
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-primary-600 dark:hover:border-primary-500 font-medium rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-slate-50 dark:hover:bg-slate-750"
                            >
                                Let's Talk
                            </a>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Available for new projects
                            </div>
                            <span>•</span>
                            <div>Trusted by 10+ Founders</div>
                        </div>
                    </motion.div>

                    {/* Optional visual element (abstract code or simplified interface mock) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden lg:block flex-1 relative"
                    >
                        <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl border border-slate-200 dark:border-slate-700 p-6 rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-700 pb-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                </div>
                                <div className="ml-4 h-2 w-32 bg-slate-100 dark:bg-slate-700 rounded-full" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-24 bg-slate-100 dark:bg-slate-700/50 rounded-lg w-full" />
                                <div className="flex gap-4">
                                    <div className="h-32 bg-slate-100 dark:bg-slate-700/50 rounded-lg flex-1" />
                                    <div className="h-32 bg-slate-100 dark:bg-slate-700/50 rounded-lg flex-1" />
                                </div>
                                <div className="h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg w-1/3" />
                            </div>

                            {/* Decoration */}
                            <div className="absolute -z-10 top-10 -right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
                            <div className="absolute -z-10 -bottom-5 -left-5 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
