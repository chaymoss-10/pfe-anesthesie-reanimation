import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Accueil", n: "00" },
  { to: "/theorique", label: "Théorique", n: "01" },
  { to: "/methodologie", label: "Méthode", n: "02" },
  { to: "/resultats", label: "Résultats", n: "03" },
  { to: "/discussion", label: "Discussion", n: "04" },
  { to: "/conclusion", label: "Conclusion", n: "05" },
] as const;

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const activeIdx = Math.max(0, nav.findIndex((n) => n.to === path));

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-navy text-primary-foreground">
            <span className="absolute inset-0 rounded-xl ring-2 ring-teal/40" />
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M4 12h3l2-7 4 14 2-7h5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-[15px] font-semibold text-navy">Toxicomanie · Anesthésie</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              FPSST Tunis · 2025–2026
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = item.to === path;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  active ? "text-navy" : "text-foreground/70 hover:text-navy"
                }`}
              >
                <span className="font-mono text-[10px] mr-1.5 opacity-60">{item.n}</span>
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-teal" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          className="lg:hidden grid h-9 w-9 place-items-center rounded-lg border border-border bg-card"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Page progress dots */}
      <div className="mx-auto hidden lg:flex max-w-6xl items-center gap-1.5 px-6 pb-2">
        {nav.map((_, i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i <= activeIdx ? "bg-teal" : "bg-border"
            }`}
          />
        ))}
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm hover:bg-secondary"
                activeProps={{ className: "flex items-center justify-between rounded-lg px-3 py-3 text-sm bg-secondary text-navy font-medium" }}
                activeOptions={{ exact: true }}
              >
                <span><span className="font-mono text-[10px] opacity-60 mr-2">{item.n}</span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
