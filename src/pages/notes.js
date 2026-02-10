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

            <div className="min-h-screen bg-[#0B0F19] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight text-white/90"
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
                                className="bg-[#0F1623] border border-gray-800 rounded-xl p-8 flex flex-col items-center hover:bg-[#131B2C] hover:border-gray-700 transition-all duration-300 group shadow-lg"
                            >
                                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 bg-white/5`}>
                                    <book.icon size={48} color={book.color} />
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-white">{book.title}</h3>
                                <p className="text-gray-400 text-sm mb-8">Download Handbook Here</p>

                                <a
                                    href={book.link}
                                    download
                                    className="w-full py-3 px-4 bg-[#1F2937] hover:bg-[#374151] hover:text-white text-gray-200 text-center font-semibold rounded-lg transition-colors duration-200 text-sm"
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
