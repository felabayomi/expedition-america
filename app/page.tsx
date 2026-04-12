'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [cities, setCities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          '/api/cms-export',
          {
            headers: {
              'cache-control': 'no-store',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        
        // Transform API format to component format
        // ordered[] contains full section objects; only include city-* sections
        const homeSection = data.pages?.home;
        const citiesData = (homeSection?.ordered as any[] ?? [])
          .filter((section: any) => section.sectionKey?.startsWith('city-') && section.imageUrl)
          .map((section: any) => ({
            name: section.title || '',
            description: section.subtitle || '',
            image: section.imageUrl || '',
            link: section.ctaUrl || '#',
            ctaLabel: section.ctaLabel || '',
          }));

        setCities(citiesData);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch cities:', err);
        setError(err instanceof Error ? err.message : 'Failed to load cities');
        setCities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <main style={{ fontFamily: "Arial", margin: 0 }}>

      {/* HERO */}
      <section
        style={{
          padding: "200px 40px",
          textAlign: "center",
          backgroundImage:
            "url('https://mediahost.app/api/media/serve/ccd43c58e3d59e523a9df8628c11723c?w=1600&h=700&fit=crop&crop=center&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
          Discover America's Cities Like a Local
        </h1>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/deals"
            style={{
              display: "inline-block",
              padding: "16px 30px",
              fontSize: "18px",
              background: "#000",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              textDecoration: "none"
            }}
          >
            Explore Deals
          </a>
          <a
            href="https://plan.citydiscoverer.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "16px 30px",
              fontSize: "18px",
              background: "#0070f3",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              textDecoration: "none"
            }}
          >
            Plan Itinerary
          </a>
        </div>
      </section>

      {/* FEATURED CITIES */}
      <section style={{ padding: "80px 40px" }}>
        <h2
          style={{
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Featured Cities
        </h2>

        {loading && (
          <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
            <p>Loading featured cities...</p>
          </div>
        )}

        {error && (
          <div style={{ textAlign: "center", padding: "40px", color: "#d32f2f" }}>
            <p>Unable to load cities. Please try again later.</p>
          </div>
        )}

        {!loading && !error && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 340px))",
              gap: "24px",
              maxWidth: "1200px",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            {cities.map((city) => (
              <div
                key={city.name}
                style={{
                  border: "1px solid #eee",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={city.image}
                  alt={city.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div style={{ padding: "16px 20px 20px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#111" }}>{city.name}</h3>
                    <p style={{ margin: "0 0 16px", fontSize: "14px", color: "#666", lineHeight: "1.5" }}>
                      {city.description}
                    </p>
                  </div>
                  {city.link && city.link !== '#' && (
                    <a
                      href={city.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        fontSize: "14px",
                        fontWeight: "600",
                        background: "#0070f3",
                        color: "#fff",
                        borderRadius: "8px",
                        textDecoration: "none",
                        alignSelf: "center",
                      }}
                    >
                      {city.ctaLabel || `View ${city.name}`}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
</section>

      {/* EXPERIENCE SECTION */}
      <section
        style={{
          padding: "100px 60px",
          background: "#fafafa",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px" }}>Experience Cities Differently</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Expedition America connects travelers with the energy of each city —
          from rooftop lounges and art districts to hidden cafés, live music,
          street culture, and community-driven experiences.
        </p>

        <a
          href="https://view.citydiscoverer.ai/request"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "14px 26px",
            fontSize: "16px",
            background: "#27ae60",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Start Exploring with our Team
        </a>
      </section>

    </main>
  );
}