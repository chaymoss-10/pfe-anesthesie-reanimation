export function Stat({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className={`card-elevated p-5 md:p-6 ${accent ? "bg-accent/20 border-accent/40" : ""}`}>
      <div className="font-serif text-3xl md:text-4xl font-semibold text-primary">{value}</div>
      <div className="mt-2 text-sm text-muted-foreground leading-snug">{label}</div>
    </div>
  );
}

export function Bar({ label, value, max = 100 }: { label: string; value: number; max?: number }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-foreground/80">{label}</span>
        <span className="font-medium text-primary">{value}%</span>
      </div>
      <div className="mt-1.5 h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function SectionTitle({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-primary/70 mb-3">{eyebrow}</div>}
      <h1 className="font-serif text-3xl md:text-5xl font-semibold text-foreground leading-tight">{title}</h1>
      {lead && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{lead}</p>}
    </div>
  );
}
