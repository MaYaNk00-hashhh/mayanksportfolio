import { motion } from 'framer-motion';

const testimonials = [
    {
        content: "We needed a complex dashboard built in under a month. Not only did they deliver on time, but the code quality was better than our in-house team.",
        author: "Sarah Jenkins",
        role: "Visual Director, TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
        content: "The best freelance experience I've had. Clear communication, no jargon, and a final product that actually converts visitors.",
        author: "Michael Chen",
        role: "Founder, StartUp Inc",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        content: "Transformed our legacy codebase into a modern, performant React app without breaking any existing functionality. Highly recommended.",
        author: "Jessica Williams",
        role: "CTO, DataSystems",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
                    Client Feedback
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.author}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm relative"
                        >
                            <div className="text-primary-200 dark:text-primary-900/50 text-6xl font-serif absolute top-4 left-6">"</div>
                            <p className="text-slate-600 dark:text-slate-300 relative z-10 mb-6 italic">
                                {t.content}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={t.image}
                                    alt={t.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white text-sm">{t.author}</div>
                                    <div className="text-slate-500 dark:text-slate-400 text-xs">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
