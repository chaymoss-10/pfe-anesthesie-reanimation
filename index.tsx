import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, MapPin, ShieldAlert } from "lucide-react";
import { Reveal } from "@/hooks/use-in-view";
import { AbstractBlob, DotGrid, WaveLine } from "@/components/Abstract";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PFE · Toxicomanie & Anesthésie-Réanimation — FPSST Tunis" },
      { name: "description", content: "Étude tunisienne transversale (n=60) sur la prise en charge des patients toxicomanes en anesthésie-réanimation : connaissances, attitudes et pratiques des soignants." },
    ],
  }),
  component: Home,
});

const floatingStats = [
  { icon: Users, value: "60", label: "professionnels" },
  { icon: MapPin, value: "Tunisie", label: "2025–2026" },
  { icon: ShieldAlert, value: "Haut risque", label: "services critiques" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <DotGrid className="pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-28 md:pt-24 md:pb-36">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-teal mb-6">
                <span className="h-px w-8 bg-teal" />
                Étude · transversale · n=60
              </div>

              {/* Layered typographic title */}
              <h1 className="font-serif font-semibold leading-[0.95] tracking-tight">
                <span className="block text-[clamp(2rem,5vw,3.6rem)] text-navy">
                  Prise en charge des
                </span>
                <span className="block text-[clamp(2.6rem,7vw,5rem)] text-navy">
                  patients{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 italic text-teal">toxicomanes</span>
                    <span className="absolute inset-x-0 bottom-1.5 h-3 bg-teal/20 -z-0" />
                  </span>
                </span>
                <span className="block text-[clamp(1.2rem,2.6vw,1.9rem)] text-foreground/55 mt-2 font-medium">
                  en anesthésie–réanimation
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-foreground/75 leading-relaxed">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy mr-2">
                  Résumé
                </span>
                Cette étude descriptive transversale, menée sur trois mois auprès de 60 professionnels de santé
                tunisiens — médecins, TSAR, infirmiers et techniciens en psychiatrie — évalue les connaissances,
                attitudes et pratiques face aux patients toxicomanes en milieu hospitalier critique. Le travail
                s'appuie sur un questionnaire anonyme de 20 items, déployé au CAMU, à l'hôpital Razi, à l'INN
                Mongi Ben Hmida et à La Rabta. Les résultats révèlent une exposition quasi-systématique (93 %),
                des difficultés cliniques majeures (sevrage, douleur, agitation) et une lacune organisationnelle
                — plus d'un service sur deux ne dispose d'aucun protocole. Une demande forte de formation
                continue (75 %) émerge, ouvrant la voie à des recommandations concrètes pour des soins plus
                sûrs, plus humains et mieux harmonisés.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/resultats"
                  className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-navy/20 transition-all hover:shadow-xl hover:-translate-y-0.5"
                >
                  Explorer les résultats
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/theorique"
                  className="inline-flex items-center rounded-full border border-navy/15 bg-card px-6 py-3.5 text-sm font-medium text-navy hover:border-teal hover:text-teal transition-colors"
                >
                  Partie théorique
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150} className="order-first lg:order-last">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <AbstractBlob className="w-full h-auto drop-shadow-2xl" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating stats bar */}
        <div className="relative mx-auto max-w-5xl px-6 -mt-10 md:-mt-14">
          <Reveal>
            <div className="card-elevated grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border overflow-hidden">
              {floatingStats.map((s) => (
                <div key={s.label} className="flex items-center gap-4 p-5 md:p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal/15 text-navy">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xl font-semibold text-navy leading-none">{s.value}</div>
                    <div className="mt-1 text-[12px] uppercase tracking-widest text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Wave divider */}
      <div className="mx-auto max-w-6xl px-6 mt-20">
        <WaveLine className="w-full h-12 opacity-70" />
      </div>

      {/* Chapters */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <div className="max-w-2xl mb-10 md:mb-14">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal mb-3">
              · Sommaire
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy leading-[1.05]">
              Une lecture en cinq temps
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { to: "/theorique" as const, n: "01", t: "Partie théorique", d: "Définitions, épidémiologie, mécanismes neurochimiques et classification des drogues." },
            { to: "/methodologie" as const, n: "02", t: "Méthodologie", d: "Étude transversale, 60 soignants, 4 structures, questionnaire de 20 items." },
            { to: "/resultats" as const, n: "03", t: "Résultats", d: "Pill-charts, badges scientifiques et radar attitudes vs pratiques." },
            { to: "/discussion" as const, n: "04", t: "Discussion", d: "Forces, limites, comparaison à la littérature et take-home message." },
            { to: "/conclusion" as const, n: "05", t: "Conclusion", d: "Cinq recommandations clés et téléchargement des données brutes." },
          ].map((s, i) => (
            <Reveal key={s.to} delay={i * 90}>
              <Link to={s.to} className="card-elevated group block p-7 h-full">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">{s.n}</span>
                  <span className="h-px flex-1 ml-3 bg-border" />
                </div>
                <div className="font-serif text-2xl text-navy group-hover:text-teal transition-colors">
                  {s.t}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy group-hover:text-teal">
                  Lire
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
