import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BackToTop } from "@/components/BackToTop";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-semibold text-primary">404</h1>
        <p className="mt-4 text-muted-foreground">Cette page n'existe pas.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-foreground">Une erreur est survenue</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >Réessayer</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PFE · Prise en charge des patients toxicomanes en anesthésie-réanimation" },
      { name: "description", content: "Étude tunisienne transversale (n=60) sur les connaissances, attitudes et pratiques des soignants face aux patients toxicomanes — FPSST Tunis 2025–2026." },
      { property: "og:title", content: "PFE · Prise en charge des patients toxicomanes en anesthésie-réanimation" },
      { name: "twitter:title", content: "PFE · Prise en charge des patients toxicomanes en anesthésie-réanimation" },
      { property: "og:description", content: "Étude tunisienne transversale (n=60) sur les connaissances, attitudes et pratiques des soignants face aux patients toxicomanes — FPSST Tunis 2025–2026." },
      { name: "twitter:description", content: "Étude tunisienne transversale (n=60) sur les connaissances, attitudes et pratiques des soignants face aux patients toxicomanes — FPSST Tunis 2025–2026." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/174c0c79-11d5-4c9f-8da1-94face3c1e5e/id-preview-ad448c60--007b9d49-bc32-4b87-9d9b-2bf297d73555.lovable.app-1779364209043.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/174c0c79-11d5-4c9f-8da1-94face3c1e5e/id-preview-ad448c60--007b9d49-bc32-4b87-9d9b-2bf297d73555.lovable.app-1779364209043.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Fira+Code:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <BackToTop />
      </div>
    </QueryClientProvider>
  );
}
