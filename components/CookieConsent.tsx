"use client";

import { useState, useEffect } from "react";

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Check if user has already set preferences
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Show banner after 2 seconds
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        savePreferences(allAccepted);
    };

    const acceptNecessary = () => {
        savePreferences(preferences);
    };

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem("cookieConsent", JSON.stringify(prefs));
        localStorage.setItem("consentVersion", "v1.0");
        setIsVisible(false);
        // TODO: Initialize analytics/marketing based on preferences
        console.log("Cookie preferences saved:", prefs);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="container max-w-5xl">
                <div className="bg-base-elevated border border-neutral-600 rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] p-6 md:p-8">
                    {!showSettings ? (
                        // Simple view
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    אנחנו משתמשים בקובצי Cookie
                                </h3>
                                <p className="text-neutral-300 leading-relaxed">
                                    אנחנו משתמשים בקובצי Cookie כדי לשפר את חווית הגלישה שלך ולנתח
                                    את התנועה באתר. באפשרותך לקבל הכל או לבחור העדפות.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="
                    px-6 py-3 border border-neutral-600 text-white rounded-md
                    hover:border-accent-primary hover:text-accent-primary
                    transition-colors duration-200 font-medium
                  "
                                >
                                    הגדרות
                                </button>
                                <button
                                    onClick={acceptNecessary}
                                    className="
                    px-6 py-3 border border-neutral-600 text-white rounded-md
                    hover:border-neutral-500
                    transition-colors duration-200 font-medium
                  "
                                >
                                    רק הכרחיים
                                </button>
                                <button
                                    onClick={acceptAll}
                                    className="
                    px-6 py-3 bg-accent-primary text-white rounded-md
                    hover:bg-accent-light
                    transition-colors duration-200 font-medium
                  "
                                >
                                    קבל הכל
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Settings view
                        <div>
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">הגדרות Cookie</h3>
                                <p className="text-neutral-300 text-sm">
                                    בחר אילו קובצי Cookie ברצונך לאפשר
                                </p>
                            </div>

                            <div className="space-y-4 mb-6">
                                {/* Necessary */}
                                <div className="flex items-start justify-between gap-4 p-4 bg-base-deep rounded-md">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-white mb-1">הכרחיים</h4>
                                        <p className="text-sm text-neutral-400">
                                            נדרשים לתפקוד בסיסי של האתר
                                        </p>
                                    </div>
                                    <div className="text-neutral-500 text-sm">תמיד פעיל</div>
                                </div>

                                {/* Analytics */}
                                <div className="flex items-start justify-between gap-4 p-4 bg-base-deep rounded-md">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-white mb-1">ניתוח וסטטיסטיקה</h4>
                                        <p className="text-sm text-neutral-400">
                                            עוזרים לנו להבין כיצד משתמשים מבקרים באתר
                                        </p>
                                    </div>
                                    <label className="relative inline-block w-12 h-6">
                                        <input
                                            type="checkbox"
                                            checked={preferences.analytics}
                                            onChange={(e) =>
                                                setPreferences({ ...preferences, analytics: e.target.checked })
                                            }
                                            className="sr-only peer"
                                        />
                                        <span className="absolute inset-0 bg-neutral-600 rounded-full peer-checked:bg-accent-primary transition-colors cursor-pointer"></span>
                                        <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-[-24px]"></span>
                                    </label>
                                </div>

                                {/* Marketing */}
                                <div className="flex items-start justify-between gap-4 p-4 bg-base-deep rounded-md">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-white mb-1">שיווק</h4>
                                        <p className="text-sm text-neutral-400">
                                            משמשים להצגת תוכן ופרסומות רלוונטיים
                                        </p>
                                    </div>
                                    <label className="relative inline-block w-12 h-6">
                                        <input
                                            type="checkbox"
                                            checked={preferences.marketing}
                                            onChange={(e) =>
                                                setPreferences({ ...preferences, marketing: e.target.checked })
                                            }
                                            className="sr-only peer"
                                        />
                                        <span className="absolute inset-0 bg-neutral-600 rounded-full peer-checked:bg-accent-primary transition-colors cursor-pointer"></span>
                                        <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-[-24px]"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 justify-end">
                                <button
                                    onClick={() => setShowSettings(false)}
                                    className="
                    px-6 py-3 border border-neutral-600 text-white rounded-md
                    hover:border-neutral-500
                    transition-colors duration-200 font-medium
                  "
                                >
                                    חזור
                                </button>
                                <button
                                    onClick={acceptNecessary}
                                    className="
                    px-6 py-3 bg-accent-primary text-white rounded-md
                    hover:bg-accent-light
                    transition-colors duration-200 font-medium
                  "
                                >
                                    שמור העדפות
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
