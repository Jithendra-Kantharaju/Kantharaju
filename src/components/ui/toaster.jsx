import { useEffect, useState } from "react";

export const toastStore = {
  listeners: [],
  toasts: [],
  add(toast) {
    const id = (crypto?.randomUUID?.() ?? String(Date.now()));
    const item = {
      id,
      title: toast.title ?? "Notification",
      description: toast.description ?? "",
      variant: toast.variant ?? "default",
    };
    this.toasts = [item, ...this.toasts].slice(0, 3);
    this.listeners.forEach((l) => l(this.toasts));
    setTimeout(() => this.remove(id), 3500);
  },
  remove(id) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.listeners.forEach((l) => l(this.toasts));
  },
  subscribe(fn) {
    this.listeners.push(fn);
    fn(this.toasts);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  },
};

export function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => toastStore.subscribe(setToasts), []);

  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-3 text-left">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={[
            "bg-card border border-border shadow-lg rounded-lg p-4 w-[320px]",
            t.variant === "destructive" ? "border-red-500/40" : "",
          ].join(" ")}
        >
          <div className="font-semibold">{t.title}</div>
          {t.description && (
            <div className="text-sm text-muted-foreground mt-1">{t.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
