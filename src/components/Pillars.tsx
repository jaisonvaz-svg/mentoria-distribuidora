const pillars = [
  {
    number: "01",
    title: "Fornecimento Estratégico",
    description:
      "Aprenda a identificar e negociar com os melhores fornecedores de telas e baterias do mercado, garantindo margem e qualidade.",
    icon: "🏭",
  },
  {
    number: "02",
    title: "Estrutura de Vendas B2B",
    description:
      "Monte sua carteira de clientes fixos entre técnicos, lojas de assistência e revendedores com um processo de vendas replicável.",
    icon: "🤝",
  },
  {
    number: "03",
    title: "Precificação e Margem",
    description:
      "Domine a planilha de custos, defina preços competitivos e proteja sua margem em qualquer cenário de mercado.",
    icon: "📊",
  },
  {
    number: "04",
    title: "Logística e Entrega",
    description:
      "Estruture sua operação de estoque e entrega para garantir agilidade, reduzir perdas e fidelizar clientes.",
    icon: "🚚",
  },
  {
    number: "05",
    title: "Escala e Automação",
    description:
      "Use ferramentas simples de gestão e WhatsApp para automatizar pedidos, cobranças e recompra, crescendo sem aumentar o caos.",
    icon: "🚀",
  },
];

export default function Pillars() {
  return (
    <section id="metodo" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
            O Método
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Os 5 Pilares da{" "}
            <span className="text-orange-400">Mentoria Distribuidora</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Cada pilar é uma etapa do caminho que leva sua operação do zero ao
            crescimento escalável.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={`relative bg-gray-900 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-gray-800 text-5xl font-extrabold leading-none group-hover:text-orange-500/20 transition-colors">
                {pillar.number}
              </span>

              {/* Icon */}
              <div className="text-4xl mb-4">{pillar.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
