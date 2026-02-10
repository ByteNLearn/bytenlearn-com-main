import Head from 'next/head';
import { motion } from 'framer-motion';
import { handbooks } from '@/data/handbooks';

export default function Notes() {
    return (
        <>
            <Head>
                <title>Download Handbooks | ByteNLearn</title>
                <meta name="description" content="Download comprehensive programming handbooks for Python, C, HTML, SQL, MongoDB and more." />
            </Head>

            <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans bg-brand-black/5 dark:bg-brand-white/5 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-display font-bold text-center mb-16 tracking-tight text-brand-black dark:text-white"
                    >
                        Download Handbooks
                    </motion.h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {handbooks.map((book, index) => (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 flex flex-col items-center text-center hover:border-brand-orange/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/10 hover:-translate-y-2"
                            >
                                <div className="mb-6 w-24 h-24 rounded-full bg-gray-50 dark:bg-brand-black border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <book.icon size={48} color={book.color} />
                                </div>

                                <h3 className="text-2xl font-bold font-display mb-4 text-brand-black dark:text-white group-hover:text-brand-orange transition-colors">{book.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed line-clamp-3">Download Handbook Here</p>

                                <a
                                    href={book.link}
                                    download
                                    className="mt-auto w-full px-8 py-3 bg-brand-black dark:bg-white text-white dark:text-black font-bold rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 transform group-hover:scale-105 active:scale-95 text-center"
                                >
                                    Download
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
