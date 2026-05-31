// Direction C — Top-Left HUD
// Hero content pinned top-left like a HUD overlay with stat readouts;
// CTAs stacked vertically (Play box over Watch-trailer box).
// Features as stacked full-width bands.

function DirectionC() {
  return (
    <div className="wf-page">
      {/* HERO — top-left HUD */}
      <section className="wf-hero wf-hero--C">
        <Slot label="HD HERO VIDEO — full-bleed loop (autoplay, muted)" dark className="wf-hero__media" style={{ position: "absolute", inset: 0, height: "100%" }} />
        <div className="wf-hero__scrim wf-hero__scrim--tl" />
        <NavBar />

        <div className="wf-hero__content wf-hero__content--tl">
          <ZoneTag>H1 + CTA · top-left HUD overlay</ZoneTag>
          <div className="wf-kicker">◆ CONCEPT TRAILER NOW STREAMING</div>
          <GameTitle align="left" size="md" />
          <p className="wf-sub">A neon-drenched crossover action RPG. Three worlds collide in a fractured megacity.</p>

          <div className="wf-cta-stack">
            <button className="wf-cta-box wf-cta-box--primary">
              <PlayIcon size={18} />
              <div className="wf-cta-box__txt">
                <span className="wf-cta-box__lg">PLAY THE GAME</span>
                <span className="wf-cta-box__sm">Free · PC · Console</span>
              </div>
            </button>
            <button className="wf-cta-box wf-cta-box--ghost">
              <PlayIcon size={18} />
              <div className="wf-cta-box__txt">
                <span className="wf-cta-box__lg">WATCH TRAILER</span>
                <span className="wf-cta-box__sm">2:14 · 4K</span>
              </div>
            </button>
          </div>
        </div>

        {/* HUD stat readouts bottom strip */}
        <div className="wf-hud-stats">
          <div className="wf-stat"><span className="wf-stat__k">PLAYERS</span><span className="wf-stat__v">2.4M</span></div>
          <div className="wf-stat"><span className="wf-stat__k">REGIONS</span><span className="wf-stat__v">06</span></div>
          <div className="wf-stat"><span className="wf-stat__k">RELEASE</span><span className="wf-stat__v">2026</span></div>
          <div className="wf-stat"><span className="wf-stat__k">RATING</span><span className="wf-stat__v">18+</span></div>
        </div>
      </section>

      {/* FEATURES — stacked full-width bands */}
      <section className="wf-feat wf-feat--bands">
        <div className="wf-feat__head">
          <ZoneTag>2 FEATURES · stacked full-width bands</ZoneTag>
          <h2 className="wf-h2">Inside the game</h2>
        </div>

        <article className="wf-band">
          <div className="wf-band__num">01</div>
          <div className="wf-band__body">
            <h3 className="wf-h3">Crossover Combat</h3>
            <div className="wf-line wf-line--70" />
            <div className="wf-line wf-line--50" />
          </div>
          <Slot label="FEATURE ART 01 — wide" h={180} w={460} className="wf-band__media" />
        </article>

        <article className="wf-band">
          <div className="wf-band__num">02</div>
          <div className="wf-band__body">
            <h3 className="wf-h3">Open Neon City</h3>
            <div className="wf-line wf-line--70" />
            <div className="wf-line wf-line--50" />
          </div>
          <Slot label="FEATURE ART 02 — wide" h={180} w={460} className="wf-band__media" />
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

      <MegaCTA stripes={false} />
      <WFFooter />
    </div>
  );
}

Object.assign(window, { DirectionC });
