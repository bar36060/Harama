"use client";

import { Section } from "@/components/layout/Section";
import { CapabilitiesTabs } from "@/components/home/CapabilitiesTabs";
import executionData from "@/data/capabilities/execution.json";
import equipmentData from "@/data/capabilities/equipment.json";
import safetyData from "@/data/capabilities/safety.json";
import managementData from "@/data/capabilities/management.json";

const capabilitiesTabs = [
    {
        id: executionData.id,
        label: executionData.title,
        title: executionData.headline,
        description: executionData.description,
        image: executionData.image.url,
        bullets: executionData.bulletPoints,
        cta: { text: executionData.cta.label, href: executionData.cta.url },
    },
    {
        id: equipmentData.id,
        label: equipmentData.title,
        title: equipmentData.headline,
        description: equipmentData.description,
        image: equipmentData.image.url,
        bullets: equipmentData.bulletPoints,
        cta: { text: equipmentData.cta.label, href: equipmentData.cta.url },
    },
    {
        id: safetyData.id,
        label: safetyData.title,
        title: safetyData.headline,
        description: safetyData.description,
        image: safetyData.image.url,
        bullets: safetyData.bulletPoints,
        cta: { text: safetyData.cta.label, href: safetyData.cta.url },
    },
    {
        id: managementData.id,
        label: managementData.title,
        title: managementData.headline,
        description: managementData.description,
        image: managementData.image.url,
        bullets: managementData.bulletPoints,
        cta: { text: managementData.cta.label, href: managementData.cta.url },
    },
];

export default function CapabilitiesSection() {
    return (
        <Section variant="glow" padding="tight">
            <div className="mb-8 text-center mx-auto max-w-3xl">
                <div className="text-sm font-semibold text-[#2E7CC4] mb-2 tracking-wide">
                    היכולות שלנו
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    ביצוע מושלם בכל שלב
                </h2>
            </div>

            <CapabilitiesTabs tabs={capabilitiesTabs} />
        </Section>
    );
}
