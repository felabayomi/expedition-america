"use client";

import React, { useEffect, useState } from "react";

type CmsSection = {
  title?: string;
  subtitle?: string;
  body?: string;
  ctaLabel?: string;
  ctaUrl?: string;
};

export default function ContactPage() {
  const [hero, setHero] = useState<CmsSection | null>(null);
  const [details, setDetails] = useState<CmsSection | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://felix-platform-backend.onrender.com/api/expedition-america-standalone/content/export",
          {
            headers: {
              "cache-control": "no-store",
            },
          }
        );
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        const contactPage = data?.pages?.contact;
        setHero(contactPage?.sections?.["contact-hero"] || null);
        setDetails(contactPage?.sections?.["contact-details"] || null);
      } catch (error) {
        console.error("Failed to load contact content", error);
      }
    };

    fetchContent();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">{hero?.title || "Contact Us"}</h1>
      <section className="mb-8 w-full max-w-md text-center">
        <p className="text-lg mb-2">{hero?.subtitle || "Have questions or want to reach out?"}</p>
        <p className="mb-1">Email: <a className="text-blue-600 underline" href="mailto:support@expeditionamerica.us">support@expeditionamerica.us</a></p>
        <p className="mb-1">Phone: <a className="text-blue-600 underline" href="tel:+12406642270">+1 (240) 664-2270</a></p>
        {details?.body ? <p className="mt-3 text-sm text-slate-600 whitespace-pre-line">{details.body}</p> : null}
      </section>
      <section className="w-full flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
        <div className="rounded-lg shadow-lg overflow-hidden border border-gray-200 w-full max-w-3xl mx-auto flex justify-center" style={{ maxHeight: '1200px', overflowY: 'auto' }}>
          <iframe
            src="https://appointment.expeditionamerica.us/"
            title="Appointment Calendar"
            width="100%"
            height="1200"
            className="w-full h-[1200px] border-none"
            style={{ minHeight: '1200px', maxWidth: '100%', display: 'block', margin: '0 auto', border: 'none' }}
            allowFullScreen
            scrolling="no"
          />
        </div>
      </section>
    </main>
  );
}
