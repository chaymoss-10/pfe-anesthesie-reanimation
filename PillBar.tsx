import type { ReactNode } from "react";

export function PillBar({
  label,
  value,
  max = 100,
  variant = "primary",
}: {
  label: string;
  value: number;
  max?: number;
  variant?: "primary" | "secondary";
}) {
  const pct = Math.max(4, Math.min(100, (value / max) * 100));
  const fill =
    variant === "primary"
      ? "bg-gradient-to-r from-navy to-teal"
      : "bg-gradient-to-r from-accent/60 to-accent/30";
  const textColor = variant === "primary" ? "text-white" : "text-navy";

  return (
    <div className="group">
      <div className="relative h-9 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 ${fill} rounded-full transition-[width] duration-700 ease-out`}
          style={{ width: `${pct}%` }}
        />
        <div className="relative z-10 flex h-full items-center justify-between px-4">
          <span className={`text-[13px] font-medium ${pct > 35 ? textColor : "text-navy"} truncate`}>
            {label}
          </span>
          <span className={`font-mono text-[12px] font-semibold ${pct > 12 ? textColor : "text-navy"}`}>
            {value}%
          </span>
        </div>
      </div>
    </div>
  );
}

export function ChartCard({
  title,
  children,
  interpretation,
  icon,
}: {
  title: string;
  children: ReactNode;
  interpretation: string;
  icon?: ReactNode;
}) {
  return (
    <div className="card-elevated p-6 md:p-7 flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        {icon && (
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal/15 text-navy">
            {icon}
          </div>
        )}
        <h3 className="font-serif text-lg md:text-xl text-navy">{title}</h3>
      </div>
      <div className="space-y-2.5">{children}</div>
      <p className="mt-5 pt-4 border-t border-dashed border-teal/40 text-[13px] text-muted-foreground leading-relaxed italic">
        {interpretation}
      </p>
    </div>
  );
}
