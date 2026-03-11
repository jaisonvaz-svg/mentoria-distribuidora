"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          Método exclusivo – Vagas limitadas
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Monte sua{" "}
          <span className="text-orange-400">Distribuidora</span> de Telas e
          Baterias e{" "}
          <span className="text-orange-400">Escale seus Lucros</span> em até 90
          dias
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          O método completo para quem quer sair do varejo e construir um negócio
          de atacado com vendas estruturadas, clientes fixos e crescimento
          previsível.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#oferta"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
          >
            Quero entrar agora →
          </a>
          <a
            href="#sobre"
            className="w-full sm:w-auto border border-gray-600 hover:border-orange-400 text-gray-300 hover:text-orange-400 font-semibold text-lg px-10 py-4 rounded-2xl transition-all duration-200"
          >
            Saber mais
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-10 text-gray-500 text-sm">
          +500 distribuidores já transformaram seus negócios com esse método
        </p>
      </div>
    </section>
  );
}
