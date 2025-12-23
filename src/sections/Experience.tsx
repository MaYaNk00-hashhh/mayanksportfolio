import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experience = [
    {
        id: 1,
        type: 'work',
        role: 'Founder & Full Stack Developer',
        organization: 'TechVerseHub',
        date: '2024 - Present',
        description: 'Building a comprehensive tech education platform. Proudly funded by SSIP (Gujarat Government) and PP Savani University. Leading product development, securing grant funding, and architecting the full-stack solution.',
    },
    {
        id: 2,
        type: 'education',
        role: 'B.Tech in Artificial Intelligence & Machine Learning',
        organization: 'PP Savani University',
        date: '2024 - 2028',
        description: 'Specializing in ML and AI technologies. actively applying theoretical concepts to build real-world products like TechVerseHub.',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Experience & Education
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        My professional journey and academic background.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
                            >
                                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${item.type === 'work' ? 'bg-primary-600' : 'bg-emerald-500'} ring-4 ring-white dark:ring-slate-800`} />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {item.role}
                                    </h3>
                                    <span className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {item.date}
                                    </span>
                                </div>

                                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-4">
                                    {item.type === 'work' ? <Briefcase className="w-4 h-4 mr-2" /> : <GraduationCap className="w-4 h-4 mr-2" />}
                                    {item.organization}
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
