"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type ToastItem = { id: number; message: string };

type ToastContextType = {
  show: (message: string, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(0);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const show = useCallback((message: string, duration = 3000) => {
    const id = ++idRef.current;
    setToasts((t) => [...t, { id, message }]);

    window.setTimeout(() => {
      if (!mountedRef.current) return;
      setToasts((t) => t.filter((x) => x.id !== id));
    }, duration);
  }, []);

  const remove = useCallback((id: number) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const toastNodes = (
    <aside className="fixed z-50 right-4 bottom-6 flex flex-col gap-2 items-end">
      {toasts.map((t) => (
        <article
          key={t.id}
          className="max-w-xs w-full bg-slate-800 text-white px-4 py-2 rounded shadow-lg opacity-95 transform transition-all duration-200"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm">{t.message}</p>
            <button
              aria-label="dismiss"
              onClick={() => remove(t.id)}
              className="text-slate-300 hover:text-white ml-4"
            >
              ✕
            </button>
          </div>
        </article>
      ))}
    </aside>
  );

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {typeof document !== "undefined"
        ? createPortal(toastNodes, document.body)
        : null}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    return {
      show: (message: string) => {
        // fallback to alert if provider is missing (won't break existing usage)
        // keep short and non-intrusive
        alert(message);
      },
    };
  }
  return ctx;
};
