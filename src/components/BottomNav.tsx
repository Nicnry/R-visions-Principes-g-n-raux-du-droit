"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Gavel, Home, ListChecks, Trophy } from "lucide-react";
import { cx } from "@/lib/cx";

const tabs = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/theorie", label: "Théorie", icon: BookOpen },
  { href: "/pratique", label: "Pratique", icon: Gavel },
  { href: "/quiz", label: "Quiz", icon: ListChecks },
  { href: "/progres", label: "Progrès", icon: Trophy },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 border-t-2 border-ink/10 bg-paper-raised/95 backdrop-blur supports-[backdrop-filter]:bg-paper-raised/80 pb-[env(safe-area-inset-bottom)]"
      aria-label="Navigation principale"
    >
      <ul className="mx-auto flex max-w-2xl items-stretch justify-between px-2">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={cx(
                  "flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold transition-colors",
                  active ? "text-indigo" : "text-ink-soft hover:text-ink"
                )}
              >
                <span
                  className={cx(
                    "flex h-9 w-9 items-center justify-center rounded-2xl transition-all",
                    active && "bg-indigo-tint -translate-y-0.5"
                  )}
                >
                  <Icon size={20} strokeWidth={active ? 2.5 : 2} />
                </span>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
