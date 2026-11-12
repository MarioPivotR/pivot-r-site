/* Pivot-R — bascule FR/EN et courriel. Aucun appel réseau, aucune donnée collectée. */
"use strict";

const CONTACT_EMAIL = "info@pivot-r.com";

const EN = {
  "skip": "Skip to content",
  "nav.approach": "Approach", "nav.ai": "AI", "nav.method": "How we work", "nav.offer": "Offering",
  "slogan": "Structuring transformation. Securing evolution.",
  "hero.title": "Configure your business apps. <span>Without recoding them.</span>",
  "hero.lead": "Pivot-R is a platform for Microsoft Power Platform and Dataverse. It will bring together business modules and a configurable workspace, so each organization gets a solution that fits its reality.",
  "hero.status": "We are looking for a few pioneer organizations to help shape the first versions.",
  "st.wip": "In development", "st.plan": "Planned", "st.vision": "Exploring",
  "hero.cta1": "Discuss your project", "hero.cta2": "See the modules",
  "f1": "Dataverse-native", "f2": "English and French", "f3": "Integrated with Microsoft 365", "f4": "Built in Québec",
  "ap.title": "One shared platform. A solution that fits you.",
  "ap.lead": "Pivot-R is designed to install in your Microsoft environment and adapt to the way you work. Your rules, labels and processes will be configured. What is unique to you will become a Pivot-R module, not a one-off build.",
  "ap.c1.t": "Configure instead of recode", "ap.c1.p": "Columns, filters, colours, visual rules and record views are set up screen by screen.",
  "ap.c2.t": "Your data stays with you", "ap.c2.p": "Everything runs on Dataverse, in your own Microsoft 365 environment. Your existing roles and access rights keep applying.",
  "ap.c3.t": "A solution that keeps improving", "ap.c3.p": "Every update will be validated before it reaches production. You will get the improvements without losing your settings.",
  "ws.title": "The working interface standard views don't give you.",
  "ws.lead": "The Workspace, the core of Pivot-R, will replace the standard lists in your Power Apps with a fast, bilingual workspace designed for desktop, tablet and phone.",
  "d.title": "Service requests", "d.filter": "My open", "d.group": "By status",
  "d.c1": "Request", "d.c2": "Requester", "d.c3": "Status", "d.c4": "Hours", "d.total": "Total",
  "d.rec": "New workstation, HR", "d.t1": "Details", "d.t2": "Comments", "d.t3": "Documents", "d.resolve": "RESOLVE",
  "ws.cap": "A Workspace screen, as a drawing.",
  "ws.f1.t": "Filters and grouping", "ws.f1.p": "Quick and preset filters, grouping and sorting. The screen remembers your choices during your session.",
  "ws.f2.t": "Formatting that follows your rules", "ws.f2.p": "An overdue request, a priority file, a close deadline: the row or cell stands out on its own.",
  "ws.f3.t": "Direct entry and paste from Excel", "ws.f3.p": "Change a value without opening a form, or paste a block of cells from Excel. Each value is validated before it is saved.",
  "ws.f4.t": "Totals and export", "ws.f4.p": "Totals and group subtotals, and export of the filtered view to Excel or CSV.",
  "ws.f5.t": "Record panel and collaboration", "ws.f5.p": "A side panel with tabs, comments, mentions, documents and actions such as opening a Teams chat.",
  "ws.f6.t": "Several ways to see your data", "ws.f6.p": "Grid, phone list, pipeline, calendar and Gantt, in English and in French.",
  "mo.ref": "Business modules", "mo.title": "Complete business domains, on the same platform.",
  "mo.lead": "The planned modules will cover complete business domains. They will share the same interface and adapt to your vocabulary and your forms.",
  "mo.m1": "Accounts, customer relationship, sales, billing, collections and after-sales service.",
  "mo.m2.t": "Human resources", "mo.m2": "Staffing, training, absences and leave, disciplinary notices, work permits, skills matrix.",
  "mo.m3.t": "Health and safety", "mo.m3": "Incidents, risk prioritization, corrective actions, Gemba walks, audits and registers.",
  "mo.m4.t": "Project management", "mo.m4": "Projects, tasks and schedules, with a shared Gantt view.",
  "mo.m5.t": "Support and requests", "mo.m5": "Service requests, tracking, comments and Teams notifications.",
  "mo.m6.t": "Documentation", "mo.m6": "Organizational documents and bilingual Word templates filled in automatically.",
  "mo.m7.t": "Knowledge base", "mo.m7": "Internal articles and procedures, easy to find and keep current.",
  "mo.m9.t": "Tailored", "mo.m9": "Your own processes, built as Pivot-R modules. <a href=\"#sur-mesure\">See how</a>.",
  "mo.m8": "Analytics, automation, external portal, integrations, e-signature, capacity management.",
  "ia.title": "Artificial intelligence working for your operations.",
  "ia.lead": "We are exploring AI services connected to your Dataverse data. Here are the first areas under study.",
  "ia.cta": "Does one of these needs apply to you? <a href=\"#contact\">Let's talk</a>. Your real cases shape our priorities.",
  "ia.l1.t": "Document reading", "ia.l1.p": "Extract information from forms and scanned documents.",
  "ia.l2.t": "Intelligent search", "ia.l2.p": "Find information by meaning, not just keywords.",
  "ia.l3.t": "Drawing analysis and quantity take-off", "ia.l3.p": "Recognize the elements of a drawing and extract their quantities.",
  "ia.l4.t": "Process improvement", "ia.l4.p": "Analyse how your processes actually run and suggest improvements.",
  "ia.l5.t": "Specialized models", "ia.l5.p": "Models tailored to your industry and your data.",
  "me.title": "From your processes to a solution in production.",
  "me.s1.t": "Understand", "me.s1.p": "We review your processes, pain points and current tools.",
  "me.s2.t": "Configure", "me.s2.p": "We assemble the modules and configure the screens to your rules.",
  "me.s3.t": "Validate", "me.s3.p": "Your teams test the solution before it is deployed.",
  "me.s4.t": "Go live", "me.s4.p": "We deploy, train your users and migrate your data.",
  "me.s5.t": "Evolve", "me.s5.p": "The platform keeps improving, and you add modules as your organization grows.",
  "md.title": "Start with the platform. Add what you need.",
  "md.c1.t": "Platform", "md.c1.p": "The Workspace, shared configuration and continuous updates.",
  "md.c2.p": "The business domains you choose.",
  "md.c3.p": "Additional capabilities, such as analytics or an external portal.",
  "md.c4.p": "AI services tailored to your operations.",
  "md.note": "Pivot-R is in development. Write to us to become a pioneer organization or to follow its progress.",
  "cu.ref": "Tailored", "cu.title": "Your need, our platform.",
  "cu.lead": "When a process is unique to you, we build it as a Pivot-R module. It joins your other modules and is managed the same way.",
  "cu.c1.t": "Same interface, same experience", "cu.c1.p": "It uses the Workspace, your themes and both languages, like every module.",
  "cu.c2.t": "Managed and updated", "cu.c2.p": "It is delivered like the other modules, versioned and validated before it reaches production.",
  "cu.c3.t": "Built to evolve", "cu.c3.p": "It evolves with the platform instead of ageing on its own.",
  "nav.why": "Why",
  "wh.ref": "Why Pivot-R", "wh.title": "Solid foundations for manufacturers.", "wh.since": "Since 2003",
  "wh.r1": "Drafting", "wh.r2": "Project management", "wh.r3": "Sales", "wh.r4": "Continuous improvement", "wh.r5": "IT and innovation", "wh.r6": "Digital and cyber",
  "wh.p1": "I have worked in manufacturing since 2003. Each role showed me business processes from a different angle, from one department to the next.",
  "wh.p2": "On Power Platform, I developed a solution that digitizes the processes of every department in a manufacturing company, including those that had no structure at all. Countless Excel files disappeared, and a large share of repetitive tasks is now automated.",
  "wh.p3": "Pivot-R grew from a simple idea: offer these solid foundations to other manufacturers, then complete them with modules fitted to their reality, while staying modular.",
  "wh.p4": "Power Platform offers great flexibility, yet it is still little known in Québec. Pivot-R brings together that flexibility, customization and solid foundations, in solutions that evolve with new technologies.",
  "wh.role": "Founder, Pivot-R",
  "ct.title": "Let's talk about your processes.",
  "ct.lead": "Already using Power Platform, or considering it? Describe what slows you down today. We'll look together at what Pivot-R could configure for you, and how to take part as a pioneer organization.",
  "ct.cta": "Email the team", "ct.copy": "Copy", "ct.copied": "Copied",
  "ct.k1": "Email", "ct.k2": "Languages", "ct.k3": "Region", "ct.k4": "Platform",
  "ft": "Microsoft, Power Platform, Dataverse and Teams are trademarks of Microsoft Corporation."
};
const FR_EXTRA = { "ct.copied": "Copié" };

const META = {
  en: "Pivot-R: a platform in development for Microsoft Power Platform and Dataverse, with a configurable Workspace and business modules fitted to your organization."
};

document.addEventListener("DOMContentLoaded", () => {
  const nodes = [...document.querySelectorAll("[data-i18n],[data-i18n-html]")];
  nodes.forEach(n => { n.dataset.fr = n.innerHTML; });
  const desc = document.querySelector('meta[name="description"]');
  const descFr = desc.content;
  let current = "fr";

  const subject = { fr: "Pivot-R : demande d'information", en: "Pivot-R: information request" };

  function setMail(lang) {
    document.querySelectorAll(".js-mail").forEach(a => {
      a.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject[lang]);
    });
    document.querySelectorAll(".js-mail-text").forEach(s => { s.textContent = CONTACT_EMAIL; });
  }

  function apply(lang) {
    current = lang;
    nodes.forEach(n => {
      const key = n.dataset.i18n || n.dataset.i18nHtml;
      if (lang === "en" && Object.prototype.hasOwnProperty.call(EN, key)) {
        // Le HTML n'est permis que pour les clés marquées data-i18n-html, dont le contenu est fixe.
        if (n.dataset.i18nHtml) n.innerHTML = EN[key]; else n.textContent = EN[key];
      } else {
        n.innerHTML = n.dataset.fr;
      }
    });
    document.documentElement.lang = lang;
    desc.content = lang === "en" ? META.en : descFr;
    document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    setMail(lang);
    try { localStorage.setItem("pivotr-lang", lang); } catch (e) { /* stockage indisponible */ }
  }

  let lang = new URLSearchParams(location.search).get("lang");
  if (lang !== "fr" && lang !== "en") {
    try { lang = localStorage.getItem("pivotr-lang"); } catch (e) { lang = null; }
  }
  if (lang !== "fr" && lang !== "en") {
    lang = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => apply(b.dataset.lang)));

  const copy = document.getElementById("copy-mail");
  if (copy) {
    copy.addEventListener("click", () => {
      const done = () => {
        copy.textContent = current === "en" ? EN["ct.copied"] : FR_EXTRA["ct.copied"];
        setTimeout(() => { copy.textContent = current === "en" ? EN["ct.copy"] : copy.dataset.fr; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CONTACT_EMAIL).then(done).catch(selectMail);
      } else { selectMail(); }
    });
  }
  function selectMail() {
    const el = document.querySelector(".js-mail-text");
    const r = document.createRange(); r.selectNodeContents(el);
    const s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }

  const yr = document.getElementById("yr");
  if (yr) yr.textContent = String(new Date().getFullYear());
  apply(lang);
});
