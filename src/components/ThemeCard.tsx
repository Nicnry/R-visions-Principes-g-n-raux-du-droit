import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Theme } from "@/models/types";
import { colorMap } from "@/lib/theme-colors";
import { cx } from "@/lib/cx";

export function ThemeCard({
  theme,
  href,
  meta,
}: {
  theme: Theme;
  href: string;
  meta?: string;
}) {
  const c = colorMap[theme.color];
  return (
    <Link
      href={href}
      className={cx(
        "group relative flex items-center gap-4 rounded-3xl border-2 border-ink/10 bg-paper-raised p-4 shadow-[3px_3px_0_0_rgba(27,23,64,0.08)] transition-all",
        "hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_rgba(27,23,64,0.12)] active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(27,23,64,0.1)]"
      )}
    >
      <span
        className={cx(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl",
          c.bgTint
        )}
      >
        {theme.emoji}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-ink-soft">
          Art. {String(theme.order).padStart(2, "0")}
        </span>
        <span className="block truncate font-display text-lg font-semibold text-ink">
          {theme.title}
        </span>
        <span className="block truncate text-sm text-ink-soft">{theme.summary}</span>
        {meta && (
          <span className={cx("mt-1 inline-block text-xs font-bold", c.text)}>{meta}</span>
        )}
      </span>
      <ArrowRight
        size={18}
        className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-indigo"
      />
    </Link>
  );
}
