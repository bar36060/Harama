const values = [
    {
        id: "execution-standard",
        title: "סטנדרט ביצוע",
        description:
            "רמת ביצוע מקצועית ועקבית בכל פרויקט - מהתכנון הראשוני ועד למסירה הסופית.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        ),
    },
    {
        id: "site-responsibility",
        title: "אחריות בשטח",
        description:
            "מחויבות מלאה לבטיחות, איכות וזמנים - עם נוכחות ניהולית צמודה בכל אתר.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
        ),
    },
    {
        id: "project-communication",
        title: "תקשורת שמנהלת פרויקט",
        description:
            "עדכונים שוטפים, שקיפות מלאה ותיאום הדוק עם כל הגורמים - לוודא שהפרויקט עובד.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            </svg>
        ),
    },
];

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";

export default function ValuesSection() {
    return (
        <Section variant="glow">
            {/* Note: variant="glow" adds a subtle radial burst behind content */}
            {/* Enterprise Section Header - Centered */}
            <Reveal className="w-full">
                <div className="mb-10 text-center mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">הערכים שלנו</h2>
                </div>
            </Reveal>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                    <Reveal key={value.id} delay={index * 0.1} variant="fadeUp" className="h-full">
                        <div
                            className="
              bg-[#151B2E] rounded-lg p-6
              border border-[#2D3748]
              hover:border-[#2E7CC4] transition-colors duration-300 h-full
            "
                        >
                            <div className="w-14 h-14 bg-[#2E7CC4]/10 rounded-full flex items-center justify-center text-[#2E7CC4] mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-neutral-300 leading-relaxed">{value.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
