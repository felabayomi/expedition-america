export default function Home() {
  const cities = [
    {
      name: "New York",
      description: "Discover skyline energy, borough culture, food, nightlife.",
      image:
        "https://mediahost.app/api/media/serve/9e299a0c06586017049de94298aca9c8?w=1200&h=800&fit=fill&q=80",
      link: "https://view.citydiscoverer.ai/guide/guide-1771859354952-4t7xi961f",
    },
    {
      name: "Chicago",
      description:
        "Experience lakefront neighborhoods, architecture, deep flavor, music.",
      image:
        "https://mediahost.app/api/media/serve/724f5fd545aa4192d0a7daeb6702cd4b?w=1200&h=800&fit=fill&q=80",
      link: "https://view.citydiscoverer.ai/guide/guide-1773624777197-m7ubf4xfb",
    },
    {
      name: "Miami",
      description: "Chase coastal vibes, art, rhythms, flavors, nightlife.",
      image:
        "https://mediahost.app/api/media/serve/2c9188045dd02cf3e6ee1f82a13d430d?w=1200&h=800&fit=fill&q=80",
      link: "https://view.citydiscoverer.ai/guide/guide-1773625213797-hg5yh4mbw",
    },
    {
      name: "Los Angeles",
      description:
        "Find creative districts, sunshine, cuisine, style, scenes.",
      image:
        "https://mediahost.app/api/media/serve/ec2141f74c0deb143ae805870ed8b76a?w=1200&h=800&fit=fill&q=80",
      link: "https://view.citydiscoverer.ai/guide/guide-1773625446163-4ftgk5mz7",
    },
    {
      name: "Austin",
      description: "Dive into live music, tacos, trails, culture.",
      image:
        "https://mediahost.app/api/media/serve/88c385abd6bb06057665592faf9040c0?w=1200&h=800&fit=fill&q=80",
      link: "https://view.citydiscoverer.ai/guide/guide-1773625820913-ykaxhij5s",
    },
    {
      name: "Nashville",
      description:
        "Feel honky-tonks, heritage, hot chicken, creative spirit.",
      image:
        "https://mediahost.app/api/media/serve/bc393f73bf155047848fb16a6b1505eb?w=1200&h=800&fit=fill&q=80",
      link: "https://view.citydiscoverer.ai/guide/guide-1773625659740-u6qg2k8cf",
    },
    {
      name: "Cumberland, MD",
      description:
        "Explore mountain charm, history, trails, shops, culture.",
      image:
        "https://mediahost.app/api/media/serve/b8d6aefbb772dcb526e4524418064f58?w=1200&h=800&fit=fill&q=80",
      link: "https://view.citydiscoverer.ai/guide/guide-1773626074863-be7bkjcxs",
    },
    {
      name: "Morgantown, WV",
      description: "Enjoy college energy, river views, food, events.",
      image:
        "https://mediahost.app/api/media/serve/f6a3fcbb68bd45ce352c8df5974c8f7a?w=1200&h=800&fit=fill&q=80",
      link: "https://view.citydiscoverer.ai/guide/guide-1773626265200-2uqm13sef",
    },
  ];

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
            href="https://discoverer.city"
            target="_blank"
            rel="noopener noreferrer"
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
            Explore Cities
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
gap: "30px",
maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {cities.map((city) => (
  <a
    key={city.name}
    href={city.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "10px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        cursor: "pointer"
      }}
    >
      <img
        src={city.image}
        alt={city.name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "20px", textAlign: "center" }}>
        <h3>{city.name}</h3>
        <p style={{ fontSize: "14px", color: "#666" }}>
          {city.description}
        </p>
      </div>
    </div>
  </a>
))}
      </div>
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