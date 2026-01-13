import { useCallback } from "react";
import { toastStore } from "@/components/ui/toaster";

export function useToast() {
  const toast = useCallback((t) => {
    toastStore.add(t);
  }, []);

  return { toast };
}
