import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
                        More than just code.
                    </h2>

                    <div className="prose prose-lg dark:prose-invert mx-auto text-slate-600 dark:text-slate-400">
                        <p className="mb-6">
                            I don’t just write code; I solve business problems. With a background in product design and full-stack engineering, I bridge the gap between "it looks good" and "it works perfectly."
                        </p>
                        <p className="mb-6">
                            My approach is simple: understand the user, define the outcome, and build the most efficient solution. Whether it's a SaaS MVP or a complex dashboard, I focus on performance, scalability, and user experience.
                        </p>
                        <p className="mb-6">
                            I specialize in the <strong className="text-primary-600 dark:text-primary-400">React ecosystem (Next.js, Vite)</strong>, paired with modern backend solutions like Node.js and Supabase. Currently, I'm working on <a href="https://techversehub.co.in" className="font-bold hover:underline">TechVerseHub</a>, a comprehensive platform dedicated to tech education.
                        </p>
                        <p className="mb-6">
                            My journey is fueled by a relentless curiosity and a drive to democratize technical knowledge. I believe that the best software isn't just about lines of code—it's about empowering others to create, build, and innovate. This philosophy empowers every feature I ship, ensuring it adds tangible value to the end-user.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source discussions, or refining my understanding of system design. I'm always looking for the next challenge that pushes the boundaries of what's possible on the web.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
