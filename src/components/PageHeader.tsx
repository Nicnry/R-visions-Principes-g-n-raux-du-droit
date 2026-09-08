import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  description,
  back,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  back?: string;
}) {
  return (
    <header className="px-5 pt-6 pb-4">
      {back && (
        <Link
          href={back}
          className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-ink-soft hover:text-indigo"
        >
          <ChevronLeft size={16} /> Retour
        </Link>
      )}
      {eyebrow && (
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-coral-dark">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-1 font-display text-3xl font-semibold leading-tight text-ink">{title}</h1>
      {description && <p className="mt-2 text-[15px] text-ink-soft">{description}</p>}
    </header>
  );
}
