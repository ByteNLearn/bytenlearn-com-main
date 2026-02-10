import Link from 'next/link';
import { motion } from 'framer-motion';
import { handbooks } from '@/data/handbooks';

export default function NotesSection() {
    const displayedHandbooks = handbooks.slice(0, 4);

    return (
        <section className="py-24 bg-brand-white dark:bg-brand-black relative overflow-hidden">
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
                            className="bg-brand-white dark:bg-[#0F1623] border border-brand-black/10 dark:border-gray-800 rounded-xl p-8 flex flex-col items-center hover:border-brand-orange/50 transition-all duration-300 group shadow-lg hover:shadow-brand-orange/10"
                        >
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 bg-brand-black/5 dark:bg-white/5`}>
                                <book.icon size={40} color={book.color} />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-brand-black dark:text-white">{book.title}</h3>
                            <p className="text-brand-black/60 dark:text-gray-400 text-sm mb-6 text-center">Comprehensive guide for {book.title.split(' ')[0]}</p>

                            <a
                                href={book.link}
                                download
                                className="w-full py-2 px-4 bg-brand-black/5 dark:bg-[#1F2937] hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange text-brand-black dark:text-gray-200 text-center font-semibold rounded-lg transition-colors duration-200 text-sm"
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
