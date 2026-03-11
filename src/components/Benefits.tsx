const benefits = [
  {
    icon: "💰",
    title: "Aumente sua margem em até 3x",
    description:
      "Saia do varejo pulverizado e passe a vender em volume com margem real. Distribuidores faturam mais com menos esforço.",
  },
  {
    icon: "📅",
    title: "Clientes fixos e compras recorrentes",
    description:
      "Construa uma carteira de assistências técnicas que compram todo mês, gerando previsibilidade no seu faturamento.",
  },
  {
    icon: "🎯",
    title: "Processo de vendas claro e replicável",
    description:
      "Pare de depender de indicações. Aprenda a prospectar, abordar e fechar clientes de forma sistemática.",
  },
  {
    icon: "⚡",
    title: "Operação simples desde o começo",
    description:
      "Você não precisa de loja física, grande estoque inicial ou equipe. O método é desenhado para quem está começando.",
  },
  {
    icon: "🔒",
    title: "Negócio com barreiras de entrada",
    description:
      "Aprenda a fidelizar clientes e criar relacionamentos que tornam sua distribuidora difícil de ser substituída.",
  },
  {
    icon: "🌐",
    title: "Suporte de uma comunidade ativa",
    description:
      "Acesse um grupo exclusivo de distribuidores para trocar experiências, fornecedores e oportunidades de negócio.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
            Por que entrar
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            O que você vai{" "}
            <span className="text-orange-400">conquistar</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Resultados concretos que nossos alunos alcançam seguindo o método.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
