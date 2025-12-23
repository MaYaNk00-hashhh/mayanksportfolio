import { Database, Layout, Server, Wrench } from 'lucide-react';

export const skills = [
    {
        category: 'Frontend',
        icon: Layout,
        items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'Redux'],
    },
    {
        category: 'Backend',
        icon: Server,
        items: ['Node.js', 'Express', 'Python', 'Go', 'GraphQL', 'REST APIs'],
    },
    {
        category: 'Database',
        icon: Database,
        items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Redis', 'Prisma'],
    },
    {
        category: 'DevOps & Tools',
        icon: Wrench,
        items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Vite', 'Data Analytics'],
    },
];
