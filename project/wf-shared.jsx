// Shared wireframe primitives — dark greyscale + blood red, mid-fi
// Exported to window for use by direction files + main canvas.

const PAGE_W = 1440;

// Striped placeholder for video / imagery zones
function Slot({ label, h, w, className = "", style = {}, dark = false }) {
  return (
    <div className={"wf-slot " + (dark ? "wf-slot--dark " : "") + className}
         style={{ height: h, width: w, ...style }}>
      <span className="wf-slot__tag">{label}</span>
    </div>
  );
}

// Play triangle glyph
function PlayIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 12" aria-hidden="true"
         style={{ display: "block", flex: "none" }}>
      <path d="M0 0 L10 6 L0 12 Z" fill="currentColor" />
    </svg>
  );
}

// Buttons
function Btn({ children, variant = "primary", icon = false, full = false, big = false }) {
  return (
    <button className={`wf-btn wf-btn--${variant} ${full ? "wf-btn--full" : ""} ${big ? "wf-btn--big" : ""}`}>
      {icon && <PlayIcon size={big ? 16 : 13} />}
      <span>{children}</span>
    </button>
  );
}

// Top navigation bar (overlaid on hero)
function NavBar({ overlay = true }) {
  return (
    <header className={"wf-nav " + (overlay ? "wf-nav--overlay" : "")}>
      <div className="wf-nav__logo">
        <span className="wf-logo-mark" />
        <span className="wf-logo-txt">LOGO</span>
      </div>
      <nav className="wf-nav__links">
        <span>GAME</span><span>WORLD</span><span>CHARACTERS</span><span>NEWS</span><span>STORE</span>
      </nav>
      <div className="wf-nav__right">
        <span className="wf-nav__region">EN ▾</span>
        <span className="wf-nav__cta">PLAY ▸</span>
      </div>
    </header>
  );
}

// Section label tab (wireframe annotation)
function ZoneTag({ children }) {
  return <span className="wf-zone-tag">{children}</span>;
}

// Big game title set in brush gyosho font
function GameTitle({ align = "left", size = "lg" }) {
  return (
    <h1 className={`wf-title wf-title--${align} wf-title--${size}`}>
      <span className="wf-title__line">One Piece</span>
      <span className="wf-title__x">×</span>
      <span className="wf-title__line">Naruto</span>
      <span className="wf-title__x">×</span>
      <span className="wf-title__line wf-title__line--big">Cyberpunk</span>
    </h1>
  );
}

// News row (horizontal list item)
function NewsRow({ tag, date, title }) {
  return (
    <article className="wf-news-row">
      <div className="wf-news-row__date">
        <span className="wf-news-row__tag">{tag}</span>
        <span className="wf-news-row__d">{date}</span>
      </div>
      <Slot label="THUMB" w={120} h={68} className="wf-news-row__thumb" />
      <div className="wf-news-row__body">
        <div className="wf-news-row__title">{title}</div>
        <div className="wf-line wf-line--90" />
        <div className="wf-line wf-line--60" />
      </div>
      <span className="wf-news-row__arrow">→</span>
    </article>
  );
}

// Footer shared across directions
function WFFooter() {
  const cols = [
    ["GAME", ["Overview", "Editions", "System Req.", "Roadmap"]],
    ["MEDIA", ["Trailers", "Screenshots", "Press Kit"]],
    ["SUPPORT", ["Help", "Contact", "Status"]],
    ["FOLLOW", ["X", "YouTube", "Discord", "Twitch"]],
  ];
  return (
    <footer className="wf-footer">
      <div className="wf-footer__top">
        <div className="wf-footer__brand">
          <span className="wf-logo-mark" />
          <span className="wf-logo-txt">LOGO</span>
          <p className="wf-footer__tag">// concept wireframe — not final art</p>
        </div>
        <div className="wf-footer__cols">
          {cols.map(([h, items]) => (
            <div className="wf-footer__col" key={h}>
              <div className="wf-footer__h">{h}</div>
              {items.map((i) => <span key={i} className="wf-footer__link">{i}</span>)}
            </div>
          ))}
        </div>
      </div>
      <div className="wf-footer__bar">
        <span>© 2026 CONCEPT STUDIO</span>
        <span>PEGI 18 · ESRB M</span>
        <span>Terms · Privacy · Cookies</span>
      </div>
    </footer>
  );
}

// Big full-width final CTA band
function MegaCTA({ stripes = true }) {
  return (
    <section className={"wf-mega " + (stripes ? "wf-mega--stripes" : "")}>
      <div className="wf-mega__inner">
        <ZoneTag>FULL-WIDTH CTA</ZoneTag>
        <div className="wf-mega__title">The grid is open.<br/>Pick your fight.</div>
        <div className="wf-line wf-line--40" style={{ margin: "0 auto" }} />
        <div className="wf-mega__btns">
          <Btn variant="primary" big icon>PLAY NOW — FREE</Btn>
          <Btn variant="ghost" big>VIEW EDITIONS</Btn>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  PAGE_W, Slot, PlayIcon, Btn, NavBar, ZoneTag, GameTitle, NewsRow, WFFooter, MegaCTA,
});
