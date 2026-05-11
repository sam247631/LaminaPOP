export type Lang = 'es' | 'en';

export const dict = {
  es: {
    nav: {
      problem: 'El problema',
      solution: 'La solución',
      projects: 'Proyectos',
      team: 'Equipo',
      contact: 'Contacto',
    },
    hero: {
      tagline: 'Una nueva ola de construcción',
      lede:
        'Vivienda digna, asequible y rápida de construir — diseñada para escalar a las comunidades que más la necesitan.',
      scroll: 'Desliza',
    },
    crisis: {
      eyebrow: '01 — El problema',
      title: '1.6 mil millones de personas viven en viviendas inadecuadas.',
      sub: 'Cada punto representa, aproximadamente, 1.6 millones de personas sin hogar digno.',
      stat1: '1.6B',
      stat1Label: 'sin vivienda digna',
      stat2: '300M',
      stat2Label: 'niños sin techo seguro',
      stat3: '3B',
      stat3Label: 'necesitarán vivienda asequible para 2030',
      source: 'Fuentes: ONU-Hábitat, Banco Mundial. [DATOS APROXIMADOS]',
    },
    effects: {
      eyebrow: '02 — Efectos en cadena',
      title: 'La crisis de vivienda no termina en las paredes.',
      sub: 'Cuando una familia no tiene un techo digno, las consecuencias se extienden a la salud, la educación y la economía durante generaciones.',
      items: [
        {
          k: 'Salud',
          v: 'Enfermedades respiratorias, infecciones y mortalidad infantil aumentan en viviendas precarias.',
        },
        {
          k: 'Educación',
          v: 'Niños sin un espacio adecuado para estudiar abandonan la escuela en mayor proporción.',
        },
        {
          k: 'Economía',
          v: 'Familias destinan hasta el 50% de sus ingresos a alquileres informales o reparaciones constantes.',
        },
        {
          k: 'Resiliencia',
          v: 'Cada terremoto, huracán o inundación destruye lo poco construido y reinicia el ciclo.',
        },
      ],
    },
    solution: {
      eyebrow: '03 — La solución',
      title: 'Lamina POP: una casa, dos materiales, días de construcción.',
      sub: 'Lámina corrugada plegada en zigzag + remaches POP. Una membrana estructural ligera, fuerte y replicable por cualquier comunidad.',
      steps: [
        {
          k: 'Lámina',
          v: 'Hojas de zinc o acero galvanizado, disponibles en cualquier país, plegadas como un acordeón para ganar resistencia estructural.',
        },
        {
          k: 'Remaches POP',
          v: 'Unen las láminas sin soldadura ni mano de obra especializada. La comunidad construye su propia casa.',
        },
        {
          k: 'Cimentación mínima',
          v: 'Bases ligeras, sin tiempos de curado prolongados. Ideal para zonas remotas y de difícil acceso.',
        },
        {
          k: 'Ensamble',
          v: 'Casas, escuelas, talleres y bodegas: en pie en días, no meses. Más de 15 años de durabilidad probada.',
        },
      ],
    },
    projects: {
      eyebrow: '04 — Construido',
      title: 'Más de dos décadas levantando techos.',
      sub: 'Desde 2004 hemos construido viviendas, escuelas y espacios comunitarios — la mayoría en Guatemala, resistiendo clima tropical y movimientos sísmicos.',
    },
    team: {
      eyebrow: '05 — Equipo',
      title: 'Las personas detrás de Lamina POP.',
      members: [
        { name: 'Pablo Swezey', role: 'Fundador (1948–2014)' },
        { name: 'Sebastian Swezey', role: 'CEO' },
        { name: 'Marcus Alburez Myers', role: 'Chief Strategy Officer' },
        { name: 'Brett Gutstein', role: 'Chief Operating Officer' },
        { name: 'Alberto Barba', role: 'Asesor' },
      ],
    },
    contact: {
      eyebrow: '06 — Contacto',
      title: '¿Construimos algo juntos?',
      sub: 'Si quieres llevar Lamina POP a tu comunidad, colaborar o saber más, escríbenos.',
      cta: 'Escríbenos',
      email: 'info@laminapop.com',
    },
    footer: {
      copy: '© 2004–{year} Lamina POP. Una nueva ola de construcción.',
      partners: 'Aliado: Autodesk Technology Impact',
    },
  },
  en: {
    nav: {
      problem: 'The problem',
      solution: 'The solution',
      projects: 'Projects',
      team: 'Team',
      contact: 'Contact',
    },
    hero: {
      tagline: 'A new wave of construction',
      lede:
        'Dignified, affordable, fast-to-build housing — engineered to scale to the communities that need it most.',
      scroll: 'Scroll',
    },
    crisis: {
      eyebrow: '01 — The problem',
      title: '1.6 billion people live in inadequate housing.',
      sub: 'Each dot represents roughly 1.6 million people without a dignified home.',
      stat1: '1.6B',
      stat1Label: 'without dignified housing',
      stat2: '300M',
      stat2Label: 'children without safe shelter',
      stat3: '3B',
      stat3Label: 'will need affordable housing by 2030',
      source: 'Sources: UN-Habitat, World Bank. [APPROXIMATE FIGURES]',
    },
    effects: {
      eyebrow: '02 — Ripple effects',
      title: 'The housing crisis doesn\'t stop at the walls.',
      sub: 'When a family lacks a dignified roof, the consequences spread to health, education and the economy for generations.',
      items: [
        { k: 'Health', v: 'Respiratory disease, infections and child mortality rise sharply in precarious housing.' },
        { k: 'Education', v: 'Children without a proper place to study drop out of school at higher rates.' },
        { k: 'Economy', v: 'Families spend up to 50% of their income on informal rents or constant repairs.' },
        { k: 'Resilience', v: 'Every earthquake, hurricane or flood destroys what was built and restarts the cycle.' },
      ],
    },
    solution: {
      eyebrow: '03 — The solution',
      title: 'Lamina POP: one house, two materials, days to build.',
      sub: 'Corrugated metal sheet folded into a zigzag + POP rivets. A structural membrane that is light, strong, and replicable by any community.',
      steps: [
        { k: 'Sheet', v: 'Zinc or galvanized steel sheets, available in any country, folded like an accordion to gain structural strength.' },
        { k: 'POP rivets', v: 'Join the sheets without welding or specialized labor. Communities build their own homes.' },
        { k: 'Minimal foundation', v: 'Light footings, no long curing times. Ideal for remote, hard-to-reach areas.' },
        { k: 'Assembly', v: 'Homes, schools, workshops and warehouses — standing in days, not months. Over 15 years of proven durability.' },
      ],
    },
    projects: {
      eyebrow: '04 — Built',
      title: 'Over two decades raising roofs.',
      sub: 'Since 2004 we\'ve built homes, schools and community spaces — most in Guatemala, weathering tropical climate and seismic activity.',
    },
    team: {
      eyebrow: '05 — Team',
      title: 'The people behind Lamina POP.',
      members: [
        { name: 'Pablo Swezey', role: 'Founder (1948–2014)' },
        { name: 'Sebastian Swezey', role: 'CEO' },
        { name: 'Marcus Alburez Myers', role: 'Chief Strategy Officer' },
        { name: 'Brett Gutstein', role: 'Chief Operating Officer' },
        { name: 'Alberto Barba', role: 'Adviser' },
      ],
    },
    contact: {
      eyebrow: '06 — Contact',
      title: 'Shall we build something together?',
      sub: 'If you want to bring Lamina POP to your community, partner with us, or learn more — get in touch.',
      cta: 'Get in touch',
      email: 'info@laminapop.com',
    },
    footer: {
      copy: '© 2004–{year} Lamina POP. A new wave of construction.',
      partners: 'Partner: Autodesk Technology Impact',
    },
  },
} as const;

export type Dict = typeof dict.es;
