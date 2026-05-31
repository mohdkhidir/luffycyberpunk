// Direction A — Bottom-Left Anchor (original brief)
// Full-bleed hero video, content lower-left, solid Play + ghost Trailer.
// Features 50/50. News horizontal rows. Mega CTA. Footer.

function DirectionA() {
  return (
    <div className="wf-page">
      {/* HERO */}
      <section className="wf-hero wf-hero--A">
        <Slot label="HD HERO VIDEO — full-bleed loop (autoplay, muted)" dark className="wf-hero__media" style={{ position: "absolute", inset: 0, height: "100%" }} />
        <div className="wf-hero__scrim wf-hero__scrim--bl" />
        <NavBar />

        <div className="wf-hero__content wf-hero__content--bl">
          <ZoneTag>H1 + CTA · bottom-left · transparent over video</ZoneTag>
          <div className="wf-kicker">◆ CONCEPT TRAILER NOW STREAMING</div>
          <GameTitle align="left" size="lg" />
          <p className="wf-sub">A neon-drenched crossover action RPG. Three worlds collide in a fractured megacity.</p>
          <div className="wf-cta-row">
            <Btn variant="primary" big icon>PLAY THE GAME</Btn>
            <Btn variant="ghost" big icon>WATCH TRAILER</Btn>
          </div>
        </div>

        <div className="wf-hero__hint">SCROLL ↓</div>
      </section>

      {/* FEATURES — 50 / 50 */}
      <section className="wf-feat wf-feat--split">
        <div className="wf-feat__head">
          <ZoneTag>2 FEATURES · 50 / 50 split</ZoneTag>
          <h2 className="wf-h2">Inside the game</h2>
        </div>
        <div className="wf-feat__grid">
          <article className="wf-card">
            <Slot label="FEATURE ART 01" h={240} />
            <div className="wf-card__num">01</div>
            <h3 className="wf-h3">Crossover Combat</h3>
            <div className="wf-line wf-line--90" />
            <div className="wf-line wf-line--80" />
            <div className="wf-line wf-line--50" />
          </article>
          <article className="wf-card">
            <Slot label="FEATURE ART 02" h={240} />
            <div className="wf-card__num">02</div>
            <h3 className="wf-h3">Open Neon City</h3>
            <div className="wf-line wf-line--90" />
            <div className="wf-line wf-line--70" />
            <div className="wf-line wf-line--50" />
          </article>
        </div>
      </section>

      {/* NEWS — horizontal list rows */}
      <section className="wf-news">
        <div className="wf-news__head">
          <div>
            <ZoneTag>NEWS · 3 posts · horizontal rows</ZoneTag>
            <h2 className="wf-h2">Latest updates</h2>
          </div>
          <span className="wf-readmore">READ ALL NEWS →</span>
        </div>
        <div className="wf-news__list">
          <NewsRow tag="PATCH" date="MAY 28" title="Season 1 — The Grid Awakens goes live" />
          <NewsRow tag="DEVLOG" date="MAY 14" title="Designing the megacity skyline" />
          <NewsRow tag="EVENT" date="APR 30" title="Closed beta sign-ups now open" />
        </div>
      </section>

      <MegaCTA />
      <WFFooter />
    </div>
  );
}

Object.assign(window, { DirectionA });
