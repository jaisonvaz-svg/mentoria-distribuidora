export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Sua distribuidora pode começar{" "}
          <span className="underline decoration-white/40">hoje</span>
        </h2>
        <p className="mt-6 text-orange-100 text-lg max-w-xl mx-auto">
          Pare de adiar. Cada mês que você passa sem um método estruturado é
          dinheiro que fica na mesa. Dê o primeiro passo agora.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#formulario"
            className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:scale-105"
          >
            Quero minha vaga agora →
          </a>
          <a
            href="#oferta"
            className="border-2 border-white/50 text-white hover:border-white font-semibold text-lg px-10 py-4 rounded-2xl transition-all duration-200"
          >
            Ver a oferta completa
          </a>
        </div>

        <p className="mt-6 text-orange-200 text-sm">
          🔒 7 dias de garantia incondicional · Suporte pelo WhatsApp
        </p>
      </div>
    </section>
  );
}
