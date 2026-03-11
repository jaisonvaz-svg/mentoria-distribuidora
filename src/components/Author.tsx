export default function Author() {
  return (
    <section id="sobre" className="py-24 bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar placeholder */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-2xl shadow-orange-500/20">
              <span className="text-white text-7xl font-extrabold select-none">
                JV
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
              Quem vai te mentorar
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
              Jaison Vaz
            </h2>
            <p className="mt-2 text-orange-400 font-semibold text-lg">
              Fundador da Mentoria Distribuidora
            </p>

            <div className="mt-6 space-y-4 text-gray-400 leading-relaxed">
              <p>
                Jaison Vaz é empreendedor do setor de distribuição de
                componentes eletrônicos há mais de 10 anos. Começou como técnico
                em assistência técnica e percebeu que o verdadeiro potencial
                estava na distribuição.
              </p>
              <p>
                Construiu do zero uma distribuidora que hoje atende mais de 300
                pontos de venda em todo o Brasil, com faturamento de 7 dígitos
                anuais.
              </p>
              <p>
                Hoje dedica seu tempo a ensinar outros empreendedores a
                replicar esse modelo, encurtando o caminho e evitando os erros
                que ele mesmo cometeu no início.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              {[
                { number: "10+", label: "Anos de experiência" },
                { number: "500+", label: "Alunos formados" },
                { number: "300+", label: "Clientes ativos" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-extrabold text-orange-400">
                    {stat.number}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
