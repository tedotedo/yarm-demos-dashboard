(() => {
  'use strict';

  const STORAGE_KEY = 'yarm_dashboard_crm_v1';
  const THEME_KEY = 'yarm_dashboard_theme_v1';

  const ROUTE_NOTES = {
    all: {
      title: 'Master Field Command · 9 Local Businesses · 27 Mobile-First Websites',
      body: 'Before stepping inside any shop: open Tab 1 showing their broken/missing web listing, and Tab 2 with Set A, B, or C ready above the fold.'
    },
    danby: {
      title: 'Walk-In Route 1 · Danby Wynd Pair (5-Minute Stop)',
      body: 'Park once on Yarm High Street and duck down cobbled Danby Wynd (TS15 9SF) — #2 Ultra Football Shirts and #3 Borrelli Delicatessen are right beside each other.'
    },
    highst: {
      title: 'Walk-In Route 2 · Yarm High Street Stroll (17A → 24 → 109 → 137)',
      body: 'Four High Street stops within a 5-minute walk: The Granary (17A) → Osbournes (24) → Cafe Nossa (109) → Cask & Barrel (137).'
    },
    eaglescliffe: {
      title: 'Walk-In Route 3 · Eaglescliffe Station (TS16 0BU)',
      body: 'Best weekday window: 2:15pm–3:15pm after the lunch panini rush and before daytime close at 5 Station Road.'
    },
    outreach: {
      title: 'Direct Phone / Message Outreach (No Walk-In Shopfront)',
      body: 'Do not knock on residential doors — call or message with the 3-concept preview links so the owner can test them on their phone.'
    }
  };

  const BUSINESSES = [
    {
      id: 'ey-handyman-demo',
      num: 1,
      name: 'Eaglescliffe & Yarm Handyman',
      trade: 'Local Home Repairs & Odd-Job Specialist',
      location: 'Eaglescliffe & Yarm (TS16 / TS15 Patch)',
      route: 'outreach',
      stopBadge: 'Outreach · TS16/TS15',
      priority: '9/10',
      thumb: 'images/thumbs/ey-handyman-demo.jpg',
      domainTone: 'danger',
      domainHook: 'eyhandyman.com expired 9 Jun 2026 (shows Chinese 503 error) · eyhandyman.co.uk is FREE',
      setA: 'https://tedotedo.github.io/ey-handyman-demo/',
      setB: 'https://tedotedo.github.io/ey-handyman-demo/b/',
      setC: 'https://tedotedo.github.io/ey-handyman-demo/c/',
      labelA: 'Blueprint Pad',
      labelB: 'Kinetic Trade',
      labelC: '3-Step Docket',
      repo: 'https://github.com/tedotedo/ey-handyman-demo',
      phone: null,
      phoneWarning: 'Confirm van / GBP phone',
      bestTime: 'Weekday late afternoon / early evening message or call',
      hook: "Hi — I'm Mark, local to the area. When homeowners click your old eyhandyman.com link, it now shows a Chinese 503 error page because the domain expired in June, while eyhandyman.co.uk is free to register. I built three mobile-first concept sites with a Fridge Odd-Job Notepad where customers tick 4–5 small jobs into one tidy visit. Mind if I send you the preview links?",
      threeTaps: '1) Tick tasks on the Bulldog-Clip Fridge Odd-Job List → 2) Test the TS16/TS15 postcode patch checker → 3) Submit a multi-job docket to preview the Owner Receipt Ticket.',
      subpages: [
        { label: 'services.html', url: 'https://tedotedo.github.io/ey-handyman-demo/services.html' },
        { label: 'areas.html', url: 'https://tedotedo.github.io/ey-handyman-demo/areas.html' },
        { label: 'quote.html', url: 'https://tedotedo.github.io/ey-handyman-demo/quote.html' }
      ]
    },
    {
      id: 'ultra-football-shirts-demo',
      num: 3,
      name: 'Ultra Football Shirts',
      trade: 'Authentic Vintage & Retro Football Shirts',
      location: '2 Danby Wynd, Yarm TS15 9SF',
      route: 'danby',
      stopBadge: 'Stop A · 2 Danby Wynd',
      priority: '8/10',
      thumb: 'images/thumbs/ultra-football-shirts-demo.jpg',
      domainTone: 'danger',
      domainHook: 'ultrafootballshirts.co.uk throws Cloudflare Error 1001 · copaclassics.co.uk is 404',
      setA: 'https://tedotedo.github.io/ultra-football-shirts-demo/',
      setB: 'https://tedotedo.github.io/ultra-football-shirts-demo/b/',
      setC: 'https://tedotedo.github.io/ultra-football-shirts-demo/c/',
      labelA: '90s Fanzine',
      labelB: 'Floodlit Rail',
      labelC: 'Kit Finder',
      repo: 'https://github.com/tedotedo/ultra-football-shirts-demo',
      extraLink: { label: 'Admin Pad ↗', url: 'https://tedotedo.github.io/ultra-football-shirts-demo/admin.html' },
      phone: null,
      phoneWarning: 'Walk-in @ 2 Danby Wynd',
      bestTime: 'Weekday mid-morning or afternoon (avoid Saturday matchday rush)',
      hook: "Hi — I'm Mark, local to the area. Two quick things I spotted looking you up online: the old copaclassics.co.uk link says 'store unavailable', and ultrafootballshirts.co.uk—which you own until April 2027—is throwing a Cloudflare 1001 DNS error. I mocked up three lightweight kit-shop concepts with Danby Wynd Click & Collect and a 10-second phone admin screen so you don't need an expensive monthly Shopify plan.",
      threeTaps: '1) Filter die-cut swing-tag shirts by 1990s / Size L → 2) Tap Click & Collect · 2 Danby Wynd → 3) Open Admin Pad (admin.html) and flip a 1-of-1 shirt to Reserved in one tap.',
      subpages: [
        { label: 'sell-find.html', url: 'https://tedotedo.github.io/ultra-football-shirts-demo/sell-find.html' },
        { label: 'admin.html (Owner Scanner)', url: 'https://tedotedo.github.io/ultra-football-shirts-demo/admin.html' }
      ]
    },
    {
      id: 'borrelli-demo',
      num: 6,
      name: 'Borrelli Delicatessen',
      trade: 'Italian Salumeria, Panini & Antipasto Nights',
      location: '3 Danby Wynd, Yarm TS15 9SF',
      route: 'danby',
      stopBadge: 'Stop B · 3 Danby Wynd',
      priority: '7/10',
      thumb: 'images/thumbs/borrelli-demo.jpg',
      domainTone: 'danger',
      domainHook: 'borrellis.co.uk 302-redirects to survey-keys.com spam · borrellideli.co.uk is FREE',
      setA: 'https://tedotedo.github.io/borrelli-demo/',
      setB: 'https://tedotedo.github.io/borrelli-demo/b/',
      setC: 'https://tedotedo.github.io/borrelli-demo/c/',
      labelA: 'Salumeria Awning',
      labelB: 'Aperitivo Dark',
      labelC: 'Board Stepper',
      repo: 'https://github.com/tedotedo/borrelli-demo',
      phone: '01642 791888',
      phoneHref: 'tel:01642791888',
      bestTime: '10:30–11:30am or 2:30–3:30pm (avoid 12–2pm panini queue & Fri prep)',
      hook: "Hi — I'm Mark. When customers look up Borrelli online and tap borrellis.co.uk, it redirects them to a spam survey site (survey-keys.com). Meanwhile borrellideli.co.uk is completely free to register, so I put together three bespoke salumeria designs featuring your Friday 'Piatto Di Antipasto Night' counter tickets and a sharing-board & gift-hamper builder.",
      threeTaps: '1) Show striped Italian canopy & perforated Friday Piatto ticket → 2) Tap items in the Salumi/Formaggi Board Builder → 3) Send straight to Counter Pre-Order to show the Owner Ticket.',
      subpages: [
        { label: 'menu-deli.html', url: 'https://tedotedo.github.io/borrelli-demo/menu-deli.html' },
        { label: 'orders-bookings.html', url: 'https://tedotedo.github.io/borrelli-demo/orders-bookings.html' }
      ]
    },
    {
      id: 'pilates-studio-yarm-demo',
      num: 4,
      name: 'The Pilates Studio Yarm',
      trade: 'Granary Matwork & 1:1 Reformer Sanctuary',
      location: 'The Granary, 17A High Street, Yarm TS15 9BW',
      route: 'highst',
      stopBadge: 'Stop C · 17A High St',
      priority: '7/10',
      thumb: 'images/thumbs/pilates-studio-yarm-demo.jpg',
      domainTone: 'warn',
      domainHook: 'Owns thepilatesstudioyarm.co.uk — 2010 WordPress theme cut off on mobile, zero booking forms',
      setA: 'https://tedotedo.github.io/pilates-studio-yarm-demo/',
      setB: 'https://tedotedo.github.io/pilates-studio-yarm-demo/b/',
      setC: 'https://tedotedo.github.io/pilates-studio-yarm-demo/c/',
      labelA: 'Granary Folio',
      labelB: 'Candlelit Studio',
      labelC: 'Class Matcher',
      repo: 'https://github.com/tedotedo/pilates-studio-yarm-demo',
      phone: '07702 300960',
      phoneHref: 'tel:07702300960',
      bestTime: 'Strictly between Mon–Thu classes (e.g. ~11:50am Wed/Thu) or call Helen first',
      hook: "Hi Helen — I'm Mark. Your Granary studio has a wonderful reputation since 2010, but on a phone your current 2010 WordPress theme cuts half the page off, and your term timetable post has no form to request a £9/class block or join a waiting list. I designed three calm Granary concepts around your real Mon–Thu schedule and £40 1:1 Reformer sessions.",
      threeTaps: '1) Compare Tab 1 (cut-off 2010 WordPress site) vs Tab 2 → 2) Tap a goal in "Which Practice Suits Your Body?" → 3) Open £40/hr 1:1 Reformer request form.',
      subpages: [
        { label: 'timetable-booking.html', url: 'https://tedotedo.github.io/pilates-studio-yarm-demo/timetable-booking.html' },
        { label: 'reformer-tuition.html', url: 'https://tedotedo.github.io/pilates-studio-yarm-demo/reformer-tuition.html' }
      ]
    },
    {
      id: 'osbournes-demo',
      num: 5,
      name: 'Osbournes',
      trade: 'High Street Bar, Brunch, Live Sport & Snug',
      location: '24 High Street, Yarm TS15 9AE',
      route: 'highst',
      stopBadge: 'Stop D · 24 High St',
      priority: '7/10',
      thumb: 'images/thumbs/osbournes-demo.jpg',
      domainTone: 'danger',
      domainHook: 'osbournes.co.uk/yarm dead · CAMRA says "No website" · osbournesyarm.co.uk is FREE',
      setA: 'https://tedotedo.github.io/osbournes-demo/',
      setB: 'https://tedotedo.github.io/osbournes-demo/b/',
      setC: 'https://tedotedo.github.io/osbournes-demo/c/',
      labelA: 'Gilded Pub Mirror',
      labelB: 'Late-Night Brass',
      labelC: 'Table & Snug App',
      repo: 'https://github.com/tedotedo/osbournes-demo',
      phone: null,
      phoneWarning: 'Verify phone: 781012 vs 801012',
      bestTime: 'Quiet weekday mid-afternoon (2:30pm–4:30pm)',
      hook: "Hi — I'm Mark. Right now CAMRA lists Osbournes as having 'No website', the old osbournes.co.uk/yarm link is dead, and directories list two conflicting phone numbers for you (781012 vs 801012). osbournesyarm.co.uk is available right now, and I mocked up three High Street public-house designs for brunch, live sport, and party snug bookings.",
      threeTaps: '1) Show gilded Victorian pub mirror & brass plaques → 2) Flip the High Street Chalkboard Slate (Brunch / Live Sport / Weekend) → 3) Test a Party Snug booking preset.',
      subpages: [
        { label: 'menus.html', url: 'https://tedotedo.github.io/osbournes-demo/menus.html' },
        { label: 'whats-on-bookings.html', url: 'https://tedotedo.github.io/osbournes-demo/whats-on-bookings.html' }
      ]
    },
    {
      id: 'cafe-nossa-demo',
      num: 7,
      name: 'Cafe Nossa',
      trade: 'Portuguese Artisan Coffee, Pastéis de Nata & Deli',
      location: '109 High Street, Yarm TS15 9BB',
      route: 'highst',
      stopBadge: 'Stop E · 109 High St',
      priority: '7/10',
      thumb: 'images/thumbs/cafe-nossa-demo.jpg',
      domainTone: 'danger',
      domainHook: 'Voted #1 Coffee (This Is Yarm) yet ZERO website anywhere · cafenossa.co.uk is FREE',
      setA: 'https://tedotedo.github.io/cafe-nossa-demo/',
      setB: 'https://tedotedo.github.io/cafe-nossa-demo/b/',
      setC: 'https://tedotedo.github.io/cafe-nossa-demo/c/',
      labelA: 'Azulejo Mosaic',
      labelB: 'Espresso Roast',
      labelC: 'Nata Box Builder',
      repo: 'https://github.com/tedotedo/cafe-nossa-demo',
      phone: '01642 640274',
      phoneHref: 'tel:01642640274',
      bestTime: 'Weekday afternoon after 2:00pm brunch peak',
      hook: "Hi — congratulations on being voted #1 Coffee on This Is Yarm! Anyone searching Cafe Nossa on Google hits a wall if they don't use Instagram, and cafenossa.co.uk is still completely unclaimed. I designed three Lisbon azulejo & espresso concepts with a live 12-tart Pastéis de Nata & Grazing Platter pre-order builder for High Street offices and weekend hosts.",
      threeTaps: '1) Show glazed Lisbon street-plaque & azulejo tile frieze → 2) Tap the 12-Tart Office Box preset (watch the 12-slot tart tray fill!) → 3) Submit to show the Owner Pre-Order Ticket.',
      subpages: [
        { label: 'menu-deli.html', url: 'https://tedotedo.github.io/cafe-nossa-demo/menu-deli.html' },
        { label: 'boxes-preorder.html', url: 'https://tedotedo.github.io/cafe-nossa-demo/boxes-preorder.html' }
      ]
    },
    {
      id: 'cask-and-barrel-demo',
      num: 9,
      name: 'Cask & Barrel',
      trade: 'Real Ale, Fine Wines & Single Malts Micropub',
      location: '137 High Street, Yarm TS15 9BB',
      route: 'highst',
      stopBadge: 'Bonus · 137 High St',
      priority: 'Existing',
      thumb: 'images/thumbs/cask-and-barrel-demo.svg',
      domainTone: 'ok',
      domainHook: 'Existing 3-repo concept suite (cask-and-barrel-demo / -b / -c) — included for High St convenience',
      setA: 'https://tedotedo.github.io/cask-and-barrel-demo/',
      setB: 'https://tedotedo.github.io/cask-and-barrel-demo-b/',
      setC: 'https://tedotedo.github.io/cask-and-barrel-demo-c/',
      labelA: 'Design A',
      labelB: 'Design B (-b)',
      labelC: 'Design C (-c)',
      repo: 'https://github.com/tedotedo/cask-and-barrel-demo',
      phone: null,
      phoneWarning: '137 High Street · Yarm',
      bestTime: 'Early afternoon opening hours on Yarm High Street',
      hook: 'Your existing three standalone Cask & Barrel concept repositories (Design A, Design B, Design C) right down at 137 High Street — grouped here so your entire Yarm High Street walk has one unified dashboard.',
      threeTaps: '1) Tap Design A, Design B, or Design C above → 2) Use Live Preview & Compare to show all three side-by-side on iPad or phone.',
      subpages: [
        { label: 'Repo B (-b)', url: 'https://github.com/tedotedo/cask-and-barrel-demo-b' },
        { label: 'Repo C (-c)', url: 'https://github.com/tedotedo/cask-and-barrel-demo-c' }
      ]
    },
    {
      id: 'serinos-demo',
      num: 2,
      name: "Serino's Deli & Wine Bar",
      trade: 'Daytime Italian Deli → Evening Wine & Pizza',
      location: '5 Station Road, Eaglescliffe TS16 0BU',
      route: 'eaglescliffe',
      stopBadge: 'Stop F · Eaglescliffe Stn',
      priority: '8/10',
      thumb: 'images/thumbs/serinos-demo.jpg',
      domainTone: 'danger',
      domainHook: 'serinosdeli.com serves gambling spam · serinosdeli.co.uk & serinos.co.uk are FREE',
      setA: 'https://tedotedo.github.io/serinos-demo/',
      setB: 'https://tedotedo.github.io/serinos-demo/b/',
      setC: 'https://tedotedo.github.io/serinos-demo/c/',
      labelA: 'Milanese Day/Night',
      labelB: 'Candlelit Wine Bar',
      labelC: 'Table & Platter App',
      repo: 'https://github.com/tedotedo/serinos-demo',
      phone: '01642 788864',
      phoneHref: 'tel:01642788864',
      bestTime: 'Weekday 2:15pm–3:15pm (between lunch service and afternoon close)',
      hook: "Hi — I'm Mark. You've swept This Is Yarm (#1 Breakfast, #2 Coffee, #3 Pizza), yet serinosdeli.co.uk doesn't exist and anyone typing serinosdeli.com lands on an overseas gambling spam site! Both serinosdeli.co.uk and serinos.co.uk are free to register, and I built three Day-to-Night Station Arch concepts showing both sides of Serino's.",
      threeTaps: '1) Flip the ☀ Daytime Deli / ☾ Wine & Pizza mood switch in the masthead → 2) Browse the folded La Carta menu → 3) Tap a Friday Wine & Pizza preset in bookings.',
      subpages: [
        { label: 'menus.html', url: 'https://tedotedo.github.io/serinos-demo/menus.html' },
        { label: 'bookings.html', url: 'https://tedotedo.github.io/serinos-demo/bookings.html' }
      ]
    },
    {
      id: 'jmh-travel-demo',
      num: 8,
      name: 'JMH Travel Solutions Ltd',
      trade: '7–70 Seat Minibus/Coach Hire, PSV Cover & TM',
      location: 'Eaglescliffe, Stockton & Yarm (Phone Outreach Only)',
      route: 'outreach',
      stopBadge: 'Phone Only · Do Not Knock',
      priority: '7/10',
      thumb: 'images/thumbs/jmh-travel-demo.jpg',
      domainTone: 'warn',
      domainHook: 'Owns jmhtravelsolutions.co.uk — IONOS "Under construction", /contact/ 404, mail@example.com',
      setA: 'https://tedotedo.github.io/jmh-travel-demo/',
      setB: 'https://tedotedo.github.io/jmh-travel-demo/b/',
      setC: 'https://tedotedo.github.io/jmh-travel-demo/c/',
      labelA: 'Transit Console',
      labelB: 'Executive Fleet',
      labelC: '7–70 Seat Stepper',
      repo: 'https://github.com/tedotedo/jmh-travel-demo',
      phone: '01642 058430',
      phoneHref: 'tel:01642058430',
      phoneWarning: 'Residential postcode — Call only',
      bestTime: 'Mid-morning weekday phone call (10:00am–12:00pm) after school-run peak',
      hook: "Hi — I'm Mark, based locally. I spotted that jmhtravelsolutions.co.uk is still stuck on an IONOS 'Under construction' template with mail@example.com and a 404 /contact/ link on This Is Yarm. I built three ready-to-launch fleet & B2B compliance designs with an interactive 7-to-70 seat matcher and dedicated PSV Driver Cover / External Transport Manager enquiries.",
      threeTaps: '1) Drag the 7–70 passenger slider (watch the 70-seat schematic & vehicle class light up) → 2) Switch between Private Hire vs B2B PSV Driver Cover / TM → 3) Preview the Dispatch Docket.',
      subpages: [
        { label: 'fleet-services.html', url: 'https://tedotedo.github.io/jmh-travel-demo/fleet-services.html' },
        { label: 'quote.html', url: 'https://tedotedo.github.io/jmh-travel-demo/quote.html' }
      ]
    }
  ];

  // State
  let activeRoute = 'all';
  let activeStatusFilter = 'all';
  let searchQuery = '';
  let crmState = loadCrm();

  // Inspector state
  let inspectorBizId = BUSINESSES[0].id;
  let inspectorMode = 'single'; // 'single' | 'triple'
  let inspectorVariant = 'A';   // 'A' | 'B' | 'C'
  let inspectorWidth = '390px'; // '390px' | '360px' | '820px' | '100%'

  function loadCrm() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }

  function saveCrm() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(crmState));
    } catch (_) {
      // ignore storage quota errors
    }
  }

  function getBizCrm(id) {
    return crmState[id] || { status: 'todo', note: '' };
  }

  function setBizCrm(id, patch) {
    crmState[id] = { ...getBizCrm(id), ...patch, updatedAt: new Date().toISOString() };
    saveCrm();
    updateKpis();
  }

  // Toast helper
  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 2600);
  }

  async function copyText(text, okMsg) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(okMsg || 'Copied to clipboard');
    } catch (_) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      showToast(okMsg || 'Copied to clipboard');
    }
  }

  function buildPitchMessage(biz) {
    return [
      `Hi — it's Mark (local web designer in Yarm/Eaglescliffe).`,
      `I mocked up three mobile-first website concepts specifically for ${biz.name} so you can compare three different styles on your phone:`,
      ``,
      `• Concept A (${biz.labelA}): ${biz.setA}`,
      `• Concept B (${biz.labelB}): ${biz.setB}`,
      `• Concept C (${biz.labelC}): ${biz.setC}`,
      ``,
      `They're private preview demos (hidden from Google) — happy to tailor whichever style you prefer!`
    ].join('\n');
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function updateKpis() {
    let pitched = 0;
    let followup = 0;
    let won = 0;
    BUSINESSES.forEach((b) => {
      const st = getBizCrm(b.id).status;
      if (st === 'visited' || st === 'followup' || st === 'won') pitched++;
      if (st === 'followup') followup++;
      if (st === 'won') won++;
    });
    document.getElementById('kpiPitched').textContent = `${pitched} / ${BUSINESSES.length}`;
    document.getElementById('kpiFollowup').textContent = String(followup);
    document.getElementById('kpiWon').textContent = String(won);
  }

  function renderRouteBanner() {
    const info = ROUTE_NOTES[activeRoute] || ROUTE_NOTES.all;
    const titleEl = document.getElementById('routeBannerTitle');
    const bodyEl = document.getElementById('routeBannerBody');
    if (titleEl) titleEl.textContent = info.title;
    if (bodyEl) bodyEl.textContent = info.body;
  }

  function matchesFilters(biz) {
    if (activeRoute !== 'all' && biz.route !== activeRoute) return false;
    const crm = getBizCrm(biz.id);
    if (activeStatusFilter !== 'all' && crm.status !== activeStatusFilter) return false;
    if (searchQuery) {
      const hay = [
        biz.name,
        biz.trade,
        biz.location,
        biz.domainHook,
        biz.hook,
        biz.labelA,
        biz.labelB,
        biz.labelC,
        crm.note
      ].join(' ').toLowerCase();
      if (!hay.includes(searchQuery)) return false;
    }
    return true;
  }

  function renderCards() {
    const grid = document.getElementById('cardsGrid');
    const empty = document.getElementById('emptyState');
    const filtered = BUSINESSES.filter(matchesFilters);

    if (!filtered.length) {
      grid.innerHTML = '';
      empty.hidden = false;
      return;
    }
    empty.hidden = true;

    grid.innerHTML = filtered.map((biz) => {
      const crm = getBizCrm(biz.id);
      const toneClass = biz.domainTone === 'warn'
        ? 'domain-pill domain-pill--warn'
        : biz.domainTone === 'ok'
          ? 'domain-pill domain-pill--ok'
          : 'domain-pill';

      const phoneChip = biz.phone && biz.phoneHref
        ? `<a class="chip-btn" href="${escapeHtml(biz.phoneHref)}" title="Call verified number">☎ ${escapeHtml(biz.phone)}</a>`
        : '';

      const warnChip = biz.phoneWarning
        ? `<span class="chip-btn chip-btn--warn">${escapeHtml(biz.phoneWarning)}</span>`
        : '';

      const extraChip = biz.extraLink
        ? `<a class="chip-btn" href="${escapeHtml(biz.extraLink.url)}" target="_blank" rel="noopener">${escapeHtml(biz.extraLink.label)}</a>`
        : '';

      const subpagesHtml = (biz.subpages || []).map((sp) =>
        `<a class="subpage-pill" href="${escapeHtml(sp.url)}" target="_blank" rel="noopener">${escapeHtml(sp.label)} ↗</a>`
      ).join('');

      return `
        <article class="biz-card" data-biz-id="${escapeHtml(biz.id)}" data-status="${escapeHtml(crm.status)}">
          <div class="card-media">
            <img src="${escapeHtml(biz.thumb)}" alt="${escapeHtml(biz.name)} preview" loading="lazy" width="640" height="384">
            <div class="media-top-badges">
              <span class="badge-stop">${escapeHtml(biz.stopBadge)}</span>
              <span class="badge-priority">Priority ${escapeHtml(biz.priority)}</span>
            </div>
            <button type="button" class="btn-preview-overlay" data-action="inspect" data-id="${escapeHtml(biz.id)}">
              ⤢ Live Preview &amp; Compare
            </button>
          </div>

          <div class="card-body">
            <div>
              <div class="card-title-row">
                <h2 class="card-title">${escapeHtml(biz.name)}</h2>
              </div>
              <p class="card-meta">${escapeHtml(biz.trade)} · <strong>${escapeHtml(biz.location)}</strong></p>
            </div>

            <div class="${toneClass}">
              ${escapeHtml(biz.domainHook)}
            </div>

            <div class="concept-trio" role="group" aria-label="Three live website concepts for ${escapeHtml(biz.name)}">
              <a class="btn-concept btn-concept--a" href="${escapeHtml(biz.setA)}" target="_blank" rel="noopener">
                <span class="concept-key">Set A ↗</span>
                <span class="concept-sub">${escapeHtml(biz.labelA)}</span>
              </a>
              <a class="btn-concept btn-concept--b" href="${escapeHtml(biz.setB)}" target="_blank" rel="noopener">
                <span class="concept-key">Set B ↗</span>
                <span class="concept-sub">${escapeHtml(biz.labelB)}</span>
              </a>
              <a class="btn-concept btn-concept--c" href="${escapeHtml(biz.setC)}" target="_blank" rel="noopener">
                <span class="concept-key">Set C ↗</span>
                <span class="concept-sub">${escapeHtml(biz.labelC)}</span>
              </a>
            </div>

            <div class="utility-row">
              <button type="button" class="chip-btn" data-action="share-msg" data-id="${escapeHtml(biz.id)}">✉ Share / Pitch Msg</button>
              <button type="button" class="chip-btn" data-action="copy-links" data-id="${escapeHtml(biz.id)}">⧉ Copy 3 URLs</button>
              <a class="chip-btn" href="${escapeHtml(biz.repo)}" target="_blank" rel="noopener">GitHub ↗</a>
              ${extraChip}
              ${phoneChip}
              ${warnChip}
            </div>

            <details class="pitch-drawer">
              <summary>Walk-In Timing &amp; 20s Hook</summary>
              <div class="pitch-content">
                <div><strong>Best window:</strong> ${escapeHtml(biz.bestTime)}</div>
                <blockquote class="pitch-quote">“${escapeHtml(biz.hook)}”</blockquote>
                <div><strong>Show in 3 taps:</strong> ${escapeHtml(biz.threeTaps)}</div>
                <div class="subpages-list">
                  <button type="button" class="subpage-pill" data-action="copy-hook" data-id="${escapeHtml(biz.id)}" style="cursor:pointer;">Copy 20s Script</button>
                  ${subpagesHtml}
                </div>
              </div>
            </details>

            <div class="crm-strip">
              <select class="card-status-select" aria-label="Outreach status for ${escapeHtml(biz.name)}" data-action="status" data-id="${escapeHtml(biz.id)}">
                <option value="todo" ${crm.status === 'todo' ? 'selected' : ''}>○ To Pitch</option>
                <option value="visited" ${crm.status === 'visited' ? 'selected' : ''}>● Visited / Sent</option>
                <option value="followup" ${crm.status === 'followup' ? 'selected' : ''}>◐ Follow Up</option>
                <option value="won" ${crm.status === 'won' ? 'selected' : ''}>★ Won Client!</option>
              </select>
              <input
                type="text"
                class="card-note-input"
                placeholder="Quick field note (owner name, callback…)"
                value="${escapeHtml(crm.note || '')}"
                aria-label="Field note for ${escapeHtml(biz.name)}"
                data-action="note"
                data-id="${escapeHtml(biz.id)}"
              >
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Studio Inspector Modal
  function populateInspectorSelect() {
    const sel = document.getElementById('inspectorBizSelect');
    if (!sel) return;
    sel.innerHTML = BUSINESSES.map((b) =>
      `<option value="${escapeHtml(b.id)}">${escapeHtml(b.name)}</option>`
    ).join('');
  }

  function getVariantUrl(biz, variant) {
    if (variant === 'B') return biz.setB;
    if (variant === 'C') return biz.setC;
    return biz.setA;
  }

  function renderInspectorStage() {
    const biz = BUSINESSES.find((b) => b.id === inspectorBizId) || BUSINESSES[0];
    const sel = document.getElementById('inspectorBizSelect');
    if (sel && sel.value !== biz.id) sel.value = biz.id;

    const stage = document.getElementById('inspectorStage');
    const singleControls = document.getElementById('singleControlsGroup');
    const openExternal = document.getElementById('inspectorOpenTab');

    // Sync mode buttons
    document.querySelectorAll('[data-ins-mode]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.insMode === inspectorMode);
    });
    document.querySelectorAll('[data-ins-var]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.insVar === inspectorVariant);
    });
    document.querySelectorAll('[data-ins-width]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.insWidth === inspectorWidth);
    });

    if (openExternal) {
      openExternal.href = getVariantUrl(biz, inspectorVariant);
    }

    if (inspectorMode === 'triple') {
      if (singleControls) singleControls.style.display = 'none';
      stage.innerHTML = `
        <div class="triple-stage">
          <div class="triple-col">
            <div class="triple-col-head">
              <span>Set A · ${escapeHtml(biz.labelA)}</span>
              <a href="${escapeHtml(biz.setA)}" target="_blank" rel="noopener" style="color:var(--brand)">Open ↗</a>
            </div>
            <iframe src="${escapeHtml(biz.setA)}" title="${escapeHtml(biz.name)} Set A"></iframe>
          </div>
          <div class="triple-col">
            <div class="triple-col-head">
              <span>Set B · ${escapeHtml(biz.labelB)}</span>
              <a href="${escapeHtml(biz.setB)}" target="_blank" rel="noopener" style="color:var(--brand)">Open ↗</a>
            </div>
            <iframe src="${escapeHtml(biz.setB)}" title="${escapeHtml(biz.name)} Set B"></iframe>
          </div>
          <div class="triple-col">
            <div class="triple-col-head">
              <span>Set C · ${escapeHtml(biz.labelC)}</span>
              <a href="${escapeHtml(biz.setC)}" target="_blank" rel="noopener" style="color:var(--brand)">Open ↗</a>
            </div>
            <iframe src="${escapeHtml(biz.setC)}" title="${escapeHtml(biz.name)} Set C"></iframe>
          </div>
        </div>
      `;
    } else {
      if (singleControls) singleControls.style.display = 'inline-flex';
      const url = getVariantUrl(biz, inspectorVariant);
      const widthCss = inspectorWidth === '100%' ? '100%' : inspectorWidth;
      stage.innerHTML = `
        <div class="single-frame-wrap" style="width:${widthCss}; max-width:100%;">
          <iframe src="${escapeHtml(url)}" title="${escapeHtml(biz.name)} Concept ${escapeHtml(inspectorVariant)}"></iframe>
        </div>
      `;
    }
  }

  function openInspector(bizId, mode) {
    const dlg = document.getElementById('inspectorDialog');
    if (!dlg) return;
    if (bizId) inspectorBizId = bizId;
    if (mode) inspectorMode = mode;
    renderInspectorStage();
    if (!dlg.open) dlg.showModal();
  }

  function closeInspector() {
    const dlg = document.getElementById('inspectorDialog');
    if (!dlg) return;
    const stage = document.getElementById('inspectorStage');
    if (stage) stage.innerHTML = '';
    if (dlg.open) dlg.close();
  }

  // Theme management
  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    }
    updateThemeBtn();
  }

  function updateThemeBtn() {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '☀ Daylight' : '☾ Dark Studio';
  }

  function exportTrackerMarkdown() {
    const statusLabels = {
      todo: 'To Pitch',
      visited: 'Visited / Sent',
      followup: 'Follow Up',
      won: 'WON'
    };
    const lines = [
      `# Yarm & Eaglescliffe Website Pitch Tracker (${new Date().toLocaleDateString('en-GB')})`,
      ``
    ];
    BUSINESSES.forEach((b) => {
      const c = getBizCrm(b.id);
      lines.push(`- **${b.name}** [${statusLabels[c.status] || 'To Pitch'}] — A: ${b.setA} | B: ${b.setB} | C: ${b.setC}${c.note ? ` — _Note: ${c.note}_` : ''}`);
    });
    copyText(lines.join('\n'), 'Copied Markdown pitch summary to clipboard');
  }

  // Event Wiring
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    populateInspectorSelect();
    updateKpis();
    renderRouteBanner();
    renderCards();

    // Theme switch
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
      updateThemeBtn();
    });

    // Topbar 3-Up Compare launcher
    document.getElementById('openCompareBtn')?.addEventListener('click', () => {
      openInspector(inspectorBizId, 'triple');
    });

    // Export Markdown summary
    document.getElementById('exportSummaryBtn')?.addEventListener('click', exportTrackerMarkdown);

    // Route filter pills
    document.querySelectorAll('[data-route]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeRoute = btn.dataset.route;
        document.querySelectorAll('[data-route]').forEach((b) => b.classList.toggle('is-active', b === btn));
        renderRouteBanner();
        renderCards();
      });
    });

    // Search input + '/' shortcut
    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderCards();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        searchInput?.focus();
      }
    });

    // Status filter
    document.getElementById('statusFilter')?.addEventListener('change', (e) => {
      activeStatusFilter = e.target.value;
      renderCards();
    });

    // Reset filters button in empty state
    document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
      activeRoute = 'all';
      activeStatusFilter = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      const sf = document.getElementById('statusFilter');
      if (sf) sf.value = 'all';
      document.querySelectorAll('[data-route]').forEach((b) => b.classList.toggle('is-active', b.dataset.route === 'all'));
      renderRouteBanner();
      renderCards();
    });

    // Delegated card actions
    const grid = document.getElementById('cardsGrid');
    grid?.addEventListener('click', async (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;
      const biz = BUSINESSES.find((b) => b.id === btn.dataset.id);
      if (!biz) return;

      if (action === 'inspect') {
        const defaultMode = window.innerWidth >= 1100 ? 'triple' : 'single';
        openInspector(biz.id, defaultMode);
      } else if (action === 'copy-links') {
        const urls = `${biz.name}\nSet A (${biz.labelA}): ${biz.setA}\nSet B (${biz.labelB}): ${biz.setB}\nSet C (${biz.labelC}): ${biz.setC}`;
        copyText(urls, `Copied 3 live URLs for ${biz.name}`);
      } else if (action === 'share-msg') {
        const msg = buildPitchMessage(biz);
        if (navigator.share && window.innerWidth < 900) {
          try {
            await navigator.share({ title: `${biz.name} — Website Concepts`, text: msg });
            return;
          } catch (_) {
            // fallback to clipboard if user cancels or unsupported
          }
        }
        copyText(msg, `Copied WhatsApp/SMS pitch message for ${biz.name}`);
      } else if (action === 'copy-hook') {
        copyText(biz.hook, `Copied 20s script for ${biz.name}`);
      }
    });

    grid?.addEventListener('change', (e) => {
      const target = e.target;
      if (target.dataset.action === 'status') {
        const id = target.dataset.id;
        setBizCrm(id, { status: target.value });
        const card = target.closest('.biz-card');
        if (card) card.setAttribute('data-status', target.value);
        showToast('Saved outreach status');
      }
    });

    grid?.addEventListener('input', (e) => {
      const target = e.target;
      if (target.dataset.action === 'note') {
        setBizCrm(target.dataset.id, { note: target.value });
      }
    });

    // Inspector modal events
    document.getElementById('inspectorBizSelect')?.addEventListener('change', (e) => {
      inspectorBizId = e.target.value;
      renderInspectorStage();
    });

    document.getElementById('inspectorPrevBtn')?.addEventListener('click', () => {
      const idx = BUSINESSES.findIndex((b) => b.id === inspectorBizId);
      const prev = BUSINESSES[(idx - 1 + BUSINESSES.length) % BUSINESSES.length];
      inspectorBizId = prev.id;
      renderInspectorStage();
    });

    document.getElementById('inspectorNextBtn')?.addEventListener('click', () => {
      const idx = BUSINESSES.findIndex((b) => b.id === inspectorBizId);
      const next = BUSINESSES[(idx + 1) % BUSINESSES.length];
      inspectorBizId = next.id;
      renderInspectorStage();
    });

    document.querySelectorAll('[data-ins-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        inspectorMode = btn.dataset.insMode;
        renderInspectorStage();
      });
    });

    document.querySelectorAll('[data-ins-var]').forEach((btn) => {
      btn.addEventListener('click', () => {
        inspectorVariant = btn.dataset.insVar;
        inspectorMode = 'single';
        renderInspectorStage();
      });
    });

    document.querySelectorAll('[data-ins-width]').forEach((btn) => {
      btn.addEventListener('click', () => {
        inspectorWidth = btn.dataset.insWidth;
        inspectorMode = 'single';
        renderInspectorStage();
      });
    });

    document.getElementById('inspectorCloseBtn')?.addEventListener('click', closeInspector);
    document.getElementById('inspectorDialog')?.addEventListener('click', (e) => {
      if (e.target.id === 'inspectorDialog') closeInspector();
    });
  });
})();
