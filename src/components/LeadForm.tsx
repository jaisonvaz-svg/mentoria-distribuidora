"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      setStatus("success");
      setForm({ name: "", email: "", whatsapp: "" });
    } catch (err) {
      console.error("[LeadForm] Submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="formulario" className="py-24 bg-gray-900">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
            Reserve sua vaga
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            Preencha seus dados e{" "}
            <span className="text-orange-400">garanta sua vaga</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Nossa equipe entrará em contato pelo WhatsApp para finalizar sua
            inscrição.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 sm:p-10">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Recebemos seus dados!
              </h3>
              <p className="text-gray-400">
                Em breve nossa equipe vai entrar em contato pelo WhatsApp para
                confirmar sua vaga.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Nome completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none text-white placeholder-gray-500 rounded-xl px-4 py-3 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none text-white placeholder-gray-500 rounded-xl px-4 py-3 transition-colors"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none text-white placeholder-gray-500 rounded-xl px-4 py-3 transition-colors"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Ocorreu um erro ao enviar. Tente novamente.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:scale-105"
              >
                {status === "loading" ? "Enviando..." : "Garantir minha vaga →"}
              </button>

              <p className="text-center text-gray-500 text-xs">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
