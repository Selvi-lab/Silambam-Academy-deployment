import Image from "next/image";

import type { CSSProperties } from "react";


// ---------- Edit all content here ----------
const SITE = {
  name: "Padaivedu Silambam Academy",
  phone: "+91 0000000000",
  email: "info@yudhakalam.com",
  place: "Padaivedu, Tiruvannamalai, Tamil Nadu, India",
  hours: "Saturdays, Sundays and government holidays: 6:00–8:00 AM and 4:00–6:00 PM",
};

const NAV = [
  ["Home", "#top"], ["About", "#about"], ["Training", "#training"],
  ["Achievements", "#achievements"], ["Events", "#events"], ["Gallery", "#gallery"], ["Contact", "#contact"],
];

// Confirm these figures with the academy (the reference site says both "5+ years" and "over two decades").
const STATS = [["5+", "Years teaching"], ["150+", "Students trained"], ["38+", "Titles won"], ["40%", "Women in our classes"]];

const HIGHLIGHTS = [
  ["🥇 Champions of Tomorrow", "இளம் வீரர்களை உருவாக்கி, போட்டிகளில் உயர்ந்து சாதிக்கப் பயிற்சி அளிக்கிறோம்."],
  ["🥋 The Silambam Legacy", "பழமையான தமிழ் தற்காப்புக் கலையை கற்று, அதன் பாரம்பரியத்தை தலைமுறைகளுக்கு கொண்டு செல்லுங்கள்."],
  ["👩 Her Power, Her Legacy", "சிலம்பத்தின் மூலம் பெண்களின் வலிமை, துணிவு மற்றும் தன்னம்பிக்கையை வளர்ப்போம்."],
];

/*const WHY = [
  ["👨‍🏫 Seasoned Coaches 🥋🔥", "பல ஆண்டுகளின் அனுபவமும் போட்டி சாதனைகளும் கொண்ட பயிற்சியாளர்களிடம் நேர்த்தியான சிலம்பப் பயிற்சியை கற்றுக்கொள்ளுங்கள்."], 
  ["🏛️ Rooted in Tradition", "தமிழர் வீரப் பாரம்பரியத்தின் அடிப்படையில், ஒழுக்கத்தையும் கலையின் நுட்பத்தையும் இணைத்து பயிற்சி அளிக்கிறோம்."],
  ["💪 A Stronger Body", "ஒவ்வொரு அசைவும் உடல் வலிமை, நெகிழ்வு மற்றும் தாங்கும் திறனை மேம்படுத்தும் வகையில் வடிவமைக்கப்பட்டுள்ளது."],
  ["🧘 A Calmer Mind", "சீரான பயிற்சி, கட்டுப்பாடு மற்றும் கவனத்தின் மூலம் மன அமைதியையும் தன்னம்பிக்கையையும் வளர்த்திடுங்கள்."],
  ["👨‍👩‍👧‍👦 Every Age Welcome", "சிறுவர் முதல் பெரியவர் வரை, ஒவ்வொருவரின் திறனுக்கும் வயதுக்கும் ஏற்ற பயிற்சி வாய்ப்புகள்."],
  ["🏆 Results You Can See", "பயிற்சியில் உருவாகும் திறமை, போட்டிகளில் வெளிப்படும் சாதனை — முன்னேற்றத்தை ஒவ்வொரு நிலையிலும் காணலாம்."]
];*/

const WHY = [
  {
    title: "Seasoned coaches", 
    ta: "அனுபவமிக்க பயிற்சியாளர்கள்",
    desc: "Learn from national medallists with more than twenty years in martial arts.",
    img: "/silambam/1-seasoned-coaches.png",
  },
  {
    title: "Rooted in tradition", 
    ta: "மரபில் வேரூன்றியது",
    desc: "Lessons follow the Tamil Kalaripayattu line and the old warrior codes.",
    img: "/silambam/2-rooted-in-tradition.png",
  },
  {
    title: "A stronger body", 
    ta: "வலிமையான உடல்",
    desc: "Full-body drills build strength, flexibility and stamina together.",
    img: "/silambam/3-stronger-body.png",
  },
  {
    title: "A calmer mind",
    ta: "அமைதியான மனம்",
    desc: "Patient, structured practice grows focus and resilience.",
    img: "/silambam/4-calmer-mind.png",
  },
  {
    title: "Every age welcome",
    ta: "எல்லா வயதினருக்கும் வரவேற்பு",
    desc: "Batches for children, teens, adults and women at any fitness level.",
    img: "/silambam/5-every-age-welcome.png",
  },
  {
    title: "Results you can see",
    ta: "கண்முன் தெரியும் வெற்றிகள்",
    desc: "Our students have won district, state and national titles.",
    img: "/silambam/6-results-you-can-see.png",
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
const EVENTS : [string, string][] = []; // e.g. [["Beginner batch opens", "1 November, Padaivedu arena"]]

const PROGRAMS = ["Single stick", "Double stick", "Surulvall", "Vel Kambu", "Maan Kombu", "Kuthuvarisai", "Advanced equipment and techniques", "Women's self-defence", "Youth program", "Gymnastics"];

const ITEMS = [
  { img: "/programs/1-single-stick.png", title: "Single stick", ta: "ஒற்றைக் கம்பு", desc: "One staff, total control." },
  { img: "/programs/2-double-stick.png", title: "Double stick", ta: "இரட்டைக் கம்பு", desc: "Two sticks, rhythm and reflex." },
  { img: "/programs/3-surulvall.png", title: "Surulvall", ta: "சுருள் வாள்", desc: "The flexible coiled blade." },
  { img: "/programs/4-vel-kambu.png", title: "Vel Kambu", ta: "வேல் கம்பு", desc: "Spear-staff reach and precision." },
  { img: "/programs/5-maan-kombu.png", title: "Maan Kombu", ta: "மான் கொம்பு", desc: "Twin buck-horn defence." },
  { img: "/programs/6-kuthuvarisai.png", title: "Kuthuvarisai", ta: "குத்து வரிசை", desc: "Fast strikes and unarmed combinations." },
  { img: "/programs/7-advance-equipments-techniques.png", title: "Advanced Techniques", ta: "மேம்பட்ட நுட்பங்கள்", desc: "Advanced weapons and techniques." },
  { img: "/programs/8-womens-self-defence.png", title: "Women's Self Defence", ta: "பெண்கள் தற்காப்பு", desc: "Practical protection and confidence." },
  { img: "/programs/9-youth-program.png", title: "Youth Program", ta: "இளைஞர் திட்டம்", desc: "Discipline and fitness for young learners." },
  { img: "/programs/10-gymnastics.png", title: "Gymnastics", ta: "ஜிம்னாஸ்டிக்ஸ்", desc: "Flexibility, balance and agility." },
];

// [left %, delay s, duration s] for the rising sparks
const EMBERS = [[8, 0, 7], [18, 2, 9], [27, 4, 8], [38, 1, 10], [48, 5, 7], [58, 3, 9], [68, 6, 8], [78, 2, 10], [88, 4, 7], [95, 1, 9]];

// Tailwind needs these written out in full so it can find them.
const SELECT =
  "has-[#p0:checked]:[--sel:0] has-[#p1:checked]:[--sel:1] has-[#p2:checked]:[--sel:2] has-[#p3:checked]:[--sel:3] has-[#p4:checked]:[--sel:4] has-[#p5:checked]:[--sel:5] has-[#p6:checked]:[--sel:6] has-[#p7:checked]:[--sel:7] has-[#p8:checked]:[--sel:8] has-[#p9:checked]:[--sel:9]";





// ---------- Pieces ----------
const Heading = ({ children, center, className } : { children: React.ReactNode; center?: boolean; className?: string } ) => (
  <div className={`${center ? "text-center" : ""} ${className ?? ""}`}>
    <h2 className="font-display text-3xl text-sand sm:text-5xl">{children}</h2>
    <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-ember to-gold ${center ? "mx-auto" : ""}`} />
  </div>
);
const Btn = ({ href, children, solid, className } : { href: string; children: React.ReactNode; solid?: boolean; className?: string } ) => (
  <a href={href} className={`inline-block rounded-md px-6 py-3 font-bold transition-colors ${solid ? "bg-gold text-umber hover:bg-sand" : "border border-gold/50 text-gold hover:bg-gold/10"} ${className ?? ""}`}>{children}</a>
);

const Logo = () => (
  <Image
    src="/logo.png"
    alt="Padaivedu Silambam Academy logo"
    width={40}
    height={40}
    className="grid h-10 w-10 place-items-center rounded-full border border-gold bg-umber font-display text-xl text-gold" aria-hidden="true" />

);

const features = [
  { src: "/silambam/1-seasoned-coaches.png", alt: "Seasoned coaches" },
  { src: "/silambam/2-rooted-in-tradition.png", alt: "Rooted in tradition" },
  { src: "/silambam/3-stronger-body.png", alt: "A stronger body" },
  { src: "/silambam/4-calmer-mind.png", alt: "A calmer mind" },
  { src: "/silambam/5-every-age-welcome.png", alt: "Every age welcome" },
  { src: "/silambam/6-results-you-can-see.png", alt: "Results you can see" },
];




function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-gold/20 bg-umber/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3" aria-label="Main">
        <a href="#top" className="flex items-center gap-3 ">
          <Logo />
          <span className="font-display text-lg text-gold sm:text-xl glow-text">{SITE.name}</span></a>
        
          <ul className="hidden items-center gap-6 lg:flex">
          {NAV.map(([l, h]) => <li key={h}><a href={h} className="text-sm text-sand/85 hover:text-gold">{l}</a></li>)}
          <li><a href="#join" className="rounded-md bg-ember px-4 py-2 text-sm font-bold text-white hover:bg-rust">Join now</a></li>
        </ul>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-gold/40 px-3 py-1.5 text-gold marker:hidden">Menu</summary>
          <ul className="absolute right-0 mt-2 w-48 space-y-1 rounded-md border border-gold/30 bg-umber p-3">
            {NAV.map(([l, h]) => <li key={h}><a href={h} className="block py-1 text-sand hover:text-gold">{l}</a></li>)}
            <li><a href="#join" className="block py-1 font-bold text-ember">Join now</a></li>
          </ul>
        </details>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-5 pb-16 pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative aspect-[16/9] min-h-[240px] overflow-hidden rounded-2xl border border-gold/30 shadow-2xl shadow-ember/20">
          <Image src="/hero.png" alt="Silambam fighters with staffs, swords and shields before a temple tower at sunset, under the title Padaivedu Yudhakalam" fill priority sizes="(min-width:1152px) 1152px, 100vw" className="hero-img object-cover" />
        </div>
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="glow-text text-2xl font-bold text-gold"> மண்ணில் விழுந்த வியர்வை, வரலாற்றில் மலர்ந்த பெருமை </p>
          <p className="mt-4 text-lg leading-8 text-sand/90 ">வீர மரபின் அசைவுகளை கற்று, வலிமையான நாளையை உருவாக்குவோம்.</p>
          <p className="mt-4 text-lg leading-8 text-sand/90 sm:text-xl">Master the movements of a warrior tradition and build a stronger tomorrow.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4 glow-text">
            <Btn href="#training" solid className="inline-block rounded-lg border-2 border-[#E3A72F] bg-[#E3A72F] px-5 py-2 font-bold text-[#1C120C] shadow-[0_0_20px_rgba(227,167,47,0.4)]">See our training</Btn><Btn href="#join">Join the academy</Btn></div>
        </div>
        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 border-t border-gold/20 pt-8 text-center sm:grid-cols-4">
          {STATS.map(([n, l]) => (
            <div key={l}><dt className="font-display text-4xl text-gold">{n}</dt><dd className="mt-1 text-sm text-sand/75">{l}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-stone/40 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 ">
        <div>
          <Heading className="glow-text">Old Tradition...! New Warriors...!</Heading>
          <p className="mt-6 text-lg leading-8">Padaivedu Yudhakalam keeps the ancient Tamil art of Silambam alive through disciplined training, strength, and tradition.</p>
          <p className="mt-4 text-lg leading-8">படைவீடு யுத்தகளம், பழமையான தமிழ் கலைையான சிலம்பத்தை பயிற்சி, வலிமை மற்றும் பாரம்பரியத்தின் மூலம் தலைமுறைகளுக்கு கொண்டு செல்கிறது.</p>
          <div className="mt-7 glow-text"><Btn href="#why" solid  className="inline-block rounded-lg border-2 border-[#E3A72F] bg-[#E3A72F] px-5 py-2 font-bold text-[#1C120C] shadow-[0_0_20px_rgba(227,167,47,0.4)]">Read our story</Btn></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {HIGHLIGHTS.map(([t, d], i) => (
            <article key={t} className={`rounded-xl border border-gold/25 bg-umber/70 p-5 ${i === 2 ? "sm:col-span-2" : ""}`}>
              <h3 className="font-display text-xl text-gold">{t}</h3><p className="mt-2 text-sand/85">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/*function Why() {
  return (
    <section id="why" className="bg-gradient-to-b from-umber via-stone/60 to-umber py-20">
      <div className="mx-auto max-w-6xl px-5 ">
        <Heading center className="glow-text">What sets us apart</Heading>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(([t, d]) => (
            <article key={t} className="rounded-xl border border-gold/20 bg-stone/50 p-6 text-center">
              <h3 className="font-display text-xl text-gold">{t}</h3><p className="mt-2 leading-7 text-sand/85">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
*/

function Why() {
  return (
    <section id="why" className="bg-gradient-to-b from-umber via-stone/60 to-umber py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Heading center className="glow-text">What sets us apart</Heading>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ title, ta, desc, img }) => (
            <article
              key={title}
              className="overflow-hidden rounded-xl border border-gold/20 bg-stone/50 text-center"
            >
              <Image
                src={img}
                alt=""
                width={760}
                height={560}
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <div className="p-6">
                <h3 className="font-display text-xl text-gold">{title}</h3>
                <p className="mt-1 text-sm text-gold/70">{ta}</p>
                <p className="mt-3 leading-7 text-sand/85">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




function Training() {
  const ys = [248, 308, 370, 432, 495];    // height of each pair of leaves, top to bottom
  const xs = [418, 430, 440, 450, 455];    // how far each branch reaches from the trunk
  const tilt = [34, 26, 18, 10, 2];        // upward tilt in degrees

  return (
    <section id="training" className="bg-stone/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Heading center className="glow-text">Programs we teach</Heading>

        {/* program list for screen readers only (the tree below is a picture) */}
        <ul className="sr-only">
          {PROGRAMS.map((p) => <li key={p}>{p}</li>)}
        </ul>

        {/* tree: shows at every size, scrolls sideways on narrow phones */}
        <div className="mt-10 overflow-x-auto">
          <svg viewBox="0 -90 800 730" aria-hidden="true" className="mx-auto block w-full min-w-[620px] max-w-3xl">
            <defs>
              <linearGradient id="bark" x1="0" x2="1">
                <stop offset="0" stopColor="#4A2A12" />
                <stop offset="0.5" stopColor="#7A4A24" />
                <stop offset="1" stopColor="#4A2A12" />
              </linearGradient>
            </defs>

            <ellipse cx="400" cy="622" rx="180" ry="14" fill="#000" opacity="0.25" />

            {/* top emblem: sun with the name curved around it */}
            <g style={{ filter: "drop-shadow(0 0 12px rgba(227,167,47,0.55))" }}>
              {/* stem down to the trunk */}
              <path d="M400 100 L400 205" stroke="#6B3F1D" strokeWidth="7" strokeLinecap="round" />

              {/* circle that the name follows (starts at the bottom, runs clockwise) */}
              <path id="nameRing" d="M400 136 A96 96 0 1 1 400 -56 A96 96 0 1 1 400 136" fill="none" />

              {/* sun rays */}
              {Array.from({ length: 16 }).map((_, i) => {
                const a = (i * 22.5 * Math.PI) / 180;
                const r2 = i % 2 === 0 ? 74 : 66;
                return (
                  <line
                    key={i}
                    x1={Number((400 + 56 * Math.cos(a)).toFixed(1))}
                    y1={Number((40 + 56 * Math.sin(a)).toFixed(1))}
                    x2={Number((400 + r2 * Math.cos(a)).toFixed(1))}
                    y2={Number((40 + r2 * Math.sin(a)).toFixed(1))}
                    stroke="#E3A72F" strokeWidth="4" strokeLinecap="round"
                  />
                );
              })}

              {/* rings */}
              <circle cx="400" cy="40" r="50" fill="#E3A72F" stroke="#B67E12" strokeWidth="3" />
              <circle cx="400" cy="40" r="41" fill="#2A1A10" stroke="#F7CB66" strokeWidth="1.5" />

              {/* two crossed staffs */}
              {[45, -45].map((deg) => (
                <g key={deg} transform={`rotate(${deg} 400 40)`}>
                  <rect x="365" y="36.5" width="70" height="7" rx="3.5" fill="#E3A72F" stroke="#B67E12" strokeWidth="1" />
                  {[382, 400, 418].map((x) => (
                    <line key={x} x1={x} y1="36.5" x2={x} y2="43.5" stroke="#8A5A14" strokeWidth="1.5" />
                  ))}
                </g>
              ))}

              {/* centre seal */}
              <circle cx="400" cy="40" r="11" fill="#E3A72F" stroke="#1C120C" strokeWidth="2" />
              <text x="400" y="41" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="700" fill="#1C120C" style={{ fontFamily: "var(--font-hind), sans-serif" }}>ப</text>

              {/* name curved around the sun */}
              <text fontSize="14" letterSpacing="2" fill="#E3A72F" textAnchor="middle" style={{ fontFamily: "var(--font-yatra), serif" }}>
                <textPath href="#nameRing" startOffset="50%">PADAIVEDU SILAMBAM ACADEMY</textPath>
              </text>
            </g>

            {/* branches */}
            {PROGRAMS.map((p, i) => {
              const level = i >> 1;
              const right = i % 2 === 0;
              const x = right ? xs[level] : 800 - xs[level];
              const y = ys[level];
              return (
                <path
                  key={p}
                  d={`M400 ${y + 34} Q ${(400 + x) / 2} ${y + 30} ${x} ${y}`}
                  fill="none"
                  stroke="#6B3F1D"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              );
            })}

            {/* trunk */}
            <path d="M355 622 C388 600 390 570 392 500 L394 205 Q400 190 406 205 L408 500 C410 570 412 600 445 622 Z" fill="url(#bark)" />

            {/* leaves with program names */}
            {PROGRAMS.map((p, i) => {
              const level = i >> 1;
              const right = i % 2 === 0;
              const dir = right ? 1 : -1;
              const x = right ? xs[level] : 800 - xs[level];
              const y = ys[level];
              const angle = right ? -tilt[level] : tilt[level];
              return (
                <g key={p} transform={`translate(${x} ${y}) rotate(${angle})`}>
                  <path
                    d={`M0 0 C${35 * dir} -36 ${135 * dir} -36 ${170 * dir} 0 C${135 * dir} 36 ${35 * dir} 36 0 0Z`}
                    className="fill-[#E3A72F] transition-colors hover:fill-[#F7CB66]"
                    stroke="#B67E12"
                    strokeWidth="2"
                  />
                  <text x={85 * dir} y="1" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="700" fill="#1C120C">
                    {p === "Advanced equipment and techniques" ? "Advanced techniques" : p}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}





function Women() {
  return (
    <section id="women" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl leading-tight text-sand sm:text-5xl glow-text"> 🌺 She Learns. She Leads. She Protects. 🥋</h2>
          <p className="mt-6 text-lg leading-8"> வீரத்தை சிலம்பம் அவளுக்குள் உருவாக்கவில்லை — ஏற்கனவே இருக்கும் வீரத்தை வெளிக்கொணர்கிறது. 🌺⚔️ </p>
          <ul className="mt-6 space-y-3">
            {WOMEN_POINTS.map((p) => (
              <li key={p} className="flex gap-3 border-b border-gold/15 pb-3"><span className="text-gold" aria-hidden>✔</span>{p}</li>
            ))}
          </ul>
          <div className="mt-8 glow-text inline-block rounded-lg border-2 border-[#E3A72F] bg-[#E3A72F] px-5 py-2 font-bold text-[#1C120C] shadow-[0_0_20px_rgba(227,167,47,0.4)]"><Btn href="#join" solid >Register free</Btn></div>
        </div>
        <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-rust/40 to-umber p-8 text-center">
          <h3 className="font-display text-3xl text-gold">🔥 Fearless Women</h3>
          <p className="mt-1 text-sand/85">⚔️ Ancient Art, Modern Defence</p>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-gold/20 pt-6">
            {[["40%", "of our students"], ["Free", "kit and classes"], ["3 months", "starter course"]].map(([n, l]) => (
              <div key={l}><dt className="font-display text-2xl text-gold">{n}</dt><dd className="mt-1 text-sm text-sand/75">{l}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="bg-stone/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Heading center className="glow-text">Our proudest wins</Heading>
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {ACHIEVEMENTS.map(([t, d]) => (
            <article key={t} className="border-l-4 border-ember bg-umber/60 p-6"><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-sand/85">{d}</p></article>
          ))}
        </div>
        <div className="mt-8 text-center"><Btn href="#achievements">See all achievements</Btn></div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="py-20">
      <div className="mx-auto max-w-4xl px-5">
        <Heading center className="glow-text">Coming up</Heading>
        {EVENTS.length ? (
          <ul className="mt-10 space-y-4">{EVENTS.map(([t, d]) => <li key={t} className="rounded-xl border border-gold/25 p-5"><b>{t}</b><p className="text-sand/80">{d}</p></li>)}</ul>
        ) : (
          <p className="mx-auto mt-10 max-w-xl rounded-xl border border-dashed border-gold/30 p-8 text-center text-lg text-sand/85">No events are scheduled right now. Join the academy and we will tell you the moment a date is set.</p>
        )}
        <div className="mt-8 text-center"><Btn href="#events">See all events</Btn></div>
      </div>
    </section>
  );
}


function Gallery() {
  const n = ITEMS.length;
  function vars(styles: Record<string, string | number>): CSSProperties {
    return styles as CSSProperties;
  }

  return (
    <section id="gallery" className="overflow-hidden bg-stone/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Heading center className="glow-text">Choose your path</Heading>
        <p className="mt-3 text-center text-sand/70">
          Ten disciplines, one tradition · பத்து கலைகள், ஒரே மரபு
        </p>

        <div
          role="radiogroup"
          aria-label="Silambam programs"
          className={`relative mx-auto mt-8 h-[480px] w-full max-w-4xl [--sel:0] sm:h-[540px] ${SELECT}`}
        >
          {/* spotlight behind the card */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

          {/* faint Tamil watermark */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[6rem] leading-none text-gold/[0.05] sm:text-[11rem]"
          >
            சிலம்பம்
          </span>

          {/* slowly turning dashed ring */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[80%] -translate-x-1/2 -translate-y-1/2">
            <div className="spin-ring h-full w-full rounded-full border border-dashed border-gold/25" />
          </div>

          {/* orbit line */}
          <div className="pointer-events-none absolute inset-x-[14%] inset-y-[10%] rounded-[50%] border border-gold/15" />

          {/* rising sparks */}
          {EMBERS.map(([l, d, t]) => (
            <span
              key={l}
              aria-hidden
              className="ember pointer-events-none absolute bottom-[6%] h-1.5 w-1.5 rounded-full bg-gold/80 blur-[1px]"
              style={vars({ left: `${l}%`, "--del": `${d}s`, "--dur": `${t}s` })}
            />
          ))}

          {/* ring of pictures: click one to pick that program */}
          {ITEMS.map((it, i) => (
            <label
              key={it.title}
              htmlFor={`p${i}`}
              aria-label={`Show ${it.title}`}
              className="orbit-item group absolute h-14 w-14 cursor-pointer rounded-full sm:h-[72px] sm:w-[72px]"
              style={vars({ "--n": i })}
            >
              <span className="relative block h-full w-full overflow-hidden rounded-full border-2 border-sand/40 group-hover:border-gold">
                <Image src={it.img} alt="" fill sizes="72px" className="object-cover" />
              </span>
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-umber/90 px-3 py-1 text-xs text-sand opacity-0 transition-opacity group-hover:opacity-100">
                {it.title}
              </span>
            </label>
          ))}

          {/* one hidden radio + one centre card per program */}
          {ITEMS.map((it, i) => (
            <div key={it.title} className="contents">
              <input
                type="radio"
                name="program"
                id={`p${i}`}
                defaultChecked={i === 0}
                aria-label={it.title}
                className="peer sr-only"
              />
              <div className="panel pointer-events-none invisible absolute inset-0 z-20 opacity-0 transition-[opacity,visibility] duration-500 peer-checked:visible peer-checked:opacity-100 peer-focus-visible:[&_.card]:ring-2 peer-focus-visible:[&_.card]:ring-gold">
                <div className="card pointer-events-auto absolute w-52 rounded-2xl border border-gold/60 bg-stone/90 px-4 pb-4 pt-14 text-center  sm:w-60"
                style={{ backgroundColor: "#2a1d12", boxShadow: "0 0 40px rgba(232,168,56,0.2)" }}>
                  <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 overflow-hidden rounded-full border-4 border-sand/90 bg-umber">
                    <Image src={it.img} alt={it.title} fill sizes="96px" className="object-cover" />
                  </div>
                  <p className="rise text-xs tracking-[0.3em] text-gold/60" style={vars({ "--d": 0 })}>
                    {String(i + 1).padStart(2, "0")} / {n}
                  </p>
                  <h3 className="rise font-display text-xl text-gold" style={vars({ "--d": 1 })}>{it.title}</h3>
                  <p className="rise text-sm text-gold/70" style={vars({ "--d": 2 })}>{it.ta}</p>
                  <div className="rise mx-auto my-2 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" style={vars({ "--d": 3 })} />
                  <p className="rise text-sm leading-6 text-sand/85" style={vars({ "--d": 4 })}>{it.desc}</p>
                  <div className="rise mt-4 flex items-center justify-center gap-3" style={vars({ "--d": 5 })}>
                    <label
                      htmlFor={`p${(i + n - 1) % n}`}
                      aria-label="Previous program"
                      className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-gold/40 text-gold hover:bg-gold/10"
                    >
                      ‹
                    </label>
                    <a href="#contact" className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-umber">
                      Enroll
                    </a>
                    <label
                      htmlFor={`p${(i + 1) % n}`}
                      aria-label="Next program"
                      className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-gold/40 text-gold hover:bg-gold/10"
                    >
                      ›
                    </label>
                  </div>
                </div>

                {/* dots */}
                <div className="pointer-events-auto absolute bottom-1 left-1/2 flex -translate-x-1/2 gap-2">
                  {ITEMS.map((d, j) => (
                    <label
                      key={d.title}
                      htmlFor={`p${j}`}
                      aria-label={`Go to ${d.title}`}
                      className={`h-2 cursor-pointer rounded-full transition-all ${j === i ? "w-5 bg-gold" : "w-2 bg-sand/40"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-2 text-center text-xs text-sand/50">
          Tap a circle to explore · வட்டத்தைத் தொட்டுப் பாருங்கள்
        </p>
      </div>
    </section>
  );
}





function Join() {
  return (
    <section id="join" className="px-5 py-20">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gold/30 bg-gradient-to-br from-rust/50 to-umber p-10 text-center sm:p-14">
        <h2 className="font-display text-3xl text-white sm:text-5xl glow-text">Ready to pick up the staff?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sand">Hundreds of students have changed their lives through Silambam. A new three-month beginner batch starts every month, and seats are limited.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 glow-text ">
          <Btn href={`tel:${SITE.phone.replace(/\s/g, "")}`} solid className="inline-block rounded-lg border-2 border-[#E3A72F] bg-[#E3A72F] px-5 py-2 font-bold text-[#1C120C] shadow-[0_0_20px_rgba(227,167,47,0.4)]">Enrol now</Btn><Btn href="#training">Browse programs</Btn></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-gold/20 bg-umber pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3"><Logo /><span className="font-display text-xl text-gold glow-text">{SITE.name}</span></div>
          <p className="mt-4 text-sand/75">Tamil staff fighting, taught with discipline, strength and heritage.</p>
        </div>
        <div>
          <h3 className="font-display text-lg text-sand glow-text">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sand/75">{NAV.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="font-display text-lg text-sand glow-text">Programs</h3>
          <ul className="mt-3 space-y-2 text-sand/75">{PROGRAMS.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div>
          <h3 className="font-display text-lg text-sand glow-text">Contact us</h3>
          <ul className="mt-3 space-y-3 text-sand/75">
            <li>{SITE.place}</li>
            <li><a className="hover:text-gold" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></li>
            <li><a className="hover:text-gold" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-between gap-2 border-t border-gold/15 px-5 py-6 text-sm text-sand/60">
        <p>© 2026 Padaivedu Yudhakalam. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FloatingCall() {
  return (
    <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} aria-label="Call the academy to enrol" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-ember px-5 py-3 font-bold text-white shadow-lg shadow-black/40 hover:bg-rust">
      <span aria-hidden>📞</span> Enrol Today
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero /><About /><Why /><Training /><Women /><Achievements /><Events /><Gallery /><Join />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );

}

