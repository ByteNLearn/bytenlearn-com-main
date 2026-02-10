import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { courses as tutorials } from '@/data/courses';

export default function Tutorials() {
    return (
        <>
            <Head>
                <title>Tutorials | ByteNLearn</title>
                <meta name="description" content="Start learning web development and programming with our free tutorials on HTML, CSS, JavaScript, and Python." />
            </Head>

            <section className="min-h-screen py-24 bg-brand-black text-brand-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-orange rounded-full blur-[128px]" />
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-pink rounded-full blur-[128px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-white to-gray-400">
                                Tutorials
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Master the web with our comprehensive guides. Select a technology to begin your journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {tutorials.map((tutorial, index) => (
                            <motion.div
                                key={tutorial.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative bg-[#111] border border-gray-800 rounded-3xl p-8 flex flex-col items-center text-center hover:border-brand-orange/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/10 hover:-translate-y-2"
                            >
                                {/* Icon Container */}
                                <div className="mb-6 w-24 h-24 rounded-full bg-brand-black border border-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {tutorial.icon}
                                </div>

                                <h3 className="text-2xl font-bold font-display mb-4 text-white group-hover:text-brand-orange transition-colors">
                                    {tutorial.title}
                                </h3>

                                <p className="text-sm text-gray-400 mb-8 leading-relaxed line-clamp-3">
                                    {tutorial.description}
                                </p>

                                <Link
                                    href={`/tutorials/${tutorial.slug}`}
                                    className="mt-auto px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 transform group-hover:scale-105 active:scale-95"
                                >
                                    Start Learning!
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
