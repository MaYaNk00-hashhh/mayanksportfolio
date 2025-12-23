import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Real-world solutions solving complex business problems.
                    </p>
                </div>

                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative group overflow-hidden rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 aspect-video">
                                    <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    {project.title}
                                </h3>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-1">Buttom Line</h4>
                                        <p className="text-slate-600 dark:text-slate-300 italic border-l-4 border-primary-200 dark:border-primary-800 pl-4 py-1 bg-white/50 dark:bg-slate-800/50 rounded-r-md">
                                            "{project.outcome}"
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1">Problem & Solution</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            {project.problem} <span className="block mt-1">{project.solution}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                                    >
                                        View Live Demo <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
