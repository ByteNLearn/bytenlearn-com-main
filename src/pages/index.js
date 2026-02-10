import Head from "next/head";
import Script from "next/script";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Tutorials from "@/components/home/Tutorials";
import NotesSection from "@/components/home/NotesSection";
import Internships from "@/components/home/Internships";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>ByteNLearn | Premier Learning Platform for AI, Web & App Development</title>
        <meta name="description" content="Master Computer Science, AI, and Web Development with ByteNLearn. The best learning platform for MERN Stack, Python, Cyber Security, and Machine Learning." />
        <meta name="keywords" content="Best Coding Platform, AI Learning, Web Development Course, App Development Training, Cyber Security Classes, ByteNLearn, MERN Stack, Data Science" />
        <meta name="author" content="ByteNLearn" />
        <link rel="canonical" href="https://bytenlearn.in" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bytenlearn.in/" />
        <meta property="og:title" content="ByteNLearn | Master the Future of Tech" />
        <meta property="og:description" content="Join ByteNLearn to master AI, Web Development, and Cyber Security. We turn students into industry-ready tech professionals." />
        <meta property="og:image" content="https://bytenlearn.in/images/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bytenlearn.in/" />
        <meta property="twitter:title" content="ByteNLearn | Premier Tech Learning Platform" />
        <meta property="twitter:description" content="Master AI, Web, and App Development with expert-led courses at ByteNLearn." />
        <meta property="twitter:image" content="https://bytenlearn.in/images/logo.png" />
      </Head>

      {/* Structured Data for SEO */}
      <Script id="structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "ByteNLearn",
            "image": "https://bytenlearn.in/images/logo.png",
            "url": "https://bytenlearn.in",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Moradabad",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/bytenlearn",
              "https://www.instagram.com/bytenlearn",
              "https://www.linkedin.com/company/bytenlearn"
            ],
            "description": "ByteNLearn is a premier learning platform for Computer Science, AI, and modern tech skills."
          }
        `}
      </Script>

      <Hero />
      <About />
      <Tutorials />
      <NotesSection />
      <Blog />
      <Internships />
      <Contact />
    </>
  );
}
