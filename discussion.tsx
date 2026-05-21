import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, BookOpen, AlertCircle, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/Stat";
import { Reveal } from "@/hooks/use-in-view";

export const Route = createFileRoute("/discussion")({
  head: () => ({
    meta: [
      { title: "Discussion — PFE Toxicomanie & Anesthésie" },
      { name: "description", content: "Principaux résultats, comparaison à la littérature, limites de l'étude et implications cliniques." },
    ],
  }),
  component: Discussion,
});

const sections = [
  {
    icon: CheckCircle2,
    eyebrow: "01 · Principaux résultats",
    title: "Ce que révèle l'étude",
    items: [
      "Exposition quasi-systématique : 93 % des soignants ont déjà pris en charge un patient toxicomane.",
      "Cannabis (74 %), alcool (69 %) et cocaïne (66 %) en tête des substances rencontrées.",
      "Difficultés cliniques majeures : sevrage, non-coopération, gestion de la douleur, communication.",
      "Complications fréquentes : 80 % d'agitation/délirium, 67 % de syndromes de sevrage.",
      "Lacune organisationnelle : 53 % des services ne disposent d'aucun protocole standardisé.",
      "Demande forte de formation continue (75 %) — un signal fort des équipes.",
    ],
  },
  {
    icon: BookOpen,
    eyebrow: "02 · Comparaison avec la littérature",
    title: "Mise en perspective internationale",
    items: [
      "Données tunisiennes spécifiques quasi-absentes : la majorité des publications proviennent d'Europe et d'Amérique du Nord.",
      "La stigmatisation perçue (88 % au moins occasionnelle) rejoint les chiffres internationaux (van Boekel et al., 2013).",
      "La sous-déclaration de la consommation reste un biais commun à toutes les études déclaratives.",
      "Le profil féminin et jeune de l'échantillon est cohérent avec le « Health workforce snapshot in Tunisia » (OMS 2022).",
      "Nos résultats convergent avec les recommandations européennes sur les protocoles dédiés en péri-opératoire.",
    ],
  },
  {
    icon: AlertCircle,
    eyebrow: "03 · Limites de l'étude",
    title: "Ce qu'il faut nuancer",
    items: [
      "Échantillon de taille limitée (n = 60) restreignant la puissance statistique.",
      "Étude monocentrique élargie : 4 structures d'une même région — extrapolation nationale prudente.",
      "Questionnaire déclaratif exposant à un biais de désirabilité sociale.",
      "Ciblage des services à forte exposition limitant la représentativité globale.",
      "Certaines questions à choix multiples rendant l'interprétation moins précise.",
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "04 · Implications cliniques",
    title: "Vers une prise en charge transformée",
    items: [
      "Formation obligatoire en addictologie pour tous les soignants de réanimation et d'anesthésie.",
      "Protocoles dédiés : évaluation pré-anesthésique, gestion du sevrage, analgésie multimodale adaptée.",
      "Équipes de liaison dédiées (addictologue + psychiatre) intégrées aux services à haut risque.",
      "Lutte active contre la stigmatisation par sensibilisation institutionnelle régulière.",
      "Inscription dans une stratégie nationale cohérente, alignée avec les objectifs OMS.",
    ],
  },
];

function Discussion() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
      <Reveal>
        <SectionTitle
          eyebrow="Chapitre 04"
          title="Discussion"
          lead="Quatre temps de lecture scientifique : résultats marquants, comparaison à la littérature, limites et implications pour la pratique clinique."
        />
      </Reveal>

      <div className="mt-14 space-y-12">
        {sections.map((s, idx) => (
          <Reveal key={s.eyebrow}>
            <section className="relative">
              {/* teal divider */}
              {idx > 0 && (
                <div className="absolute -top-6 left-0 right-0 flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-teal/40" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">§</span>
                  <div className="h-px flex-1 bg-teal/40" />
                </div>
              )}

              <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-teal shadow-lg shadow-navy/20">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal mb-2">
                    {s.eyebrow}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-navy mb-5">{s.title}</h2>
                  <ul className="space-y-3">
                    {s.items.map((it, i) => (
                      <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Take-home message */}
      <Reveal delay={150}>
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-teal p-8 md:p-12 text-navy">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-navy/10" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/20" />
          <div className="relative">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-navy/70 mb-3">
              ★ Take-home message
            </div>
            <h3 className="font-serif text-2xl md:text-4xl font-semibold leading-tight max-w-3xl">
              La prise en charge des patients toxicomanes ne se joue pas qu'au bloc :
              <span className="block text-navy/85 italic mt-2">
                elle commence par la formation, se sécurise par les protocoles, et se transforme par
                la réduction de la stigmatisation.
              </span>
            </h3>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
