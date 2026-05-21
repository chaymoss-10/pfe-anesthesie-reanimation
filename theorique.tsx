import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/Stat";
import { Reveal } from "@/hooks/use-in-view";

export const Route = createFileRoute("/theorique")({
  head: () => ({
    meta: [
      { title: "Partie théorique — Toxicomanie & Anesthésie" },
      { name: "description", content: "Définitions, épidémiologie, mécanismes d'action neurochimiques et classifications des drogues." },
    ],
  }),
  component: Theorique,
});

function Theorique() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Reveal>
        <SectionTitle
          eyebrow="Partie I"
          title="Partie théorique"
          lead="Cadre conceptuel : définitions, épidémiologie internationale, mécanismes neurochimiques et classifications des substances psychoactives."
        />
      </Reveal>

      <article className="prose-thesis mt-12">
        <Reveal><h2 id="definitions">1 · Définitions</h2></Reveal>

        <Reveal>
          <h3>La toxicomanie</h3>
          <p>
            La toxicomanie est un trouble chronique au cours duquel la personne perd le contrôle sur la consommation
            d'une substance. Selon l'<strong>Organisation mondiale de la santé (OMS)</strong>, elle se définit par
            « la dépendance physique, psychique, ou les deux, en rapport avec l'usage d'un produit chez un sujet et
            en suite de l'utilisation périodique ou continue de celui-ci, en accompagnement d'un besoin compulsif
            de consommer le produit (<em>craving</em>) et d'une crainte du sevrage » [1] [3]. Le <strong>DSM-5</strong>
            précise que « la persistance du comportement d'usage, malgré les conséquences négatives, reflète un
            dysfonctionnement cognitif, comportemental et physiologique profond » [2].
          </p>
          <blockquote>
            « La toxicomanie est une maladie et non un crime. »
            <br />
            <span className="not-italic text-sm text-muted-foreground">— Cour suprême des États-Unis, 1962</span>
          </blockquote>
        </Reveal>

        <Reveal>
          <h3>Un toxicomane</h3>
          <p>
            Un toxicomane est un individu complètement dépendant d'une drogue ou d'une substance [3] — une personne
            consommant de manière habituelle et excessive une ou plusieurs substances toxiques, susceptibles de
            provoquer une dépendance physique ou psychologique. Les objectifs principaux recherchés par l'addict
            sont la quête du plaisir ou l'évasion de la douleur [6]. Son corps exige des doses toujours plus fortes
            pour percevoir les effets habituels.
          </p>
        </Reveal>

        <Reveal>
          <h3>La dépendance</h3>
          <p>
            La dépendance physique (ou <em>pharmacodépendance</em>) résulte d'une adaptation de l'organisme — appelée
            tolérance — provoquée par une altération des mécanismes homéostatiques en raison de la consommation
            répétée. La personne a alors besoin d'un apport permanent du produit pour que son fonctionnement
            physiologique soit normal. L'arrêt crée un déséquilibre, obligeant les mécanismes concernés à s'adapter
            pour retrouver un nouvel état d'équilibre en l'absence du produit.
          </p>
        </Reveal>

        <Reveal>
          <h3>La tolérance</h3>
          <p>
            La tolérance est une réduction de l'efficacité et de la toxicité d'un produit psychotrope : une condition
            d'hyporéactivité de l'organisme se manifestant par une diminution de la réaction au psychotrope et la
            capacité de tolérer, sans signes d'intoxication, des quantités considérées comme excessives pour un
            débutant [6].
          </p>
        </Reveal>

        <Reveal>
          <h3>Une drogue</h3>
          <p>
            Une substance d'origine naturelle ou synthétique, capable d'influencer le système nerveux central et
            d'induire des changements dans la conscience, les processus cognitifs, les sensations et le comportement.
          </p>
        </Reveal>

        <Reveal><h2 id="epidemio">2 · Épidémiologie</h2></Reveal>
        <Reveal>
          <p>
            On note une augmentation progressive de l'usage régulier des psychotropes (hors alcool et tabac). La
            consommation des drogues touche <strong>6 % des individus âgés de 15 à 64 ans</strong>, soit
            <span className="font-mono"> 316 millions </span> d'individus en 2023, contre 5,2 % en 2013 [4].
          </p>
        </Reveal>
        <Reveal>
          <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { name: "Cannabis", n: "244M" },
              { name: "Opiacés", n: "61M" },
              { name: "Amphétamines", n: "30,7M" },
              { name: "Cocaïne", n: "25M" },
              { name: "Ecstasy", n: "21M" },
            ].map((d) => (
              <div key={d.name} className="card-elevated p-4 text-center">
                <div className="font-mono text-xl font-bold text-navy">{d.n}</div>
                <div className="text-[12px] text-muted-foreground mt-1">{d.name}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <p>
            L'offre diversifiée et étendue de ces substances entraîne l'émergence et l'entretien de la dépendance.
            La surveillance épidémiologique et la prévention demeurent primordiales pour lutter contre l'usage des
            drogues.
          </p>
        </Reveal>

        <Reveal><h2 id="mecanismes">3 · Mécanismes d'action sur le système nerveux</h2></Reveal>
        <Reveal>
          <p>
            Les substances psychoactives exercent leurs effets en interagissant majoritairement avec les
            neurotransmetteurs du système nerveux central. On en dénombre plus d'une centaine, incluant notamment
            le <strong>GABA, l'acétylcholine, la sérotonine, la mélatonine, la dopamine, la noradrénaline et
            l'adrénaline</strong>. Le processus de transmission synaptique s'amorce avec la libération de
            neurotransmetteurs dans la fente synaptique à partir de la membrane présynaptique, sous l'effet d'une
            dépolarisation neuronale. Ces molécules se fixent ensuite aux récepteurs postsynaptiques, activant la
            transduction du signal.
          </p>
          <p>
            L'arrêt de la signalisation survient par dégradation enzymatique, recapture, ou activation des
            autorécepteurs. Les substances psychoactives peuvent agir en tant qu'<strong>agonistes</strong> — fixation
            et activation des récepteurs grâce à leur ressemblance moléculaire avec les neurotransmetteurs — ou en
            tant qu'<strong>antagonistes</strong> — blocage de l'action des neurotransmetteurs endogènes. Elles
            peuvent également accroître la libération, en entraver l'émission présynaptique, ou perturber recapture,
            synthèse et dégradation.
          </p>
          <p>
            En ciblant l'acétylcholine, la dopamine, les endorphines, le GABA, le glutamate, la noradrénaline et la
            sérotonine, ces drogues altèrent l'humeur, la perception, la conscience, la cognition et le comportement.
            La stimulation constante des récepteurs (agonistes) réduit leur sensibilité ; leur blocage (antagonistes)
            les rend plus réactifs. Ces ajustements neurochimiques modifient durablement la physiologie et le
            comportement.
          </p>
        </Reveal>

        <Reveal><h2 id="classification">4 · Classification des drogues</h2></Reveal>
        <Reveal>
          <p>
            Il est difficile de déterminer une spécificité propre à chaque produit dans les conduites toxicomaniaques.
            Cependant, l'OMS et l'ONU ont cherché à établir des classifications claires afin de mieux comprendre les
            effets de ces substances et d'adapter les stratégies de prise en charge. Trois axes de classification
            coexistent : <strong>mécanisme d'action</strong>, <strong>origine</strong> et <strong>dangerosité</strong>.
          </p>

          <h3>4.1 · Selon l'OMS / ONU</h3>
          <p>
            L'ONU et l'OMS se fondent sur la catégorisation déterminée par la <em>Convention unique de 1961 sur les
            stupéfiants</em> et la <em>Convention de 1971 sur les substances psychotropes</em> [9] [10].
          </p>

          <h3>4.2 · Selon le mécanisme d'action</h3>

          <div className="not-prose mt-6 grid gap-4 md:grid-cols-3">
            <div className="card-elevated p-5">
              <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-2">Dépresseurs</div>
              <div className="font-serif text-lg text-navy mb-2">SNC ralenti</div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Alcool, hypnotiques (barbituriques), tranquillisants (benzodiazépines), neuroleptiques,
                analgésiques opiacés (morphine, héroïne).
              </p>
            </div>
            <div className="card-elevated p-5">
              <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-2">Stimulants</div>
              <div className="font-serif text-lg text-navy mb-2">SNC accéléré</div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Mineurs (café, tabac), majeurs (amphétamines, cocaïne, ecstasy), stimulants de l'humeur
                (antidépresseurs).
              </p>
            </div>
            <div className="card-elevated p-5">
              <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-2">Hallucinogènes</div>
              <div className="font-serif text-lg text-navy mb-2">SNC perturbé</div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Chanvre indien, solvants (éther, colles), anesthésiques volatils, LSD, mescaline,
                psilocybine, kétamine.
              </p>
            </div>
          </div>

          <p className="mt-6">
            <strong>Classification de Peters (1991)</strong> — psychostimulants (accélèrent le SNC),
            psychédéliques (perturbent le SNC), psycho-sédatifs (ralentissent le SNC) [11].
          </p>
        </Reveal>
      </article>
    </div>
  );
}
