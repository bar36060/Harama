"use client";

import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import haifaData from "@/data/projects/project-haifa-road.json";
import raananaData from "@/data/projects/project-raanana-residential.json";
import telAvivData from "@/data/projects/project-tel-aviv-water.json";

interface Project {
    id: string;
    slug: string;
    title: string;
    shortSummary: string;
    heroMedia: {
        url: string;
        alt: string;
    };
    order: number;
}

const projects: Project[] = [haifaData, raananaData, telAvivData].sort(
    (a, b) => a.order - b.order
);

export default function ProjectsSection() {
    return (
        <Section variant="wave" dividerTop>
            {/* Enterprise Section Header - Centered */}
            <Reveal className="w-full">
                <div className="mb-20 text-center mx-auto max-w-3xl" style={{ marginBottom: '80px' }}>
                    <div className="text-sm font-semibold text-[#2E7CC4] mb-3 tracking-wide">
                        הפרויקטים שלנו
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
                        פרויקטים במלוא הקנה מידה
                    </h2>
                </div>
            </Reveal>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projects.map((project, index) => (
                    <Reveal key={project.slug} delay={index * 0.1} variant="fadeUp">
                        <Link
                            href={`/projects/${project.slug}`}
                            className="
              group block bg-[#151B2E]/80 backdrop-blur-md rounded-lg overflow-hidden
              border border-[#2D3748]
              hover:border-[#2E7CC4] transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-lg h-full
            "
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={project.heroMedia.url}
                                    alt={project.heroMedia.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-10" style={{ padding: '40px' }}>
                                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                <p className="text-neutral-300 leading-relaxed mb-6">{project.shortSummary}</p>
                                <span className="inline-flex items-center gap-2 text-[#2E7CC4] font-medium">
                                    קרא עוד
                                    <svg className="w-5 h-5 flip-rtl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>

            {/* View All Projects Link - Centered */}
            <Reveal className="w-full" delay={0.3}>
                <div className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-[#2E7CC4] font-medium hover:text-[#4A94D9] transition-colors duration-200"
                    >
                        לכל הפרויקטים
                        <svg className="w-5 h-5 flip-rtl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </Reveal>
        </Section>
    );
}
