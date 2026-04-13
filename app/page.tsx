'use client';

import { useEffect, useState } from 'react';
import styles from './home.module.css';

type City = {
  name: string;
  description: string;
  image: string;
  link: string;
  ctaLabel: string;
};

export default function Home() {
  const [cities, setCities] = useState<City[]>([]);
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
            description: section.body || section.subtitle || '',
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
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Discover America&apos;s Cities Like a Local</h1>

          <div className={styles.heroActions}>
            <a href="/deals" className={`${styles.btn} ${styles.btnSecondary}`}>
              Explore Deals
            </a>
            <a
              href="https://plan.citydiscoverer.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Plan Itinerary
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.citiesSection}`}>
        <header className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Featured Cities</h2>
          <p className={styles.sectionCopy}>
            Dive into city guides tailored for real-world travel, from iconic districts to hidden local gems.
          </p>
        </header>

        {loading && (
          <div className={`${styles.notice} ${styles.noticeLoading}`}>
            <p>Loading featured cities...</p>
          </div>
        )}

        {error && (
          <div className={`${styles.notice} ${styles.noticeError}`}>
            <p>Unable to load cities. Please try again later.</p>
          </div>
        )}

        {!loading && !error && (
          <div className={styles.grid}>
            {cities.map((city) => (
              <article key={city.name} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <img src={city.image} alt={city.name} className={styles.cardImage} />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cityTitle}>{city.name}</h3>
                  <p className={styles.cityCopy}>{city.description}</p>
                  {city.link && city.link !== '#' && (
                    <a
                      href={city.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cityCta}
                    >
                      {city.ctaLabel || `View ${city.name}`}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className={`${styles.section} ${styles.experience}`}>
        <div className={styles.experienceInner}>
          <h2 className={styles.sectionTitle}>Experience Cities Differently</h2>
          <p className={styles.experienceText}>
            Expedition America connects travelers with the energy of each city, from rooftop lounges
            and art districts to hidden cafes, live music, and community-driven experiences.
          </p>
          <a
            href="https://view.citydiscoverer.ai/request"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
            style={{ marginTop: '24px' }}
          >
            Start Exploring with Our Team
          </a>
        </div>
      </section>
    </main>
  );
}