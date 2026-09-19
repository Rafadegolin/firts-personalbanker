"use client";

import { Toaster } from "sonner";

// O Toaster fica no <body>, fora das seções; usa o tema marinho da marca.
export default function ClientToaster() {
  return (
    <Toaster
      theme="dark"
      position="top-right"
      toastOptions={{
        style: {
          background: "#0f2038",
          color: "#efe9dc",
          border: "1px solid rgb(212 176 106 / 0.35)",
          borderRadius: "3px",
          fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        },
      }}
    />
  );
}
