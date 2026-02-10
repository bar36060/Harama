import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";
import projectData from "@/data/projects/project-haifa-road.json";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function HaifaProjectPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section
                    className="relative py-40 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(10, 14, 26, 0.75), rgba(10, 14, 26, 0.6)), url('${projectData.heroMedia.url}')`,
                    }}
                >
                    <div className="container">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-4 text-sm">
                                <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full font-medium">
                                    {projectData.location}
                                </span>
                                <span className="text-neutral-300">{projectData.year}</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                {projectData.title}
                            </h1>
                            <p className="text-2xl text-neutral-200">
                                {projectData.shortSummary}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Challenge & Solution */}
                <section className="py-20">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">האתגר</h2>
                                <p className="text-lg text-neutral-300 leading-relaxed">
                                    {projectData.challenge}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">הפתרון</h2>
                                <p className="text-lg text-neutral-300 leading-relaxed">
                                    {projectData.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section className="py-20 bg-base-deep">
                    <div className="container">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-8">תוצאות</h2>
                            <div className="space-y-4">
                                {projectData.results.map((result, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 bg-base-elevated p-6 rounded-[var(--radius-lg)]"
                                    >
                                        <div className="w-8 h-8 bg-accent-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg
                                                className="w-5 h-5 text-accent-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-lg text-white">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Services */}
                <section className="py-20">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-white mb-8">שירותים קשורים</h2>
                        <div className="flex flex-wrap gap-3">
                            {projectData.relatedServices.map((serviceId) => (
                                <a
                                    key={serviceId}
                                    href={`/services/${serviceId}`}
                                    className="px-6 py-3 bg-base-elevated border border-neutral-600 rounded-md text-white hover:border-accent-primary hover:text-accent-primary transition-colors"
                                >
                                    {serviceId === "roads" && "סלילת כבישים ואספלט"}
                                    {serviceId === "earthworks" && "עבודות עפר וחפירה"}
                                    {serviceId === "infrastructure" && "תשתיות ופיתוח"}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-base-deep border-t-2 border-accent-primary">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            יש לכם פרויקט סלילה?
                        </h2>
                        <p className="text-xl text-neutral-300 mb-8">
                            נשמח לשמוע ולעזור להצליח
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
