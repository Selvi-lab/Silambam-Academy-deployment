import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import VideoController from "./components/VideoController";

// ---------- Edit all content here ----------
const SITE = {
  name: "Padaivedu Silambam Academy",
  phone: "+91 0000000000",
  email: "info@yudhakalam.com",
  place: "Padaivedu, Tiruvannamalai, Tamil Nadu, India",
  hours: "Saturdays, Sundays and government holidays: 6:00–8:00 AM and 4:00–6:00 PM",
};

const TEL = `tel:${SITE.phone.replace(/\s/g, "")}`;

const NAV = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Training", "#training"],
  ["Achievements", "#achievements"],
  ["Events", "#events"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

// Confirm these figures with the academy.
const STATS = [
  ["5+", "Years teaching"],
  ["150+", "Students trained"],
  ["38+", "Titles won"],
  ["40%", "Women in our classes"],
];

const HIGHLIGHTS = [
  ["Champions of Tomorrow", "We train young warriors to excel in competitions and achieve great success."],
  ["The Silambam Legacy", "Learn the ancient Tamil martial art and carry its rich heritage forward for generations."],
  ["Her Power, Her Legacy", "Let’s empower women with strength, courage, and confidence through Silambam."],
];

const WHY = [
  {
    title: "Seasoned coaches",
    desc: "Learn from national medallists with more than twenty years in martial arts.",
  },
  {
    title: "Rooted in tradition",
    desc: "Lessons follow the Tamil Kalaripayattu line and the old warrior codes.",
  },
  {
    title: "A stronger body",
    desc: "Full-body drills build strength, flexibility and stamina together.",
  },
  {
    title: "A calmer mind",
    desc: "Patient, structured practice grows focus and resilience.",
  },
  {
    title: "Every age welcome",
    desc: "Batches for children, teens, adults and women at any fitness level.",
  },
  {
    title: "Results you can see",
    desc: "Our students have won district, state and national titles.",
  },
];

const WOMEN_POINTS = [
  "Women get first call on new seats",
  "Separate batches for women only",
  "Free classes for those who qualify",
  "A free starter kit for first-time learners",
  "Self-defence awareness workshops",
  "A welcoming, respectful training space",
];

const ACHIEVEMENTS = [
  ["First prize, Young Sports of India", "A national-level win for the academy's students."],
  ["District, state and national titles", "Our fighters have placed at every level of competition."],
];

const EVENTS: [string, string][] = []; // e.g. [["Beginner batch opens", "1 November, Padaivedu arena"]]

// Keep PROGRAMS and ITEMS in the same order.
const PROGRAMS = [
  "Single stick",
  "Double stick",
  "Surulvall",
  "Vel Kambu",
  "Maan Kombu",
  "Kuthuvarisai",
  "Advanced equipment and techniques",
  "Women's self-defence",
  "Youth program",
  "Gymnastics",
];

const ITEMS = [
  { title: "Single stick", ta: "ஒற்றைக் கம்பு", img: "/programs/1-single-stick.jpg", pos: "50% 30%", 
    desc: "The foundation of Silambam. Learn stance, footwork and the core strikes with a single staff." },
  { title: "Double stick", ta: "இரட்டைக் கம்பு", img: "/programs/2-double-stick.jpg", pos: "50% 30%",
    desc: "Train both hands together for speed, rhythm and coordination." },
  { title: "Surulvall", ta: "சுருள் வாள்", img: "/programs/3-surulvall.jpg", pos: "50% 25%",
    desc: "The flexible coiled blade. It demands control, timing and complete focus." },
  { title: "Vel Kambu", ta: "வேல் கம்பு", img: "/programs/4-vel-kambu.jpg", pos: "50% 30%",
    desc: "Spear-style training with thrusts and reach, built on balance and precision." },
  { title: "Maan Kombu", ta: "மான் கொம்பு", img: "/programs/5-maan-kombu.jpg", pos: "50% 30%",
    desc: "The twin-horn weapon for close defence and sharp counters." },
  { title: "Kuthuvarisai", ta: "குத்துவரிசை", img: "/programs/6-kuthuvarisai.jpg", pos: "50% 30%",
    desc: "Empty-hand combat built on strikes, blocks and body control." },
  { title: "Advanced Techniques", ta: "மேம்பட்ட நுட்பங்கள்", img: "/programs/7-advance-equipments-techniques.jpg", pos: "50% 30%",
    desc: "Higher-level equipment work and technique for experienced students." },
  { title: "Women's Self Defence", ta: "பெண்கள் தற்காப்புக் கலை", img: "/programs/8-womens-self-defence.jpg", pos: "50% 30%",
    desc: "Practical self-defence skills that build confidence and awareness." },
  { title: "Youth Program", ta: "இளைஞர் பயிற்சி", img: "/programs/9-youth-program.jpg", pos: "50% 30%",
    desc: "A structured path for young students to learn Silambam with discipline." },
  { title: "Gymnastics", ta: "சீருடற்பயிற்சி", img: "/programs/10-gymnastics.jpg", pos: "50% 30%",
    desc: "Flexibility, balance and strength that support every Silambam skill." },
];



// [left %, delay s, duration s] for the rising sparks
const EMBERS = [
  [8, 0, 7], [18, 2, 9], [27, 4, 8], [38, 1, 10], [48, 5, 7],
  [58, 3, 9], [68, 6, 8], [78, 2, 10], [88, 4, 7], [95, 1, 9],
];

// Tailwind needs these written out in full so it can find them.
const SELECT =
  "has-[#p0:checked]:[--sel:0] has-[#p1:checked]:[--sel:1] has-[#p2:checked]:[--sel:2] has-[#p3:checked]:[--sel:3] has-[#p4:checked]:[--sel:4] has-[#p5:checked]:[--sel:5] has-[#p6:checked]:[--sel:6] has-[#p7:checked]:[--sel:7] has-[#p8:checked]:[--sel:8] has-[#p9:checked]:[--sel:9]";

// Orange-to-yellow button look used by every solid button
const SOLID_BTN =
  "border-2 border-[#FF9A1F] bg-gradient-to-r from-[#FF7A1A] to-[#F5C518] text-[#1C120C] shadow-[0_0_20px_rgba(255,122,26,0.45)] hover:from-[#FF8F3A] hover:to-[#FFD84D]";

function vars(styles: Record<string, string | number>): CSSProperties {
  return styles as CSSProperties;
}

// ---------- Circle plot maths (Training section) ----------
const R = 38; // ring radius, as % of the plot's width

// point on the ring for program i (first one at 12 o'clock, then clockwise)
const angle = (i: number) => ((i * 36 - 90) * Math.PI) / 180;
const pt = (i: number, r = R) => ({
  x: Number((50 + r * Math.cos(angle(i))).toFixed(2)),
  y: Number((50 + r * Math.sin(angle(i))).toFixed(2)),
});

// ---------- Kolam divider pieces ----------
const GOLD = "#F5C518";
const ORANGE = "#FF8A1F";

const kolamTile = (d: string, w: number, h: number) =>
  `url("data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' fill='none' stroke='${GOLD}' stroke-width='1.2'>${d}</svg>`
  )}")`;

const KOLAM_H = kolamTile(
  `<path d='M0 9Q6 0 12 9T24 9'/><path d='M0 9Q6 18 12 9T24 9'/><circle cx='6' cy='9' r='1.3' fill='${ORANGE}'/><circle cx='18' cy='9' r='1.3' fill='${ORANGE}'/>`,
  24, 18
);

function KolamKnot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 32" aria-hidden="true" className={className} fill="none" stroke={GOLD} strokeWidth="1.2">
      <polygon points="22,2 42,16 22,30 2,16" stroke={ORANGE} />
      <circle cx="12" cy="16" r="7" />
      <circle cx="22" cy="16" r="7" />
      <circle cx="32" cy="16" r="7" />
      <circle cx="22" cy="16" r="1.6" fill={ORANGE} />
      <circle cx="12" cy="16" r="1" fill={GOLD} />
      <circle cx="32" cy="16" r="1" fill={GOLD} />
      <circle cx="22" cy="6" r="1" fill={GOLD} />
      <circle cx="22" cy="26" r="1" fill={GOLD} />
    </svg>
  );
}

function Divider() {
  return (
    <div aria-hidden className="bg-umber py-3">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-5">
        <div className="h-[18px] flex-1 opacity-70" style={{ backgroundImage: KOLAM_H, backgroundRepeat: "repeat-x" }} />
        <KolamKnot className="h-8 w-12 shrink-0" />
        <div className="h-[18px] flex-1 opacity-70" style={{ backgroundImage: KOLAM_H, backgroundRepeat: "repeat-x" }} />
      </div>
    </div>
  );
}

// ---------- Small pieces ----------
const Heading = ({
  children,
  center,
  className,
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
}) => (
  <div className={`${center ? "text-center" : ""} ${className ?? ""}`}>
    <h2 className="font-display text-3xl text-sand sm:text-5xl">{children}</h2>
    <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-ember to-gold ${center ? "mx-auto" : ""}`} />
  </div>
);

const Btn = ({
  href,
  children,
  solid,
}: {
  href: string;
  children: ReactNode;
  solid?: boolean;
}) => (
  <a
    href={href}
    className={`inline-block rounded-lg px-5 py-2.5 font-bold transition-colors [text-shadow:none] ${
      solid ? SOLID_BTN : "border-2 border-ember/60 text-gold hover:bg-ember/10"
    }`}
  >
    {children}
  </a>
);

const Logo = () => (
  <Image
    src="/logo.jpeg"
    alt="Padaivedu Silambam Academy logo"
    width={40}
    height={40}
    className="h-10 w-10 shrink-0 rounded-full border border-gold bg-umber"
  />
);



// ---------- Sections ----------
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-[#FF8A1F]/30 bg-[#1C120C]/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5"
        aria-label="Main"
      >
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <Logo />

          <span className="glow-text font-display text-sm leading-tight text-[#F5C518] sm:text-xl">
            {SITE.name}
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-5 lg:flex">
          {NAV.map(([l, h]) => (
            <li key={h}>
              <a
                href={h}
                className="group relative block rounded-lg px-3 py-2 text-sm text-[#E9D6AE]/85 transition-all duration-300 hover:bg-[#FF7A1F]/10 hover:text-[#FFD84D] hover:shadow-[0_0_18px_rgba(255,122,24,0.30)]"
              >
                <span className="relative z-10">{l}</span>

                {/* Orange → Yellow light line */}
                <span className="absolute bottom-1 left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#FF7A18] via-[#F5C518] to-[#FFD84D] shadow-[0_0_8px_rgba(245,197,24,0.8)] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}

          <li>
            <a
              href="#join"
              className="block rounded-lg border-2 border-[#FF9A1F] bg-gradient-to-r from-[#FF7A1A] to-[#F5C518] px-4 py-2 text-center font-bold text-[#1C120C] shadow-[0_0_18px_rgba(255,122,24,0.35)] transition-all duration-300 hover:scale-105 hover:from-[#FF8F3A] hover:to-[#FFD84D] hover:shadow-[0_0_28px_rgba(245,197,24,0.55)]"
            >
              Join now
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <details className="relative shrink-0 lg:hidden">
          <summary className="group cursor-pointer list-none rounded-lg border border-[#FF8A1F]/50 px-3 py-1.5 text-[#F5C518] transition-all duration-300 hover:border-[#FFD84D] hover:bg-[#FF7A1A]/10 hover:text-[#FFD84D] hover:shadow-[0_0_20px_rgba(255,122,24,0.4)] marker:hidden">
            <span className="font-medium">Menu</span>
          </summary>

          <ul className="absolute right-0 z-50 mt-3 w-56 space-y-1 rounded-xl border border-[#FF8A1F]/50 bg-gradient-to-br from-[#3A1C0B] to-[#1C120C] p-3 shadow-2xl shadow-black/70">
            {NAV.map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  className="group relative block rounded-lg px-3 py-2.5 text-[#E9D6AE]/90 transition-all duration-300 hover:bg-[#FF7A1A]/10 hover:text-[#FFD84D] hover:shadow-[0_0_16px_rgba(255,122,24,0.3)]"
                >
                  <span className="relative z-10">{l}</span>

                  {/* Light effect */}
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#FF7A18] via-[#F5C518] to-[#FFD84D] shadow-[0_0_8px_rgba(245,197,24,0.8)] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}

            <li className="pt-1">
              <a
                href="#join"
                className="block rounded-lg border border-[#FF9A1F] bg-gradient-to-r from-[#FF7A1A] to-[#F5C518] px-3 py-2.5 text-center font-bold text-[#1C120C] shadow-[0_0_16px_rgba(255,122,24,0.35)] transition-all duration-300 hover:from-[#FF8F3A] hover:to-[#FFD84D] hover:shadow-[0_0_25px_rgba(245,197,24,0.55)]"
              >
                Join now
              </a>
            </li>
          </ul>
        </details>
      </nav>
    </header>
  );
}


function Hero() {
  return (
    <section id="top" className="relative scroll-mt-20 overflow-hidden bg-[#1C120C] px-4 pb-16 pt-24 sm:px-5">
      {/* sunset background image */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* dark overlay: strong at the top and middle, fades into the page colour at the bottom */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(28,18,12,0.8),rgba(28,18,12,0.65)_55%,#1C120C)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="relative aspect-[16/9] min-h-[200px] overflow-hidden rounded-2xl border border-[#FF8A1F]/40 shadow-2xl shadow-[#FF7A1A]/25">
          <Image
            src="/hero.png"
            alt="Silambam fighters with staffs, swords and shields before a temple tower at sunset, under the title Padaivedu Yudhakalam"
            fill
            priority
            sizes="(min-width:1152px) 1152px, 100vw"
            className="hero-img object-cover"
          />
        </div>

        {/* text sits on its own dark glass panel so it is always readable */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#FF8A1F]/25 bg-[#1C120C]/70 px-5 py-8 text-center backdrop-blur-sm sm:px-10">
          <p className="text-xl font-bold text-[#FFD84D] [text-shadow:0_2px_10px_rgba(0,0,0,0.9)] sm:text-2xl">
            மண்ணில் விழுந்த வியர்வை, வரலாற்றில் மலர்ந்த பெருமை
          </p>
          <p className="mt-4 text-base leading-8 text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.9)] sm:text-lg">
            வீர மரபின் அசைவுகளை கற்று, வலிமையான நாளையை உருவாக்குவோம்.
          </p>
          <p className="mt-4 text-base leading-8 text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.9)] sm:text-xl">
            Master the movements of a warrior tradition and build a stronger tomorrow.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Btn href="#training" solid>See our training</Btn>
            <Btn href="#join">Join the academy</Btn>
          </div>
        </div>

        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 border-t border-[#FF8A1F]/30 pt-8 text-center sm:grid-cols-4">
          {STATS.map(([n, l]) => (
            <div key={l}>
              <dt className="bg-gradient-to-b from-[#FFD84D] to-[#FF8A1F] bg-clip-text font-display text-3xl text-transparent sm:text-4xl">{n}</dt>
              <dd className="mt-1 text-sm text-white/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20"
    >
      {/* Background Video */}
     {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/silambam-hero.mp4" type="video/mp4" />
      </video>*/}

      <Image
        src="/why.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right brightness-[0.5]"
      />

      {/* Dark overlay - makes text clear */}
      <div className="absolute inset-0 bg-[#1C120C]/75" />

      {/* Orange cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5A2408]/80 via-[#2A1308]/75 to-[#120805]/90" />

      {/* Soft center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,166,0,0.16),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5">

        <div className="max-w-4xl">
          <Heading className="glow-text">
            Old Tradition...! New Warriors...!
          </Heading>

          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] sm:text-lg">
            Padaivedu Yudhakalam carries the ancient Tamil art of Silambam
            to future generations through training, strength and tradition.
          </p>

          <div className="mt-7">
            <Btn href="#why" solid>
              Read our story
            </Btn>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">

          {HIGHLIGHTS.map(([t, d], i) => (
            <article
              key={t}
              className={`rounded-xl border border-[#FF9A1F]/50 bg-[#1C120C]/80 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD84D]/80 hover:bg-[#241006]/90 hover:shadow-[0_0_30px_rgba(255,122,24,0.2)] ${
                i === 2 ? "sm:col-span-2" : ""
              }`}
            >
              <h3 className="font-display text-xl text-[#FFD84D] drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
                {t}
              </h3>

              <p className="mt-2 leading-7 text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                {d}
              </p>
            </article>
          ))}

        </div>
      </div>

      {/* Bottom golden line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD84D] to-transparent shadow-[0_0_15px_#FF7A18]" />
    </section>
  );
}


function Why() {
  return (
    <section
      id="why"
      className="relative scroll-mt-20 overflow-hidden bg-[#1C0D05] py-20 sm:py-24"
    >
      {/* Background image: banner, dimmed, focused on the fighter (right side) */}
      <Image
        src="/why.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right brightness-[0.5]"
      />

      {/* Dark overlay so the cards and text stay clear */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#1C0D05]/90 via-[#1C0D05]/75 to-[#1C0D05]/95"
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FF7A18]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#F5C518]/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-[#FF7A18]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5">

        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#FF9A1F]">
            Why Padaivedu
          </p>

          <Heading center className="glow-text">
            What Sets Us Apart
          </Heading>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#E9D6AE]/85 sm:text-base">
            More than martial arts — we build discipline, strength,
            confidence and a deeper connection to Tamil warrior heritage.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#FF7A18]" />
            <span className="h-2 w-2 rotate-45 border border-[#FFD84D] bg-[#FF7A18]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#FF7A18]" />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ title, desc }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-[#FF8A1F]/30 bg-gradient-to-br from-[#3A1607]/85 to-[#1E0D06]/90 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD84D]/60 hover:shadow-[0_15px_45px_rgba(255,122,24,0.18)]"
              style={vars({ "--i": i })}
            >
              {/* Top glow */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF9A1F] to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-3xl text-[#FF7A18]/30 transition-colors duration-300 group-hover:text-[#FF7A18]/55">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FF9A1F]/30 bg-[#FF7A18]/10 text-lg text-[#FFD84D] transition-all duration-300 group-hover:border-[#FFD84D]/60 group-hover:bg-[#FF7A18]/20 group-hover:shadow-[0_0_18px_rgba(255,122,24,0.25)]">
                  ✦
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-[#FFD84D] transition-colors duration-300 group-hover:text-[#FFE58A]">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-3 leading-7 text-[#E9D6AE]/85">
                {desc}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-[#FF7A18] to-[#FFD84D] transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="font-display text-lg text-[#FFD84D]/90 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] sm:text-xl">
            “Train the body. Sharpen the mind. Carry the tradition.”
          </p>
        </div>

      </div>
    </section>
  );
}


function Training() {
  return (
    <section
      id="training"
      className="relative scroll-mt-20 overflow-hidden bg-[#160A04] py-20 sm:py-24"
    >
      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#160A04]/90 via-[#160A04]/80 to-[#160A04]/95"
      />

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FF7A18]/8 blur-[120px]" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#F5C518]/5 blur-[100px]" />

        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#FF7A18]/5 blur-[110px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,166,0,0.06),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#FF9A1F]">
            Training at Padaivedu
          </p>
          <Heading center className="glow-text">
            Programs We Teach
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#E9D6AE]/85 sm:text-base">
            Explore the traditional arts, combat techniques and physical
            disciplines that shape every Padaivedu warrior.
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#FF8A1F]" />
            <span className="h-2.5 w-2.5 rotate-45 border border-[#FFD84D] bg-[#FF7A18]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#FF8A1F]" />
          </div>

          <p className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-[#E9D6AE]/60">
            10 disciplines · One warrior journey
          </p>
        </div>

        {/* Orbit */}
        <div className="relative mx-auto mt-12 aspect-square w-full max-w-[700px] sm:mt-16">
          {/* Outer atmospheric glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A18]/5 blur-3xl" />

          {/* Outer ring */}
          <div className="pointer-events-none absolute inset-[9%] rounded-full border border-[#FF9A1F]/20" />

          {/* Dashed rotating ring */}
          <div className="pointer-events-none absolute inset-[14%]">
            <div className="spin-ring h-full w-full rounded-full border border-dashed border-[#FF9A1F]/35" />
          </div>

          {/* Inner ring */}
          <div className="pointer-events-none absolute inset-[27%] rounded-full border border-[#FFD84D]/15" />

          {/* Inner glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32%] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A18]/10 blur-2xl" />

          {/* Connecting branches */}
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
          >
            {ITEMS.map((it, i) => {
              const end = pt(i);
              const a = angle(i) + 0.3;

              const cx = Number((50 + R * 0.55 * Math.cos(a)).toFixed(2));
              const cy = Number((50 + R * 0.55 * Math.sin(a)).toFixed(2));

              return (
                <g key={it.title}>
                  <path
                    d={`M50 50 Q ${cx} ${cy} ${end.x} ${end.y}`}
                    stroke="#FF8A1F"
                    strokeOpacity="0.18"
                    strokeWidth="1"
                  />

                  <path
                    d={`M50 50 Q ${cx} ${cy} ${end.x} ${end.y}`}
                    stroke="#FFD84D"
                    strokeOpacity="0.28"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                  />
                </g>
              );
            })}
          </svg>

          {/* Center logo */}
          <a
            href="#logo-popup"
            aria-label="Show academy logo"
            className="group absolute left-1/2 top-1/2 z-20 w-[27%] -translate-x-1/2 -translate-y-1/2"
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-full bg-[#FF7A18]/15 blur-xl transition-all duration-500 group-hover:bg-[#FF7A18]/30" />

            {/* Gold ring */}
            <div className="relative rounded-full border border-[#FFD84D]/50 bg-[#120804] p-2 shadow-[0_0_35px_rgba(255,122,24,0.25)] transition-all duration-500 group-hover:scale-105 group-hover:border-[#FFD84D] group-hover:shadow-[0_0_55px_rgba(255,122,24,0.45)]">
              <Image
                src="/logo.jpeg"
                alt="Padaivedu Silambam Academy"
                width={240}
                height={240}
                className="h-auto w-full rounded-full"
              />
            </div>

            {/* Center label */}
            <span className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.2em] text-[#FFD84D]/80 sm:text-[10px]">
              Our Warrior Path
            </span>
          </a>

          {/* Program circles */}
          {ITEMS.map((it, i) => {
            const { x, y } = pt(i);

            return (
              <div
                key={it.title}
                className="absolute w-[16%] -translate-x-1/2 -translate-y-1/2 sm:w-[13.5%]"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              >
                <a
                  href={`#prog-${i}`}
                  aria-label={`Watch ${it.title}`}
                  className="group relative block"
                >
                  {/* Circle */}
                  <span className="relative block aspect-square overflow-hidden rounded-full border border-[#FF9A1F]/70 bg-[#211006] p-[3px] shadow-[0_0_0_3px_rgba(255,122,24,0.06)] transition-all duration-500 group-hover:scale-110 group-hover:border-[#FFD84D] group-hover:shadow-[0_0_30px_rgba(255,122,24,0.45)]">
                    <span className="relative block h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={it.img}
                        alt={it.title}
                        fill
                        sizes="(min-width:640px) 90px, 16vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Image darkening */}
                      <span className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/5" />
                    </span>
                  </span>

                  {/* Number */}
                  <span className="absolute -left-1 -top-1 grid h-5 w-5 place-items-center rounded-full border border-[#FFD84D]/50 bg-[#211006] text-[8px] font-bold text-[#FFD84D] shadow-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Program name */}
                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#FF9A1F]/20 bg-[#160A04]/90 px-2.5 py-1 text-[10px] font-medium text-[#F5E5C5] shadow-lg backdrop-blur-md sm:text-xs">
                    {it.title}
                  </span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom instruction */}
        <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-3 text-center">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#FF8A1F]/30" />

          <p className="text-xs uppercase tracking-[0.2em] text-[#E9D6AE]/60">
            Select a discipline to explore
          </p>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#FF8A1F]/30" />
        </div>
      </div>

      {/* Program popups */}
      {ITEMS.map((it, i) => (
        <div
          key={it.title}
          id={`prog-${i}`}
          className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
        >
          {/* Backdrop */}
          <a
            href="#training"
            aria-label="Close"
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Popup */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#FF9A1F]/40 bg-[#1A0C05] p-4 shadow-[0_0_60px_rgba(255,122,24,0.25)] sm:p-5">
            {/* Top accent */}
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#FF7A18] via-[#FFD84D] to-[#FF7A18]" />

            {/* Media */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <Image
                src={it.img}
                alt={it.title}
                fill
                sizes="(min-width:448px) 448px, 90vw"
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="px-2 pb-1 pt-5 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF9A1F]">
                Training Discipline
              </p>

              <h3 className="mt-2 font-display text-2xl text-[#FFD84D]">
                {it.title}
              </h3>

              <a
                href="#training"
                className="mt-5 inline-flex items-center rounded-lg border border-[#FF9A1F]/50 bg-[#FF7A18]/10 px-6 py-2.5 text-sm font-bold text-[#FFD84D] transition-all duration-300 hover:border-[#FFD84D] hover:bg-[#FF7A18]/20"
              >
                Close
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Logo popup */}
      <div
        id="logo-popup"
        className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
      >
        <a
          href="#training"
          aria-label="Close"
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        />

        <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-[#FF9A1F]/40 bg-[#1A0C05] p-6 text-center shadow-[0_0_60px_rgba(255,122,24,0.25)]">
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#FF7A18] via-[#FFD84D] to-[#FF7A18]" />

          <Image
            src="/logo.jpeg"
            alt="Padaivedu Silambam Academy logo"
            width={320}
            height={320}
            className="mx-auto h-auto w-full max-w-[260px] rounded-full"
          />

          <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF9A1F]">
            Our Identity
          </p>

          <h3 className="mt-2 font-display text-xl text-[#FFD84D]">
            {SITE.name}
          </h3>

          <p className="mt-2 text-sm text-[#E9D6AE]/70">
            Tradition • Discipline • Strength
          </p>

          <a
            href="#training"
            className="mt-5 inline-flex rounded-lg border border-[#FF9A1F]/50 px-6 py-2.5 text-sm font-bold text-[#FFD84D] transition-all duration-300 hover:border-[#FFD84D] hover:bg-[#FF7A18]/10"
          >
            Close
          </a>
        </div>
      </div>
    </section>
  );
}

function Women() {
  return (
    <section
      id="women"
      className="relative scroll-mt-20 overflow-hidden bg-umber py-16 sm:py-20"
    >
      {/* Background photo: she stays on the right side */}
      <Image
        src="/women-bg.jpg"
        alt="A woman practising Silambam with a bamboo staff on the beach at sunset"
        fill
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* Overlay: dark on the left where the text is, clear on the right where she stands.
          On phones (no space beside the text) it is darker all over. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#1C120C]/85 via-[#1C120C]/75 to-[#1C120C]/85 md:bg-gradient-to-r md:from-[#1C120C]/95 md:via-[#1C120C]/70 md:to-[#1C120C]/0"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5">
        <div className="md:max-w-[52%]">
          <h2 className="glow-text font-display text-3xl leading-tight text-sand sm:text-5xl">
            She Learns. She Leads. She Protects.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#FFF3D6] [text-shadow:0_2px_8px_rgba(0,0,0,0.7)] sm:text-lg">
            Silambam does not create courage in her; it brings out the courage that is already there.
          </p>

          <ul className="mt-6 space-y-3">
            {WOMEN_POINTS.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 border-b border-ember/25 pb-3 text-[#FFF3D6] [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]"
              >
                {/* SVG tick, so it always matches the theme (the ✔ character turns purple as an emoji) */}
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="#FF9A1F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10.5l4 4 8-9" />
                </svg>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Btn href="#join" solid>Register free</Btn>
          </div>

          {/* Stats card */}
          <div className="mt-10 rounded-2xl border border-ember/40 bg-[#1C120C]/70 p-6 text-center backdrop-blur-sm sm:p-8">
            <h3 className="font-display text-2xl text-gold sm:text-3xl">Fearless Women</h3>
            <p className="mt-1 text-sand/90">Ancient Art, Modern Defence</p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-ember/25 pt-6">
              {[
                ["40%", "of our students"],
                ["Free", "kit and classes"],
                ["3 months", "starter course"],
              ].map(([n, l]) => (
                <div key={n}>
                  <dt className="bg-gradient-to-b from-[#FFD84D] to-[#FF7A18] bg-clip-text font-display text-xl font-bold text-transparent sm:text-2xl">
                    {n}
                  </dt>
                  <dd className="mt-1 text-sm text-[#E9D6AE]/85">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}


function Achievements() {
  return (
    <section
      id="achievements"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28 lg:min-h-[640px]"
    >
      {/* Background image – anchor the trophy to the right */}
      <div
        className="absolute inset-0 bg-cover bg-[70%_center] lg:bg-right"
        style={{ backgroundImage: "url('/win.jpg')" }}
      />

      {/* Dark only on the text side, fading to clear over the trophy */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent lg:via-black/50" />

      {/* Light edge vignette instead of a full dark wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,transparent_40%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5">
        <div className="max-w-xl">
          <Heading className="glow-text text-white">Our proudest wins</Heading>

          <div className="mt-10 grid gap-5">
            {ACHIEVEMENTS.map(([t, d]) => (
              <article
                key={t}
                className="border-l-4 border-amber-400 bg-black/60 p-6 transition-colors duration-300 hover:bg-black/75"
              >
                <h3 className="text-xl font-bold text-amber-300">{t}</h3>
                <p className="mt-2 text-white/90">{d}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Btn href="#achievements">See all achievements</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}


function Events() {
  return (
    <section
      id="events"
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/coming-up.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Orange/gold cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/30 via-orange-950/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-5">
        <Heading center className="glow-text text-white">
          Coming up
        </Heading>

        {EVENTS.length ? (
          <ul className="mt-10 space-y-4">
            {EVENTS.map(([t, d]) => (
              <li
                key={t}
                className="rounded-xl border border-amber-300/40 bg-black/40 p-5 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/55"
              >
                <b className="text-amber-300">{t}</b>

                <p className="mt-1 text-white/80">
                  {d}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p
            className="
              mx-auto mt-10 max-w-xl rounded-xl
              border border-amber-300/50
              bg-black/45
              p-6 text-center
              text-base text-white/90
              backdrop-blur-sm
              sm:p-8 sm:text-lg
            "
          >
            No events are scheduled right now. Join the academy and we will
            tell you the moment a date is set.
          </p>
        )}

        <div className="mt-8 text-center">
          <Btn href="#events">
            See all events
          </Btn>
        </div>
      </div>
    </section>
  );
}


function Gallery() {
  const n = ITEMS.length;

  return (
    <section
      id="gallery"
      className="relative scroll-mt-20 overflow-hidden bg-[#160d08] py-20 sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[140px]" />

      {/* Decorative lines */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-orange-400">
            The Art of Silambam
          </p>

          <Heading center className="glow-text">
            Choose your path
          </Heading>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
            Ten disciplines. One ancient tradition. Discover the path that
            matches your skill, discipline and ambition.
          </p>
        </div>

        {/* Main showcase */}
        <div className="mx-auto mt-14 max-w-6xl">

          {/* Program selector */}
          <div
            role="radiogroup"
            aria-label="Silambam programs"
            className={`relative ${SELECT}`}
          >

            {/* Hidden radios */}
            {ITEMS.map((it, i) => (
              <div key={it.title} className="contents">

                <input
                  type="radio"
                  name="programs"
                  id={`p${i}`}
                  defaultChecked={i === 0}
                  aria-label={it.title}
                  className="peer sr-only"
                />

                {/* Main panel */}
                <div
                  className="
                    invisible
                    absolute
                    inset-0
                    opacity-0
                    transition-all
                    duration-700
                    peer-checked:visible
                    peer-checked:relative
                    peer-checked:opacity-100
                  "
                >

                  <div className="grid min-h-[520px] overflow-hidden rounded-[2rem] border border-orange-300/20 bg-[#21150e] shadow-[0_30px_100px_rgba(0,0,0,0.45)] lg:grid-cols-2">

                    {/* IMAGE */}
                    <div className="group relative min-h-[360px] overflow-hidden lg:min-h-[520px]">

                      <Image
                        src={it.img}
                        alt={it.title}
                        fill
                        aria-hidden
                        //priority={i === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        style={{ objectPosition: it.pos ?? "center" }}
                        className="scale-125 object-cover opacity-50 blur-2xl"
                        //className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                      />

                      {/* Main image: auto-fits fully, never cropped */}
                      <Image
                         src={it.img}
                         alt={it.title}
                         fill
                         priority={i === 0}
                         sizes="(max-width: 1024px) 100vw, 50vw"
                         className="object-contain p-2 transition-transform duration-[1.5s] group-hover:scale-105 sm:p-4"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Orange cinematic light */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-transparent to-black/30" />

                      {/* Image label */}
                      <div className="absolute bottom-7 left-7">
                        <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-md">
                          Silambam Academy
                        </span>
                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-14">

                      {/* Number */}
                      <div className="mb-7 flex items-center gap-4">
                        <span className="text-xs tracking-[0.4em] text-orange-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-16 bg-orange-400/50" />

                        <span className="text-xs tracking-[0.3em] text-stone-500">
                          {String(n).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-4xl leading-tight text-amber-300 sm:text-5xl">
                        {it.title}
                      </h3>

                      {/* Tamil */}
                      <p className="mt-3 text-lg text-orange-300/80">
                        {it.ta}
                      </p>

                      {/* Description */}
                      <div className="my-7 h-px w-20 bg-gradient-to-r from-orange-500 to-transparent" />

                      <p className="max-w-md text-base leading-8 text-stone-300">
                        {it.desc}
                      </p>

                      {/* Features */}
                      <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                          <span className="block text-orange-400">
                            Discipline
                          </span>
                          <span className="mt-1 block text-stone-300">
                            Traditional
                          </span>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                          <span className="block text-orange-400">
                            Training
                          </span>
                          <span className="mt-1 block text-stone-300">
                            Progressive
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-9 flex flex-wrap items-center gap-3">

                        <label
                          htmlFor={`p${(i + n - 1) % n}`}
                          className="
                            grid h-11 w-11 cursor-pointer
                            place-items-center rounded-full
                            border border-orange-400/40
                            text-lg text-amber-300
                            transition hover:border-orange-400
                            hover:bg-orange-400/10
                          "
                        >
                          ←
                        </label>

                        <a
                          href="#contact"
                          className="
                            rounded-full
                            bg-gradient-to-r
                            from-orange-500
                            to-amber-400
                            px-7 py-3
                            text-sm font-bold
                            text-[#24150b]
                            shadow-lg
                            shadow-orange-500/20
                            transition
                            hover:scale-105
                            hover:shadow-orange-500/40
                          "
                        >
                          Begin Training
                        </a>

                        <label
                          htmlFor={`p${(i + 1) % n}`}
                          className="
                            grid h-11 w-11 cursor-pointer
                            place-items-center rounded-full
                            border border-orange-400/40
                            text-lg text-amber-300
                            transition hover:border-orange-400
                            hover:bg-orange-400/10
                          "
                        >
                          →
                        </label>

                      </div>

                    </div>
                  </div>

                  {/* Program dots */}
                  <div className="mt-7 flex justify-center gap-2">
                    {ITEMS.map((d, j) => (
                      <label
                        key={d.title}
                        htmlFor={`p${j}`}
                        aria-label={`Go to ${d.title}`}
                        className={`
                          h-1.5 cursor-pointer rounded-full
                          transition-all duration-300
                          ${
                            j === i
                              ? "w-10 bg-orange-400"
                              : "w-2 bg-stone-600 hover:bg-orange-300"
                          }
                        `}
                      />
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Select a discipline to explore
          </p>
        </div>

      </div>
    </section>
  );
}


function Join() {
  return (
    <section id="join" className="scroll-mt-20 bg-umber px-4 py-16 sm:px-5 sm:py-20">
      <div className="mx-auto max-w-4xl rounded-2xl border border-ember/40 bg-gradient-to-br from-rust/60 to-umber p-8 text-center sm:p-14">
        <h2 className="glow-text font-display text-3xl text-white sm:text-5xl">Ready to pick up the staff?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-sand sm:text-lg">
          Hundreds of students have changed their lives through Silambam. A new three-month beginner batch starts every month, and seats are limited.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Btn href={TEL} solid>Enroll now</Btn>
          <Btn href="#training">Browse programs</Btn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-ember/25 bg-umber pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <span className="glow-text font-display text-xl text-gold">{SITE.name}</span>
          </div>
          <p className="mt-4 text-sand/75">Tamil staff fighting, taught with discipline, strength and heritage.</p>
        </div>
        <div>
          <h3 className="glow-text font-display text-lg text-sand">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sand/75">
            {NAV.map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-ember">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="glow-text font-display text-lg text-sand">Programs</h3>
          <ul className="mt-3 space-y-2 text-sand/75">
            {PROGRAMS.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="glow-text font-display text-lg text-sand">Contact us</h3>
          <ul className="mt-3 space-y-3 text-sand/75">
            <li>{SITE.place}</li>
            <li><a className="hover:text-ember" href={TEL}>{SITE.phone}</a></li>
            <li className="break-words"><a className="hover:text-ember" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-between gap-2 border-t border-ember/20 px-4 py-6 text-sm text-sand/60 sm:px-5">
        <p>© 2026 Padaivedu Yudhakalam. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FloatingCall() {
  return (
    <a
      href={TEL}
      aria-label="Call the academy to enrol"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#F5C518] px-4 py-3 text-sm font-bold text-[#1C120C] shadow-lg shadow-black/40 hover:from-[#FF8F3A] hover:to-[#FFD84D] sm:bottom-5 sm:right-5 sm:px-5 sm:text-base"
    >
      <span aria-hidden>📞</span> Enroll Today
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Why />
        <Divider />
        <Training />
        <Divider />
        <Women />
        <Divider />
        <Achievements />
        <Divider />
        <Events />
        <Divider />
        <Gallery />
        <Divider />
        <Join />
      </main>
      <Footer />
      <FloatingCall />
      <VideoController />
    </>
  );
}
