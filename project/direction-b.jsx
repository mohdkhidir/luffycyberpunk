// Direction B — Centered Cinematic
// Hero content centered with HUD corner frame, circular trailer play button
// above a centered title, single Play CTA below. Features alternate L/R.

function HudCorners() {
  return (
    <div className="wf-hud-frame" aria-hidden="true">
      <span className="wf-hud-c wf-hud-c--tl" />
      <span className="wf-hud-c wf-hud-c--tr" />
      <span className="wf-hud-c wf-hud-c--bl" />
      <span className="wf-hud-c wf-hud-c--br" />
    </div>
  );
}

function DirectionB() {
  return (
    <div className="wf-page">
      {/* HERO — centered */}
      <section className="wf-hero wf-hero--B">
        <Slot label="HD HERO VIDEO — full-bleed loop (autoplay, muted)" dark className="wf-hero__media" style={{ position: "absolute", inset: 0, height: "100%" }} />
        <div className="wf-hero__scrim wf-hero__scrim--center" />
        <NavBar />
        <HudCorners />

        <div className="wf-hero__content wf-hero__content--center">
          <ZoneTag>H1 + CTA · centered cinematic</ZoneTag>
          <button className="wf-trailer-circle">
            <PlayIcon size={22} />
            <span>WATCH<br/>TRAILER</span>
          </button>
          <div className="wf-kicker">◆ CONCEPT TRAILER NOW STREAMING</div>
          <GameTitle align="center" size="xl" />
          <p className="wf-sub wf-sub--center">A neon-drenched crossover action RPG. Three worlds collide in a fractured megacity.</p>
          <div className="wf-cta-row wf-cta-row--center">
            <Btn variant="primary" big icon>PLAY THE GAME</Btn>
          </div>
        </div>
      </section>

      {/* FEATURES — alternating rows */}
      <section className="wf-feat wf-feat--alt">
        <div className="wf-feat__head wf-feat__head--center">
          <ZoneTag>2 FEATURES · alternating rows</ZoneTag>
          <h2 className="wf-h2">Inside the game</h2>
        </div>

        <article className="wf-altrow">
          <Slot label="FEATURE ART 01" h={300} className="wf-altrow__media" />
          <div className="wf-altrow__body">
            <div className="wf-card__num">01</div>
            <h3 className="wf-h3">Crossover Combat</h3>
            <div className="wf-line wf-line--90" />
            <div className="wf-line wf-line--80" />
            <div className="wf-line wf-line--40" />
            <span className="wf-readmore wf-readmore--sm">LEARN MORE →</span>
          </div>
        </article>

        <article className="wf-altrow wf-altrow--rev">
          <Slot label="FEATURE ART 02" h={300} className="wf-altrow__media" />
          <div className="wf-altrow__body">
            <div className="wf-card__num">02</div>
            <h3 className="wf-h3">Open Neon City</h3>
            <div className="wf-line wf-line--90" />
            <div className="wf-line wf-line--70" />
            <div className="wf-line wf-line--40" />
            <span className="wf-readmore wf-readmore--sm">LEARN MORE →</span>
          </div>
        </article>
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

Object.assign(window, { DirectionB });
