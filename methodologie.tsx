import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/Stat";
import { Reveal } from "@/hooks/use-in-view";

export const Route = createFileRoute("/methodologie")({
  head: () => ({
    meta: [
      { title: "Méthodologie — PFE Toxicomanie & Anesthésie" },
      { name: "description", content: "Étude descriptive transversale auprès de 60 professionnels de santé en Tunisie : population, lieu, outils et considérations éthiques." },
    ],
  }),
  component: Methodologie,
});

function Methodologie() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Reveal>
        <SectionTitle
          eyebrow="Chapitre 02"
          title="Matériels & méthodes"
          lead="Étude descriptive transversale à visée évaluative, menée sur trois mois dans quatre structures hospitalières tunisiennes."
        />
      </Reveal>

      <Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ["60", "participants"],
            ["4", "structures"],
            ["20", "questions"],
            ["3 mois", "durée"],
          ].map(([v, l]) => (
            <div key={l} className="card-elevated p-4 text-center">
              <div className="font-mono text-2xl font-bold text-navy">{v}</div>
              <div className="text-[12px] uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <article className="prose-thesis mt-12">
        <Reveal><h2>Type d'étude</h2>
          <p>
            Étude descriptive transversale à visée évaluative, réalisée auprès des personnels médicaux et paramédicaux
            impliqués dans la prise en charge des patients toxicomanes. Période : trois mois.
          </p>
        </Reveal>

        <Reveal><h2>Population</h2>
          <p>
            60 professionnels de santé exerçant dans différents services hospitaliers (bloc opératoire, réanimation,
            urgences, médecine).
          </p>

          <h3>Critères d'inclusion</h3>
          <ul>
            <li>Médecins (résidents en anesthésie–réanimation)</li>
            <li>Techniciens supérieurs en anesthésie–réanimation</li>
            <li>Infirmiers(ères)</li>
            <li>Techniciens supérieurs en psychiatrie</li>
          </ul>

          <h3>Critères de non-inclusion</h3>
          <ul>
            <li>Aides-soignants</li>
            <li>Stagiaires</li>
            <li>Toute personne sans expérience auprès des patients toxicomanes</li>
          </ul>
        </Reveal>

        <Reveal><h2>Lieu de l'étude</h2>
          <ul>
            <li>Centre d'Assistance Médicale Urgente (CAMU)</li>
            <li>Hôpital Razi de La Manouba (services TANIT et urgences)</li>
            <li>Institut National de Neurologie Mongi Ben Hmida (INN)</li>
            <li>Service d'orthopédie de l'hôpital La Rabta</li>
          </ul>
        </Reveal>

        <Reveal><h2>Outil de collecte</h2>
          <p>
            Questionnaire anonyme en français, comportant 20 questions réparties en quatre sections : données
            épidémiologiques, connaissances et expérience, prise en charge et difficultés, attitudes et pratiques
            professionnelles.
          </p>
        </Reveal>

        <Reveal><h2>Analyse des données</h2>
          <p>
            Données saisies et analysées avec SPSS. Résultats exprimés en fréquences, pourcentages, moyennes et
            écarts-types. Test du Chi² de Pearson pour l'analyse bivariée (seuil de significativité fixé à
            <em> p</em> &lt; 0,05).
          </p>
        </Reveal>

        <Reveal><h2>Considérations éthiques</h2>
          <p>
            Anonymat et confidentialité garantis. Aucune donnée nominative collectée. Participation volontaire
            après information sur les objectifs de l'étude, avec accord préalable des services concernés.
          </p>
        </Reveal>
      </article>
    </div>
  );
}
