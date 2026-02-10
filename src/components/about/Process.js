import { motion } from 'framer-motion';

const steps = [
    {
        title: "Enrollment",
        description: "Start your journey by choosing the right path. Our counselors help align your interests with industry trends.",
        icon: "📝",
        number: "01"
    },
    {
        title: "Fundamentals",
        description: "Build a strong foundation. Master the core concepts of programming, algorithms, and logic.",
        icon: "🧱",
        number: "02"
    },
    {
        title: "Deep Dive",
        description: "Advanced modules in your chosen specialization, taught by industry experts with real-world context.",
        icon: "🧠",
        number: "03"
    },
    {
        title: "Build Projects",
        description: "Apply your knowledge. Build clones, tools, and apps. Stop watching tutorials and start coding.",
        icon: "💻",
        number: "04"
    },
    {
        title: "Capstone",
        description: "Work on a major project that solves a real problem. This becomes the highlight of your portfolio.",
        icon: "🏆",
        number: "05"
    },
    {
        title: "Career Launch",
        description: "Resume building, mock interviews, and direct referrals to our hiring partners.",
        icon: "🚀",
        number: "06"
    }
];

export default function Process() {
    return (
        <section className="py-20 md:py-32 bg-brand-white dark:bg-brand-black transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black dark:text-brand-white"
                    >
                        Your <span className="text-brand-orange">Journey</span>.
                    </motion.h2>
                    <p className="text-brand-black/60 dark:text-brand-white/60 max-w-2xl mx-auto text-lg">
                        From beginner to professional, our structured path ensures you succeed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-brand-white dark:bg-brand-black border border-brand-black/5 dark:border-brand-white/10 p-8 rounded-3xl relative group hover:shadow-2xl hover:shadow-brand-orange/5 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl font-display font-bold text-brand-black dark:text-brand-white outline-text">
                                    {step.number}
                                </span>
                            </div>

                            <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-3xl mb-6 text-brand-orange group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>

                            <h3 className="text-2xl font-display font-bold mb-4 text-brand-black dark:text-brand-white">
                                {step.title}
                            </h3>
                            <p className="text-brand-black/70 dark:text-brand-white/70 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
