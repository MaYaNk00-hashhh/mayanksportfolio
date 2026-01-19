import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Relative path works for both Vercel (same domain) and Localhost (via Vite proxy)
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                const data = await response.json();
                console.error('Server responded with error:', data);
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message (network or parsing):', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-primary-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                    <div className="p-12 md:w-1/2 text-white">
                        <h2 className="text-3xl font-bold mb-6">Let's build something great.</h2>
                        <p className="text-primary-100 mb-12">
                            Ready to turn your idea into a reality? I'm currently available for new projects.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:mayankprajapat010@gmail.com" className="flex items-center gap-4 text-primary-100 hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                                <span>mayankprajapat010@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/mayank-prajapat-b5325b239/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-primary-100 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                                <span>LinkedIn Profile</span>
                            </a>
                            <a href="https://github.com/MaYaNk00-hash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-primary-100 hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                                <span>GitHub Profile</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-12 md:w-1/2">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-sm text-center">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
