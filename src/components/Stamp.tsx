import { Check, X } from "lucide-react";
import { cx } from "@/lib/cx";

export function Stamp({
  kind,
  label,
  className,
}: {
  kind: "correct" | "incorrect" | "neutral";
  label: string;
  className?: string;
}) {
  const styles =
    kind === "correct"
      ? "text-mint-dark bg-mint-tint"
      : kind === "incorrect"
      ? "text-coral-dark bg-coral-tint"
      : "text-indigo bg-indigo-tint";

  return (
    <span className={cx("stamp text-sm", styles, className)}>
      {kind === "correct" && <Check size={16} strokeWidth={3} />}
      {kind === "incorrect" && <X size={16} strokeWidth={3} />}
      {label}
    </span>
  );
}
