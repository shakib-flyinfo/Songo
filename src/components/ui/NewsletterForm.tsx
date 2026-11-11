"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="flex overflow-hidden rounded-lg border border-line bg-cream-50">
        <input
          type="email"
          name="email"
          placeholder="Enter your email here"
          aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[12px] outline-none placeholder:text-ink-500"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={status === "loading"}
          className="bg-copper-500 px-3 text-white transition-colors hover:bg-copper-600"
        >
          <ArrowRight size={14} />
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-1.5 min-h-4 text-[10px]">
        {status === "success" && <span className="text-copper-700">Subscribed. Thank you!</span>}
        {status === "error" && <span className="text-red-500">Enter a valid email address.</span>}
      </p>
    </form>
  );
}
