export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-orange-400 font-bold text-lg mb-1">
          Mentoria Distribuidora
        </p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Mentoria Distribuidora por Jaison Vaz.
          Todos os direitos reservados.
        </p>
        <p className="text-gray-600 text-xs mt-4 max-w-xl mx-auto">
          Este produto é destinado exclusivamente a fins educacionais. Os
          resultados variam de acordo com o esforço e dedicação de cada aluno.
        </p>
      </div>
    </footer>
  );
}
