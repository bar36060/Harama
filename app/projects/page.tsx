import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Import project data
import raananaData from "@/data/projects/project-raanana-residential.json";
import telAvivData from "@/data/projects/project-tel-aviv-water.json";
import haifaData from "@/data/projects/project-haifa-road.json";

interface Project {
    id: string;
    slug: string;
    title: string;
    shortSummary: string;
    location: string;
    category: string;
    year?: number;
    heroMedia: {
        url: string;
        alt: string;
    };
    isFeatured: boolean;
    order: number;
}

const projects: Project[] = [raananaData, telAvivData, haifaData].sort(
    (a, b) => a.order - b.order
);

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section className="py-20 bg-base-deep">
                    <div className="container">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            הפרויקטים שלנו
                        </h1>
                        <p className="text-xl text-neutral-300 max-w-3xl">
                            מבחר פרויקטים שביצענו בהצלחה ב-20 השנים האחרונות
                        </p>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-20">
                    <div className="container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group bg-base-elevated rounded-[var(--radius-lg)] overflow-hidden border border-transparent hover:border-accent-primary hover:-translate-y-0.5 transition-all duration-220"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={project.heroMedia.url}
                                            alt={project.heroMedia.alt}
                                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-320"
                                        />
                                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-base-deep/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                                            {project.location}
                                            {project.year && ` • ${project.year}`}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-white mb-3">
                                            {project.title}
                                        </h2>
                                        <p className="text-neutral-300 mb-4 line-clamp-2">
                                            {project.shortSummary}
                                        </p>
                                        <div className="text-sm text-neutral-400">
                                            {project.category === "earthworks" && "עבודות עפר"}
                                            {project.category === "infrastructure" && "תשתיות"}
                                            {project.category === "roads" && "סלילה"}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-base-deep">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            רוצים פרויקט כזה?
                        </h2>
                        <p className="text-xl text-neutral-300 mb-8">
                            בואו נדבר על הפרויקט הבא שלכם
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="text-lg px-8 shadow-xl shadow-blue-500/20">
                                צור קשר
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingPhoneCTA />
        </>
    );
}
