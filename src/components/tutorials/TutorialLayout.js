import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

export default function TutorialLayout({ children, courseData, currentSlug }) {
    const router = useRouter();
    const { course } = router.query;
    const [openSections, setOpenSections] = useState({});
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Initialize open sections based on current slug or default to all open
    if (!courseData) return null;

    const toggleSection = (index) => {
        setOpenSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const SidebarContent = () => (
        <>
            <h3 className="text-xl font-display font-bold mb-6 text-brand-orange uppercase tracking-wider">
                {courseData.title}
            </h3>

            <div className="space-y-4 ">
                {courseData.sections?.map((section, idx) => {
                    const isOpen = openSections[idx] === true; // Default closed
                    return (
                        <div key={idx} className="border-b border-brand-white/10 last:border-0 pb-2">
                            <button
                                onClick={() => toggleSection(idx)}
                                className="flex items-center justify-between w-full text-left py-2 text-sm font-bold text-gray-300 hover:text-white uppercase tracking-wide transition-colors"
                            >
                                {section.title}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.ul
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="space-y-1 overflow-hidden ml-2"
                                    >
                                        {section.lessons.map((lesson) => {
                                            const isActive = currentSlug === lesson.slug;
                                            return (
                                                <li key={lesson.slug}>
                                                    <Link
                                                        href={`/tutorials/${course}/${lesson.slug}`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border-l-2 ${isActive
                                                            ? 'border-brand-orange bg-brand-white/5 text-white'
                                                            : 'border-transparent text-gray-400 hover:text-white hover:bg-brand-white/5'
                                                            }`}
                                                    >
                                                        {lesson.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </>
    );

    const BackLink = () => (
        <Link href="/tutorials" className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-orange mb-8 transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Tutorials
        </Link>
    );

    return (
        <div className="flex flex-col md:flex-row bg-brand-black min-h-screen text-brand-white pt-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden px-6 py-4 border-b border-brand-white/10 flex justify-between items-center sticky top-16 bg-brand-black z-30">
                <span className="font-bold text-brand-orange">{courseData.title}</span>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-white hover:text-brand-orange transition-colors"
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="fixed inset-0 top-28 z-40 bg-brand-black/95 backdrop-blur-md p-6 overflow-y-auto md:hidden"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className="mb-0">
                                <BackLink />
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-gray-400 hover:text-white bg-brand-white/10 rounded-lg -mt-8"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <SidebarContent />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="w-64 fixed left-0 top-24 bottom-0 overflow-y-auto border-r border-brand-white/10 hidden md:block px-6 py-8 scrollbar-thin scrollbar-thumb-brand-orange scrollbar-track-transparent custom-scrollbar">
                <BackLink />
                <SidebarContent />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 md:ml-64 p-6 md:p-12 max-w-4xl mx-auto w-full">
                {children}
            </main>
        </div>
    );
}
