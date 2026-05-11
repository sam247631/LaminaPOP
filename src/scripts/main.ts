import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// ─── Smooth scroll (Lenis) ───────────────────────────────────────────────────
const lenis = new Lenis({
  duration: 1.1,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Smooth-scroll all same-page anchor links via Lenis (nav height offset = 52px)
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
      lenis.scrollTo(0);
      return;
    }
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      e.preventDefault();
      lenis.scrollTo(target, { offset: -60 });
    }
  });
});


// ─── Sticky nav ─────────────────────────────────────────────────────────────
const progressBar = document.getElementById('nav-progress');
ScrollTrigger.create({
  start: 0,
  end: 'max',
  onUpdate: (self) => {
    if (progressBar) progressBar.style.width = `${self.progress * 100}%`;
  },
});

const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
function setActiveNav(id: string) {
  navLinks.forEach((l) => l.classList.toggle('is-active', l.dataset.target === id));
}
['crisis', 'effects', 'solution', 'projects', 'contact'].forEach((id) => {
  const el = document.getElementById(id);
  if (!el) return;
  ScrollTrigger.create({
    trigger: el,
    start: 'top 55%',
    end: 'bottom 45%',
    onEnter:     () => setActiveNav(id),
    onEnterBack: () => setActiveNav(id),
    onLeave:     () => setActiveNav(''),
    onLeaveBack: () => setActiveNav(''),
  });
});


// ─── Hero entrance ───────────────────────────────────────────────────────────
const heroTl = gsap.timeline({ defaults: { ease: 'expo.out' } });
heroTl
  .from('.hero-eyebrow',  { y: 20, opacity: 0, duration: 0.8 }, 0)
  .from('.hero-word',     { y: '110%', opacity: 0, duration: 1.2, stagger: 0.08 }, 0.05)
  .from('.hero-tagline',  { y: 30, opacity: 0, duration: 1.0 }, 0.4)
  .from('.hero-lede',     { y: 20, opacity: 0, duration: 0.9 }, 0.55)
  .from('.hero-desc',     { y: 16, opacity: 0, duration: 0.8 }, 0.65)
  .from('.hero-scroll',   { y: 20, opacity: 0, duration: 0.8 }, 0.75)
  .from('.accent-strip',  { scaleY: 0, transformOrigin: 'top center', duration: 1.2, stagger: 0.02 }, 0.2);


// ─── Hero accent: flat strips → 3D corrugated panels → house ────────────────
{
  const house  = document.getElementById('accent-house');
  const rivets = document.getElementById('accent-rivets');
  const waves  = document.getElementById('accent-waves');
  const door   = document.getElementById('accent-door');
  const knob   = document.getElementById('accent-doorknob');

  house?.querySelectorAll<SVGPathElement>('path').forEach((p) => {
    const len = p.getTotalLength();
    gsap.set(p, { attr: { strokeDasharray: len, strokeDashoffset: len } });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    },
  });

  // 1. Outer strips dissolve
  tl.to('.accent-strip-outer', { opacity: 0, duration: 0.3 }, 0);

  // 2. Alternate inner strips rotate 75° on the Y axis — the CSS perspective
  //    on their parent makes this look genuinely 3D. Odd-indexed strips become
  //    the shadow channels; even-indexed strips stay facing forward as ridges.
  //    The result reads exactly like the corrugated metal channel profile.
  document.querySelectorAll<HTMLElement>('.accent-strip-inner').forEach((el, i) => {
    const isChannel = i % 2 === 1;
    tl.to(el, {
      rotateY:         isChannel ? 75  : 0,
      backgroundColor: isChannel ? '#1c1c1c' : '#FFD600',
      duration: 0.45,
      ease: 'power2.inOut',
    }, 0);
    // Ridge strips pick up a right-edge shadow to reinforce depth
    if (!isChannel) {
      tl.to(el, {
        boxShadow: '6px 0 10px rgba(0,0,0,0.3)',
        duration: 0.45,
      }, 0);
    }
  });

  // 3. House outline draws on; panel strips fade back
  if (house) {
    tl.to(house, { opacity: 1, duration: 0.05 }, 0.44);
    tl.to(house.querySelectorAll('path'), {
      attr: { strokeDashoffset: 0 },
      stagger: 0.12,
      duration: 0.65,
      ease: 'power2.out',
    }, 0.46);
  }
  tl.to('.accent-strip-inner', { opacity: 0.22, duration: 0.3 }, 0.52);

  // 4. Rivets burst in from the centre
  if (rivets) {
    tl.to(rivets, { opacity: 1, duration: 0.05 }, 0.68);
    tl.fromTo(
      rivets.querySelectorAll('circle'),
      { scale: 0, transformOrigin: 'center' },
      { scale: 1, stagger: { from: 'center', amount: 0.35 }, duration: 0.28, ease: 'back.out(2)' },
      0.68,
    );
  }

  // 5. Door
  if (door) tl.to(door, { opacity: 1, duration: 0.2 }, 0.80);
  if (knob) tl.to(knob, { opacity: 1, duration: 0.15 }, 0.88);

  // 6. Corrugation wave lines
  if (waves) tl.to(waves, { opacity: 1, duration: 0.3 }, 0.85);
}


// ─── Comparison table rows stagger in ────────────────────────────────────────
{
  const rows = document.querySelectorAll<HTMLElement>('.compare-row');
  if (rows.length) {
    gsap.from(rows, {
      opacity: 0,
      y: 16,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.06,
      scrollTrigger: { trigger: rows[0], start: 'top 85%', once: true },
    });
  }
}


// ─── Stats counter ───────────────────────────────────────────────────────────
document.querySelectorAll<HTMLElement>('.stat-number').forEach((el) => {
  const target = parseInt(el.dataset.target ?? '0', 10);
  gsap.fromTo(
    el,
    { innerText: 0 },
    {
      innerText: target,
      duration: 1.8,
      ease: 'power2.out',
      snap: { innerText: 1 },
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    },
  );
});


// ─── Reveal on scroll ────────────────────────────────────────────────────────
document.querySelectorAll<HTMLElement>(
  'section:not(#hero) h2, section:not(#hero) p, .effect-item, .solution-step, .project-card, .hiw-card'
).forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 28,
    duration: 0.9,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 92%',
      once: true,
    },
  });
});


// ─── Dot canvas driven by section scroll progress ────────────────────────────
type Shape = 'fade' | 'grid' | 'stat' | 'line' | 'scatter' | 'house' | 'logo' | 'effects';
type DotsAPI = {
  setShape:    (s: Shape) => void;
  setProgress: (s: Shape, p: number) => void;
};
const dots = (window as any).__dots as DotsAPI | undefined;

const shapeForSection: Record<string, Shape> = {
  hero:     'fade',
  crisis:   'grid',
  effects:  'effects',
  solution: 'logo',
  projects: 'scatter',
  contact:  'fade',
};

Object.entries(shapeForSection).forEach(([id, shape]) => {
  const el = document.getElementById(id);
  if (!el) return;
  ScrollTrigger.create({
    trigger: el,
    start: 'top 75%',
    end: 'bottom 25%',
    onEnter:     () => dots?.setShape(shape),
    onEnterBack: () => dots?.setShape(shape),
    onUpdate:    (self) => dots?.setProgress(shape, self.progress),
  });
});
dots?.setShape('fade');



// ─── Hero accent parallax ────────────────────────────────────────────────────
gsap.to('.hero-accent', {
  yPercent: -22,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});


// ─── Refresh after fonts load ────────────────────────────────────────────────
if ('fonts' in document) {
  (document as any).fonts.ready.then(() => ScrollTrigger.refresh());
}
