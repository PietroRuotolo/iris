import ScoreRing from '../components/ScoreRing'
import { dadosHome } from '../services/homeData'

export default function Home() {
  const dados = dadosHome
  const diaNormal = dados.statusDia === 'normal'

  return (
    <main className="mx-auto max-w-md px-5 pb-24 pt-6">
      <p className="text-lg text-[var(--color-ink-soft)]">{dados.saudacao},</p>
      <h1 className="font-[var(--font-display)] text-3xl font-semibold text-[var(--color-navy)]">
        {dados.nome}
      </h1>

      <div
        className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
          diaNormal
            ? 'bg-[var(--color-good-bg)] text-[var(--color-good)]'
            : 'bg-[var(--color-warn-bg)] text-[var(--color-warn)]'
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full ${
            diaNormal ? 'bg-[var(--color-good)]' : 'bg-[var(--color-warn)]'
          }`}
        />
        {diaNormal ? 'Padrão normal hoje' : 'Atenção ao padrão de hoje'}
      </div>

      <section className="mt-6 rounded-3xl bg-[var(--color-surface)] p-6 shadow-sm">
        <div className="flex items-center gap-5">
          <ScoreRing score={dados.score} />
          <div>
            <h2 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-navy)]">
              Score comportamental
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {dados.scoreDescricao}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}