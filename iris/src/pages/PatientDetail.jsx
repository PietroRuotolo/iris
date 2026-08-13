import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import ScoreRing from '../components/ScoreRing'
import MetricCard from '../components/MetricCard'
import TrendChart from '../components/TrendChart'
import { pacientes } from '../services/pacientes'

export default function PatientDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const paciente = pacientes.find((p) => p.id === id)

  if (!paciente) {
    return (
      <main className="mx-auto max-w-md px-5 pt-6">
        <p className="text-[var(--color-ink-soft)]">Paciente não encontrado.</p>
      </main>
    )
  }

  const diaNormal = paciente.statusDia === 'normal'

  return (
    <main className="mx-auto max-w-md px-5 pb-24 pt-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface)] shadow-sm"
          aria-label="Voltar"
        >
          <ChevronLeft size={22} className="text-[var(--color-navy)]" />
        </button>
        <div>
          <h1 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-navy)]">
            {paciente.nome}
          </h1>
          <p className="text-sm text-[var(--color-ink-soft)]">{paciente.idade} anos</p>
        </div>
      </div>

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
          <ScoreRing score={paciente.score} />
          <div>
            <h2 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-navy)]">
              Score comportamental
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {paciente.scoreDescricao}
            </p>
          </div>
        </div>
      </section>

      <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-[var(--color-ink-soft)]">
        Métricas de hoje
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {paciente.metricas.map((m) => (
          <MetricCard key={m.id} metrica={m} />
        ))}
      </div>

      <section className="mt-6 rounded-3xl bg-[var(--color-surface)] p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-[var(--font-display)] text-base font-semibold text-[var(--color-navy)]">
            Tendência · 7 dias
          </h2>
          <span className="text-xs text-[var(--color-ink-soft)]">Score comportamental</span>
        </div>
        <div className="mt-3">
          <TrendChart dados={paciente.tendencia} />
        </div>
      </section>
    </main>
  )
}