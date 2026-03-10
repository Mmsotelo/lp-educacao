import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
}

export default function App() {
  return (
    <main className="bg-white text-zinc-900 overflow-x-hidden">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative px-6 py-24 bg-gradient-to-b from-blue-50 via-white to-white"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-blue-700 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Produto educacional
            </span>

            <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Aprenda com método, clareza e aplicação prática
            </h1>

            <p className="mt-6 text-lg text-zinc-600 max-w-xl">
              Uma landing page pronta para vender cursos, mentorias, treinamentos,
              ebooks ou métodos educacionais com uma estrutura clara de conversão.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#oferta"
                className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white px-6 py-3 rounded-xl font-semibold text-center transition"
              >
                Quero conhecer
              </a>

              <a
                href="#conteudo"
                className="border border-zinc-300 hover:border-blue-300 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold text-center transition"
              >
                Ver conteúdo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-600">
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-2">
                Método estruturado
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-2">
                Aplicação prática
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-2">
                Oferta clara
              </span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur border border-white/60 rounded-3xl p-6 shadow-xl shadow-blue-100/40">
            <div className="rounded-3xl bg-gradient-to-br from-blue-100 via-white to-cyan-50 p-8 min-h-[420px] flex flex-col justify-between border border-blue-100">
              <div>
                <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold">
                  Seu produto
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight">
                  Curso, método ou treinamento com uma oferta clara
                </h2>

                <p className="mt-4 text-zinc-600">
                  Aqui pode entrar a capa do ebook, imagem do curso, foto do
                  especialista ou mockup do produto.
                </p>
              </div>

              <div className="mt-8 bg-blue-600 text-white rounded-2xl p-6 shadow-lg shadow-blue-500/20">
                <p className="text-sm uppercase tracking-widest text-blue-100">
                  Oferta inicial
                </p>
                <p className="mt-2 text-4xl font-bold">R$SEU INVESTIMENTO AQUI</p>
                <p className="mt-2 text-blue-100">ou em até 12x</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BENEFÍCIOS */}
      <motion.section {...fadeUp} className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="border rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 bg-white">
            <h3 className="text-xl font-semibold">Método estruturado</h3>
            <p className="mt-3 text-zinc-600">
              Conteúdo organizado para evolução progressiva e aprendizado sem
              bagunça.
            </p>
          </div>

          <div className="border rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 bg-white">
            <h3 className="text-xl font-semibold">Aplicação prática</h3>
            <p className="mt-3 text-zinc-600">
              Exercícios, exemplos reais e foco em execução, não só teoria.
            </p>
          </div>

          <div className="border rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 bg-white">
            <h3 className="text-xl font-semibold">Mais clareza</h3>
            <p className="mt-3 text-zinc-600">
              Menos conteúdo solto e mais direção para transformar estudo em
              resultado.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CONTEÚDO */}
      <motion.section
        {...fadeUp}
        id="conteudo"
        className="px-6 py-20 bg-gradient-to-b from-zinc-50 to-white"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold text-blue-700 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Conteúdo
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              O que você vai receber
            </h2>

            <p className="mt-4 text-zinc-600">
              Estruture aqui os módulos, bônus, materiais e encontros.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-2xl p-6 transition duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1">
              <h3 className="text-xl font-semibold">Módulo 1</h3>
              <p className="mt-3 text-zinc-600">
                Fundamentos e base estratégica para começar.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 transition duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1">
              <h3 className="text-xl font-semibold">Módulo 2</h3>
              <p className="mt-3 text-zinc-600">
                Aplicação prática com exemplos reais.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 transition duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1">
              <h3 className="text-xl font-semibold">Módulo 3</h3>
              <p className="mt-3 text-zinc-600">
                Execução orientada para resultado.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 transition duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1">
              <h3 className="text-xl font-semibold">Bônus</h3>
              <p className="mt-3 text-zinc-600">
                Material complementar, checklist e suporte.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PROVA SOCIAL */}
      <motion.section {...fadeUp} className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold text-blue-700 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Prova social
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Quem já passou por aqui aprovou
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-10">
            <div className="border p-6 rounded-2xl transition duration-300 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 bg-white">
              <p className="text-zinc-700">
                “Conteúdo direto e fácil de aplicar.”
              </p>
              <span className="block mt-4 text-sm text-zinc-500">
                João Silva
              </span>
            </div>

            <div className="border p-6 rounded-2xl transition duration-300 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 bg-white">
              <p className="text-zinc-700">
                “A metodologia trouxe clareza para meus estudos.”
              </p>
              <span className="block mt-4 text-sm text-zinc-500">
                Maria Costa
              </span>
            </div>

            <div className="border p-6 rounded-2xl transition duration-300 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 bg-white">
              <p className="text-zinc-700">
                “Material muito bem estruturado.”
              </p>
              <span className="block mt-4 text-sm text-zinc-500">
                Pedro Lima
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        {...fadeUp}
        className="px-6 py-20 bg-gradient-to-b from-zinc-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold text-blue-700 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Perguntas frequentes
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            <div className="bg-white border rounded-2xl p-6 transition duration-300 hover:shadow-lg hover:shadow-blue-100/50">
              <h3 className="text-lg font-semibold">Para quem é este produto?</h3>
              <p className="mt-3 text-zinc-600">
                Para pessoas que querem aprender com mais clareza, estrutura e
                foco em resultado.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 transition duration-300 hover:shadow-lg hover:shadow-blue-100/50">
              <h3 className="text-lg font-semibold">Como recebo acesso?</h3>
              <p className="mt-3 text-zinc-600">
                O acesso pode ser enviado por e-mail, área de membros ou
                WhatsApp, dependendo do formato.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 transition duration-300 hover:shadow-lg hover:shadow-blue-100/50">
              <h3 className="text-lg font-semibold">Tem suporte?</h3>
              <p className="mt-3 text-zinc-600">
                Você pode definir suporte por grupo, WhatsApp, e-mail ou
                encontros ao vivo.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* OFERTA */}
      <motion.section
        {...fadeUp}
        id="oferta"
        className="relative px-6 py-24 bg-blue-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full">
            Oferta
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Comece agora
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Acesso imediato ao conteúdo completo.
          </p>

          <div className="mt-10">
            <p className="text-5xl md:text-6xl font-bold">R$SEU INVESTIMENTO AQUI
            </p>

            <a
              href="https://wa.me/5518996627977"
              className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-900/20 transition hover:scale-[1.02] hover:bg-blue-50"
            >
              Comprar agora
            </a>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center text-sm text-zinc-500">
        © 2026 • Exemplo de estrutura de landing page para produto educacional. Todos os direitos reservados.
      </footer>
    </main>
  )
}