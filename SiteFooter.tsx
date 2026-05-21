import { useState } from "react";
import { Check, Copy, Quote } from "lucide-react";

const APA =
  "Chargui, C., & Feguiri, C. (2026). Prise en charge des patients toxicomanes en anesthésie-réanimation : étude descriptive transversale auprès de 60 professionnels de santé tunisiens [Mémoire de Licence]. Faculté Privée des Sciences de la Santé de Tunis.";

export function SiteFooter() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(APA);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <footer className="mt-24 border-t border-border/60 bg-navy text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <div className="font-serif text-lg">Projet de Fin d'Études</div>
          <p className="mt-2 text-primary-foreground/70 leading-relaxed">
            Licence Nationale en Anesthésie–Réanimation.<br />
            Faculté Privée des Sciences de la Santé de Tunis.
          </p>
          <div className="mt-4 font-mono text-[11px] uppercase tracking-widest text-teal">
            Tunisie · 2025–2026
          </div>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-3">Auteures</div>
          <p>Chargui Chaima</p>
          <p>Feguiri Chaima</p>
          <div className="mt-5 font-mono text-[11px] uppercase tracking-widest text-teal mb-2">Terrain</div>
          <p className="text-primary-foreground/80">CAMU · Hôpital Razi · INN Mongi Ben Hmida · La Rabta</p>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-3">Citer cette étude</div>
          <p className="text-primary-foreground/75 text-[13px] leading-relaxed">{APA}</p>
          <button
            onClick={copy}
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-teal/40 bg-teal/10 px-4 py-2 text-xs font-medium text-teal hover:bg-teal/20 transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copié" : "Citer (APA)"}
            <Quote className="h-3.5 w-3.5 opacity-60" />
          </button>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[11px] font-mono uppercase tracking-widest text-primary-foreground/60">
        © 2025–2026 · Tous droits réservés
      </div>
    </footer>
  );
}
