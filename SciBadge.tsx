import type { ReactNode } from "react";

export function SciBadge({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="card-elevated flex items-center gap-4 px-5 py-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy text-2xl">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-mono text-xl font-semibold text-navy leading-none">{value}</div>
        <div className="mt-1 text-[12px] text-muted-foreground leading-snug">{label}</div>
      </div>
    </div>
  );
}

export function BigStat({
  value,
  label,
  hint,
}: {
  value: string;
  label: string;
  hint?: string;
}) {
  return (
    <div className="card-elevated p-6 md:p-7 relative overflow-hidden">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal/10" />
      <div className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-teal">
        ↗ DATA
      </div>
      <div className="font-mono text-4xl md:text-5xl font-bold text-navy leading-none tracking-tight">
        {value}
      </div>
      <div className="mt-3 text-sm font-medium text-foreground leading-snug">{label}</div>
      {hint && <div className="mt-2 text-[12px] text-muted-foreground">{hint}</div>}
    </div>
  );
}
