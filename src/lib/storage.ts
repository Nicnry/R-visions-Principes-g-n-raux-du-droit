// Petit wrapper autour de localStorage : centralise la clé utilisée et
// gère les cas où localStorage n'est pas disponible (SSR, mode privé...).

const STORAGE_KEY = "droit-revision:progress:v1";

export function readStorage<T>(fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    return { ...fallback, ...JSON.parse(raw) } as T;
  } catch {
    return fallback;
  }
}

export function writeStorage<T>(value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // localStorage indisponible (mode privé strict, quota...) : on ignore.
  }
}
