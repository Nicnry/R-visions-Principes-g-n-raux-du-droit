import { Sparkles } from "lucide-react";

/**
 * À afficher sur tout contenu marqué `estimated: true`. Ne JAMAIS retirer
 * ce badge d'un contenu tant qu'il n'a pas été validé par le vrai cours —
 * voir CLAUDE.md à la racine du projet.
 */
export function EstimatedBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span
      title="Contenu déduit du descriptif du module, pas encore confirmé par le cours réel"
      className={
        compact
          ? "inline-flex items-center gap-1 rounded-full bg-saffron-tint px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-saffron-dark"
          : "inline-flex items-center gap-1.5 rounded-full bg-saffron-tint px-3 py-1 text-xs font-bold uppercase tracking-wide text-saffron-dark"
      }
    >
      <Sparkles size={compact ? 11 : 13} />
      Déduit
    </span>
  );
}
