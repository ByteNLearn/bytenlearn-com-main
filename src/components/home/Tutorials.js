import Link from 'next/link';
import { motion } from 'framer-motion';
import { courses } from '@/data/courses';

export default function HomeTutorials() {
    // Limit to 8 tutorials
    const displayedCourses = courses.slice(0, 8);

    return (
        <section className="py-20 md:py-32 bg-brand-black text-brand-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 md:px-0">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Start <span className="text-brand-orange">Learning</span>.
                        </h2>
                        <p className="text-brand-white/60 text-lg">
                            Explore our free tutorials and master the latest technologies. From HTML to Python, we have you covered.
                        </p>
                    </div>

                    <Link href="/tutorials" className="hidden md:inline-flex px-8 py-3 border border-brand-white/20 rounded-full font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all">
                        View All Tutorials
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[300px]">
                    {displayedCourses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-brand-white/5 border border-brand-white/10 rounded-2xl p-6 hover:border-brand-orange/50 transition-all hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-black/50 border border-brand-white/10 group-hover:scale-110 transition-transform shrink-0">
                                    <div className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full">
                                        {course.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold font-display group-hover:text-brand-orange transition-colors">
                                    {course.title}
                                </h3>
                            </div>

                            <p className="text-sm text-brand-white/60 mb-6 line-clamp-3">
                                {course.description}
                            </p>

                            <Link
                                href={`/tutorials/${course.slug}`}
                                className="inline-flex items-center text-sm font-bold uppercase tracking-wide text-brand-orange hover:text-white transition-colors"
                            >
                                Start Learning
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/tutorials" className="inline-block px-8 py-3 border border-brand-white/20 rounded-full font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all">
                        View All Tutorials
                    </Link>
                </div>
            </div>
        </section>
    );
}
