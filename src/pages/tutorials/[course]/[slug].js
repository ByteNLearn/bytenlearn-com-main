import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { tutorialData } from '@/data/tutorials';
import TutorialLayout from '@/components/tutorials/TutorialLayout';

export default function LessonPage() {
    const router = useRouter();
    const { course, slug } = router.query;
    const courseInfo = tutorialData[course];

    if (!courseInfo) {
        return <div className="text-center pt-32 text-white">Course not found</div>;
    }

    // Flatten all lessons from sections to find current, prev, and next
    const allLessons = courseInfo.sections?.flatMap(section => section.lessons) || [];
    const lesson = allLessons.find((l) => l.slug === slug);

    if (!lesson) {
        return <div className="text-center pt-32 text-white">Lesson not found</div>;
    }

    const currentIndex = allLessons.findIndex((l) => l.slug === slug);
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

    return (
        <TutorialLayout courseData={courseInfo} currentSlug={slug}>
            <Head>
                <title>{lesson.title} - {courseInfo.title} | ByteNLearn</title>
                <meta name="description" content={lesson.content.substring(0, 160)} />
            </Head>

            <article className="prose prose-invert max-w-none">
                <h1 className="text-brand-orange !mt-0">{lesson.title}</h1>
                <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>{lesson.content}</p>
                </div>
            </article>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-brand-white/10 no-underline">
                {prevLesson ? (
                    <Link
                        href={`/tutorials/${course}/${prevLesson.slug}`}
                        className="px-6 py-3 bg-brand-white/5 hover:bg-brand-orange text-white rounded-lg transition-colors flex items-center gap-2 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Previous: {prevLesson.title}
                    </Link>
                ) : <div />}

                {nextLesson ? (
                    <Link
                        href={`/tutorials/${course}/${nextLesson.slug}`}
                        className="px-6 py-3 bg-brand-white/5 hover:bg-brand-orange text-white rounded-lg transition-colors flex items-center gap-2 group"
                    >
                        Next: {nextLesson.title}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                ) : <div />}
            </div>
        </TutorialLayout>
    );
}
