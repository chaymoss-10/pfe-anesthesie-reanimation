import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { SectionTitle } from "@/components/Stat";
import { Reveal } from "@/hooks/use-in-view";

export const Route = createFileRoute("/conclusion")({
  head: () => ({
    meta: [
      { title: "Conclusion & Recommandations — PFE Toxicomanie & Anesthésie" },
      { name: "description", content: "Cinq recommandations clés et téléchargement des données brutes de l'étude." },
    ],
  }),
  component: Conclusion,
});

const recs = [
  {
    t: "Formation obligatoire et structurée",
    d: "Intégrer un module d'addictologie clinique dans la formation initiale et continue de tous les professionnels d'anesthésie–réanimation.",
  },
  {
    t: "Protocoles dédiés et harmonisés",
    d: "Élaborer et diffuser des référentiels nationaux : évaluation pré-anesthésique, gestion du sevrage, analgésie multimodale.",
  },
  {
    t: "Équipes multidisciplinaires de liaison",
    d: "Déployer des binômes addictologue–psychiatre rattachés aux services à haut risque (réanimation, urgences, bloc).",
  },
  {
    t: "Réduction active de la stigmatisation",
    d: "Programmes institutionnels de sensibilisation et supervision réflexive pour renforcer la qualité de la relation thérapeutique.",
  },
  {
    t: "Stratégie nationale cohérente",
    d: "Inscrire la lutte contre l'addiction dans un plan national impliquant autorités sanitaires, hôpitaux et associations.",
  },
];

function Conclusion() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Reveal>
        <SectionTitle
          eyebrow="Chapitre 05"
          title="Conclusion & recommandations"
          lead="Cinq leviers d'action concrets pour transformer la prise en charge des patients toxicomanes en milieu hospitalier tunisien."
        />
      </Reveal>

      <Reveal>
        <div className="prose-thesis mt-12">
          <p>
            Notre étude met en évidence la fréquence élevée de l'exposition des soignants aux patients toxicomanes
            et les nombreuses difficultés rencontrées : risque de sevrage, non-coopération, gestion de la douleur et
            communication dominent le tableau. Les complications observées — agitation, troubles hémodynamiques,
            difficultés anesthésiques — confirment la complexité clinique. Une réelle volonté d'amélioration s'exprime,
            portée par une demande forte de formation continue et de travail multidisciplinaire.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-14">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal mb-3">
            · 5 recommandations
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-navy mb-8">Cinq leviers d'action</h2>
          <ol className="space-y-5">
            {recs.map((r, i) => (
              <Reveal key={r.t} delay={i * 90}>
                <li className="card-elevated flex gap-5 p-6 md:p-7">
                  <div className="font-mono font-bold text-3xl md:text-4xl text-teal shrink-0 leading-none tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="font-serif text-lg md:text-xl text-navy">{r.t}</div>
                    <p className="mt-2 text-[14px] text-foreground/80 leading-relaxed">{r.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* CSV download */}
      <Reveal delay={120}>
        <div className="mt-14 card-elevated p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-1">Open data</div>
            <h3 className="font-serif text-xl text-navy">Données brutes de l'étude</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Fréquences et pourcentages bruts au format CSV — réutilisables pour replication ou méta-analyse.
            </p>
          </div>
          <a
            href="/donnees-brutes.csv"
            download
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-navy/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <Download className="h-4 w-4" />
            Télécharger (CSV)
          </a>
        </div>
      </Reveal>

      {/* Final italic */}
      <Reveal delay={200}>
        <p className="mt-20 text-center font-serif text-2xl md:text-3xl italic leading-snug text-navy max-w-2xl mx-auto">
          « Soigner sans juger, former pour comprendre, harmoniser pour sécuriser. »
        </p>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          — Chargui Chaima & Feguiri Chaima
        </p>
      </Reveal>

      <div className="mt-12 flex justify-between text-sm">
        <Link to="/discussion" className="text-navy hover:text-teal transition-colors">← Discussion</Link>
        <Link to="/" className="text-navy hover:text-teal transition-colors">Accueil →</Link>
      </div>
    </div>
  );
}
