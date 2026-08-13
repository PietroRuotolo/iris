export default function MetricCard({ metrica }) {
  const atencao = metrica.estado === 'alta'

  return (
    <div className="rounded-2xl bg-[var(--color-surface)] p-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-soft)]">
        {metrica.label}
      </p>
      <p className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-[var(--color-navy)]">
        {metrica.valor}
      </p>
      {metrica.delta && (
        <p
          className={`mt-1 text-xs font-medium ${
            atencao ? 'text-[var(--color-warn)]' : 'text-[var(--color-good)]'
          }`}
        >
          {metrica.delta}
        </p>
      )}
    </div>
  )
}
