import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { tutorialData } from '@/data/tutorials';
import TutorialLayout from '@/components/tutorials/TutorialLayout';

export default function CourseOverview() {
    const router = useRouter();
    const { course } = router.query;
    const courseInfo = tutorialData[course];

    if (!courseInfo) {
        return <div className="text-center pt-32 text-white">Loading...</div>;
    }

    return (
        <TutorialLayout courseData={courseInfo} currentSlug={null}>
            <Head>
                <title>{courseInfo.title} | ByteNLearn</title>
                <meta name="description" content={courseInfo.description} />
            </Head>

            <div className="prose prose-invert max-w-none">
                <h1 className="text-brand-orange">{courseInfo.title}</h1>
                <p className="lead text-xl text-gray-300">{courseInfo.description}</p>

                <div className="mt-12 not-prose">
                    <h2 className="text-2xl font-bold mb-8 text-white font-display">Course Content</h2>

                    <div className="space-y-12">
                        {courseInfo.sections?.map((section, sIdx) => (
                            <div key={sIdx}>
                                <h3 className="text-xl font-bold mb-4 text-brand-orange/80 border-b border-brand-white/10 pb-2">
                                    {section.title}
                                </h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {section.lessons.map((lesson, lIdx) => (
                                        <Link
                                            key={lesson.slug}
                                            href={`/tutorials/${course}/${lesson.slug}`}
                                            className="group block p-4 bg-brand-white/5 border border-brand-white/10 rounded-xl hover:border-brand-orange/50 transition-all hover:bg-brand-white/10"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-bold text-sm shrink-0">
                                                    {lIdx + 1}
                                                </span>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                                                        {lesson.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TutorialLayout>
    );
}
