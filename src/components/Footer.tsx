import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">DevPortfolio</span>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
                            Building digital products that solve real problems.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/MaYaNk00-hash" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/mayank-prajapat-b5325b239/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </a>
                        {/* Twitter removed as not provided */}
                        <a href="mailto:mayankprajapat010@gmail.com" className="text-slate-400 hover:text-primary-600 transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                    <p className="text-slate-400 text-sm">
                        &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
