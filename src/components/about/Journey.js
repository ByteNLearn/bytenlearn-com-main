import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
    {
        year: "2020",
        title: "The Vision",
        description: "ByteNLearn was founded to bridge the massive gap between college degrees and industry-ready skills in Moradabad.",
        alignment: "start"
    },
    {
        year: "2021",
        title: "First Batch",
        description: "Launched our first Full Stack Web Development cohort. 100% of our pilot students secured internships.",
        alignment: "end"
    },
    {
        year: "2022",
        title: "Expanding Curriculum",
        description: "Introduced advanced courses in AI, Machine Learning, and Cyber Security to keep pace with global trends.",
        alignment: "start"
    },
    {
        year: "2023",
        title: "EdTech Innovation",
        description: "Recognized as the 'Best Tech Learning Platform' in Western UP, empowering hundreds of students.",
        alignment: "end"
    },
    {
        year: "2024",
        title: "Global Community",
        description: "Our alumni network spans 5 countries, working in top product-based companies and successful startups.",
        alignment: "start"
    }
];

export default function Journey() {
    return (
        <section className="py-20 bg-brand-black text-brand-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">Journey</span>.
                    </h2>
                    <p className="text-brand-white/60 max-w-2xl mx-auto text-lg">
                        From a humble dorm room idea to a global digital agency.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-orange via-brand-pink to-transparent md:-translate-x-1/2 opacity-30" />

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center mb-16 md:mb-24 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Side */}
                            <div className="pl-12 md:pl-0 md:w-1/2 md:px-12 w-full">
                                <div className={`bg-white/5 border border-white/10 p-8 rounded-2xl relative hover:border-brand-pink/30 transition-colors group ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <span className="text-6xl font-display font-bold text-brand-white/5 absolute -top-8 right-4 group-hover:text-brand-white/10 transition-colors">
                                        {milestone.year}
                                    </span>
                                    <h3 className="text-2xl font-bold font-display text-brand-orange mb-2">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-brand-white/70 text-sm leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-pink border-4 border-black box-content shadow-[0_0_20px_rgba(255,46,99,0.5)] md:-translate-x-1/2 mt-[-2rem] md:mt-0 z-10" />

                            {/* Spacer for other side */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
