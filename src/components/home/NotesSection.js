import Link from 'next/link';
import { motion } from 'framer-motion';
import { handbooks } from '@/data/handbooks';

export default function NotesSection() {
    const displayedHandbooks = handbooks.slice(0, 4);

    return (
        <section className="py-24 bg-brand-black/5 dark:bg-brand-white/5 transition-colors duration-500 overflow-hidden relative group/section">
            {/* Background Decoration matches Tutorials section style if possible or kept simple */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Latest <span className="text-brand-orange">Notes</span>.
                        </h2>
                        <p className="text-brand-black/60 dark:text-brand-white/60 max-w-xl text-lg">
                            Get quick access to our top programming handbooks. Download them to boost your learning journey.
                        </p>
                    </div>

                    <Link href="/notes" className="hidden md:inline-flex px-8 py-3 bg-brand-black dark:bg-brand-white text-brand-white dark:text-brand-black font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1">
                        View All Notes
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayedHandbooks.map((book, index) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 flex flex-col items-center text-center hover:border-brand-orange/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/10 hover:-translate-y-2"
                        >
                            <div className="mb-6 w-24 h-24 rounded-full bg-gray-50 dark:bg-brand-black border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <book.icon size={40} color={book.color} />
                            </div>

                            <h3 className="text-2xl font-bold font-display mb-4 text-brand-black dark:text-white group-hover:text-brand-orange transition-colors">{book.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed line-clamp-3">Comprehensive guide for {book.title.split(' ')[0]}</p>

                            <a
                                href={book.link}
                                download
                                className="mt-auto w-full px-8 py-3 bg-brand-black dark:bg-white text-white dark:text-black font-bold rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 transform group-hover:scale-105 active:scale-95 text-center"
                            >
                                Download PDF
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/notes" className="inline-flex px-8 py-3 bg-brand-black dark:bg-brand-white text-brand-white dark:text-brand-black font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1">
                        View All Notes
                    </Link>
                </div>
            </div>
        </section>
    );
}
