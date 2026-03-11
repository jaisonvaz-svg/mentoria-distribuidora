const inclusions = [
  "Acesso completo ao método em vídeos (5 módulos)",
  "Planilha de precificação e controle de estoque",
  "Scripts de abordagem para clientes B2B",
  "Lista de fornecedores qualificados",
  "Grupo exclusivo no WhatsApp com suporte",
  "Mentorias em grupo ao vivo (12 meses)",
  "Modelos de contratos e propostas comerciais",
  "Bônus: Curso de Gestão Financeira para Distribuidores",
];

export default function Offer() {
  return (
    <section id="oferta" className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
            Investimento
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Tudo que você precisa para{" "}
            <span className="text-orange-400">começar e escalar</span>
          </h2>
        </div>

        {/* Offer card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-900 border border-orange-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/10">
          {/* Top banner */}
          <div className="bg-orange-500 px-8 py-4 text-center">
            <p className="text-white font-bold text-sm uppercase tracking-wider">
              🔥 Oferta especial por tempo limitado
            </p>
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Inclusions */}
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-6">
                  O que está incluso:
                </h3>
                <ul className="space-y-3">
                  {inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="lg:w-72 w-full bg-gray-800/60 rounded-2xl p-8 text-center border border-gray-700">
                <p className="text-gray-400 text-sm mb-1">De R$ 2.997 por</p>
                <div className="mb-2">
                  <span className="text-gray-500 text-lg">R$</span>
                  <span className="text-5xl font-extrabold text-white mx-1">
                    997
                  </span>
                  <span className="text-gray-500 text-sm">,00</span>
                </div>
                <p className="text-orange-400 text-sm font-semibold mb-6">
                  ou 12x de R$ 97,00
                </p>

                <a
                  href="#formulario"
                  className="block w-full bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg py-4 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
                >
                  Quero minha vaga →
                </a>

                <p className="mt-4 text-gray-500 text-xs">
                  🔒 Pagamento 100% seguro · 7 dias de garantia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
