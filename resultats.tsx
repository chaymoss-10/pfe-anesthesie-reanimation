import { createFileRoute } from "@tanstack/react-router";
import { Brain, Pill, AlertTriangle, BarChart3, Stethoscope, Activity } from "lucide-react";
import { SectionTitle } from "@/components/Stat";
import { Reveal } from "@/hooks/use-in-view";
import { PillBar, ChartCard } from "@/components/PillBar";
import { SciBadge, BigStat } from "@/components/SciBadge";
import { AttitudesRadar } from "@/components/AttitudesRadar";

export const Route = createFileRoute("/resultats")({
  head: () => ({
    meta: [
      { title: "Résultats — PFE Toxicomanie & Anesthésie" },
      { name: "description", content: "Données épidémiologiques, expérience clinique, difficultés et attitudes : résultats détaillés auprès de 60 soignants tunisiens." },
    ],
  }),
  component: Resultats,
});

function Resultats() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 space-y-20">
      <Reveal>
        <SectionTitle
          eyebrow="Chapitre 03"
          title="Résultats"
          lead="Synthèse visuelle des données : pill-charts, badges scientifiques, big-numbers et radar attitudes / pratiques."
        />
      </Reveal>

      {/* Scientific badges */}
      <section>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal mb-4">
            · Key findings
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Constats marquants</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "🧠", value: "68%", label: "Connaissances jugées insuffisantes" },
            { icon: "💊", value: "74%", label: "Cannabis : 1ère substance rencontrée" },
            { icon: "⚠️", value: "80%", label: "Influence sur l'anesthésie perçue" },
            { icon: "📊", value: "93%", label: "Exposition aux patients toxicomanes" },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 80}>
              <SciBadge icon={b.icon} value={b.value} label={b.label} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Big-number Key Data */}
      <section>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal mb-4">· Key data</div>
          <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Chiffres clés</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { value: "67%", label: "signalent des difficultés cliniques majeures", hint: "Sevrage · douleur · coopération" },
            { value: "42%", label: "ont reçu une formation spécifique", hint: "Initiale ou continue" },
            { value: "53%", label: "exercent sans protocole standardisé", hint: "Lacune organisationnelle" },
            { value: "75%", label: "demandent une formation continue dédiée", hint: "Demande explicite" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <BigStat {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Démographie */}
      <section>
        <Reveal>
          <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Données épidémiologiques</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal>
            <ChartCard
              title="Profession"
              icon={<Stethoscope className="h-4 w-4" />}
              interpretation="Infirmier(ère)s et TSAR forment 75 % de l'échantillon, reflet des équipes de soins critiques."
            >
              <PillBar label="Infirmier(ère)s" value={40} />
              <PillBar label="TSAR" value={35} variant="secondary" />
              <PillBar label="Médecins" value={20} variant="secondary" />
              <PillBar label="Autres" value={5} variant="secondary" />
            </ChartCard>
          </Reveal>
          <Reveal delay={100}>
            <ChartCard
              title="Service d'exercice"
              icon={<Activity className="h-4 w-4" />}
              interpretation="83 % exercent en réanimation ou au bloc, services à forte exposition aux patients toxicomanes."
            >
              <PillBar label="Réanimation" value={45} />
              <PillBar label="Bloc opératoire" value={38} variant="secondary" />
              <PillBar label="Urgences" value={10} variant="secondary" />
              <PillBar label="Médecine" value={7} variant="secondary" />
            </ChartCard>
          </Reveal>
          <Reveal>
            <ChartCard
              title="Ancienneté"
              icon={<BarChart3 className="h-4 w-4" />}
              interpretation="Profils variés : un tiers d'expérimentés (>10 ans) côtoie un tiers de jeunes soignants (<5 ans)."
            >
              <PillBar label="2 – 5 ans" value={33.3} />
              <PillBar label="> 10 ans" value={31.7} variant="secondary" />
              <PillBar label="< 2 ans" value={20} variant="secondary" />
              <PillBar label="6 – 10 ans" value={15} variant="secondary" />
            </ChartCard>
          </Reveal>
          <Reveal delay={100}>
            <ChartCard
              title="Âge"
              icon={<BarChart3 className="h-4 w-4" />}
              interpretation="Population majoritairement jeune (58 % entre 25 et 35 ans), cohérente avec la moyenne nationale."
            >
              <PillBar label="25 – 35 ans" value={58.3} />
              <PillBar label="36 – 45 ans" value={25} variant="secondary" />
              <PillBar label="> 45 ans" value={10} variant="secondary" />
              <PillBar label="< 25 ans" value={6.7} variant="secondary" />
            </ChartCard>
          </Reveal>
        </div>
      </section>

      {/* Connaissances */}
      <section>
        <Reveal>
          <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Connaissances & expérience</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal>
            <ChartCard
              title="Substances psychoactives rencontrées"
              icon={<Pill className="h-4 w-4" />}
              interpretation="Cannabis, alcool et cocaïne dominent — un trio cohérent avec les profils de consommation observés en Tunisie."
            >
              <PillBar label="Cannabis" value={74} />
              <PillBar label="Alcool" value={69} variant="secondary" />
              <PillBar label="Cocaïne / stimulants" value={66} variant="secondary" />
              <PillBar label="Benzodiazépines" value={40} variant="secondary" />
              <PillBar label="Opioïdes" value={32} variant="secondary" />
            </ChartCard>
          </Reveal>
          <Reveal delay={100}>
            <ChartCard
              title="Fréquence de prise en charge"
              icon={<Brain className="h-4 w-4" />}
              interpretation="93 % des soignants ont déjà pris en charge un patient toxicomane : l'exposition est quasi-systématique."
            >
              <PillBar label="Parfois" value={33} />
              <PillBar label="Très souvent" value={32} variant="secondary" />
              <PillBar label="Souvent" value={27} variant="secondary" />
              <PillBar label="Rarement" value={8} variant="secondary" />
            </ChartCard>
          </Reveal>
        </div>
      </section>

      {/* Difficultés + Radar */}
      <section>
        <Reveal>
          <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Difficultés & attitudes</h2>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal>
            <ChartCard
              title="Principales difficultés rencontrées"
              icon={<AlertTriangle className="h-4 w-4" />}
              interpretation="Les freins cliniques (sevrage, coopération, douleur) dominent largement sur les freins relationnels."
            >
              <PillBar label="Risque de sevrage" value={58} />
              <PillBar label="Non-coopération" value={57} variant="secondary" />
              <PillBar label="Gestion de la douleur" value={53} variant="secondary" />
              <PillBar label="Communication" value={48} variant="secondary" />
              <PillBar label="Manque de protocoles" value={38} variant="secondary" />
              <PillBar label="Stigmatisation" value={13} variant="secondary" />
            </ChartCard>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-elevated p-6 md:p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal/15 text-navy">
                  <BarChart3 className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-navy">Attitudes vs pratiques</h3>
              </div>
              <p className="text-[12px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Hexagone · 6 dimensions
              </p>
              <AttitudesRadar />
              <p className="mt-2 pt-4 border-t border-dashed border-teal/40 text-[13px] text-muted-foreground leading-relaxed italic">
                L'écart entre attitudes (déclaratif) et pratiques (terrain) reste modéré, mais creuse sur la
                dimension « Formation ».
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-5 rounded-2xl border border-teal/40 bg-teal/10 p-6">
            <p className="text-foreground/85">
              <span className="font-mono font-semibold text-navy text-lg">80 %</span>{" "}
              des soignants estiment que la toxicomanie influence le déroulement des soins et de l'anesthésie.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Amélioration & bivariée */}
      <section>
        <Reveal>
          <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Pistes & analyse bivariée</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal>
            <ChartCard
              title="Actions proposées"
              icon={<BarChart3 className="h-4 w-4" />}
              interpretation="La formation arrive très largement en tête (92 %), suivie du recours aux spécialistes."
            >
              <PillBar label="Formation du personnel" value={92} />
              <PillBar label="Spécialistes en addictologie" value={77} variant="secondary" />
              <PillBar label="Protocoles standardisés" value={50} variant="secondary" />
              <PillBar label="Sensibilisation" value={50} variant="secondary" />
              <PillBar label="Travail multidisciplinaire" value={45} variant="secondary" />
            </ChartCard>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-5">
              <div className="card-elevated p-6 border-l-4 border-l-teal">
                <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-2">
                  p = 0,038 · significatif
                </div>
                <h3 className="font-serif text-lg text-navy">Stigmatisation perçue → attitude</h3>
                <p className="mt-2 text-[13px] text-foreground/80 leading-relaxed">
                  Les soignants percevant une stigmatisation adoptent plus fréquemment une attitude neutre ou
                  stressée (χ² = 13,54 ; ddl = 6).
                </p>
              </div>
              <div className="card-elevated p-6 border-l-4 border-l-teal">
                <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-2">
                  p = 0,021 · significatif
                </div>
                <h3 className="font-serif text-lg text-navy">Formation initiale → demande continue</h3>
                <p className="mt-2 text-[13px] text-foreground/80 leading-relaxed">
                  L'absence de formation initiale augmente significativement la demande de formation continue.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
