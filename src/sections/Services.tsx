import { motion } from 'framer-motion';
import { Rocket, Server, LayoutDashboard, Code } from 'lucide-react';

const services = [
    {
        title: 'MVP Development',
        description: 'Rapidly turn your idea into a functional product to test with real users.',
        icon: Rocket,
        timeline: '2-4 Weeks',
        price: 'Starting at $3k'
    },
    {
        title: 'SaaS Architecture',
        description: 'Scalable backend systems designed to handle growth from day one.',
        icon: Server,
        timeline: '4-8 Weeks',
        price: 'Custom Quote'
    },
    {
        title: 'Dashboard Systems',
        description: 'Complex data visualization and management interfaces for internal tools.',
        icon: LayoutDashboard,
        timeline: '3-6 Weeks',
        price: 'Starting at $5k'
    },
    {
        title: 'API Development',
        description: 'Robust, documented REST & GraphQL APIs to power your applications.',
        icon: Code,
        timeline: '2-4 Weeks',
        price: 'Starting at $2.5k'
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        How I Can Help
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Specialized services tailored for early-stage startups and businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-500 pt-4 border-t border-slate-200 dark:border-slate-800">
                                    <span>{service.timeline}</span>
                                    {/* <span>{service.price}</span> */}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
