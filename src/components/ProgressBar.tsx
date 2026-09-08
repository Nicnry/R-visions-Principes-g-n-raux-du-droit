import { cx } from "@/lib/cx";

export function ProgressBar({
  value,
  colorClass = "bg-indigo",
  className,
}: {
  value: number;
  colorClass?: string;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cx("h-2.5 w-full overflow-hidden rounded-full bg-ink/10", className)}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cx("h-full rounded-full transition-[width] duration-500 ease-out", colorClass)}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
