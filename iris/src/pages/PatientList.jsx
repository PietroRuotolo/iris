import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { pacientes } from '../services/pacientes'
import { logout } from '../services/auth'

const STATUS = {
  normal: {
    label: 'Estável',
    text: 'text-[var(--color-good)]',
    bg: 'bg-[var(--color-good-bg)]',
    dot: 'bg-[var(--color-good)]',
  },
  atencao: {
    label: 'Atenção',
    text: 'text-[var(--color-warn)]',
    bg: 'bg-[var(--color-warn-bg)]',
    dot: 'bg-[var(--color-warn)]',
  },
}

export default function PatientList() {
  const navigate = useNavigate()

  function sair() {
    logout()
    navigate('/login')
  }

  return (
    <main className="mx-auto max-w-md px-5 pb-24 pt-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-ink-soft)]">
            Acompanhamento
          </p>
          <h1 className="font-[var(--font-display)] text-3xl font-semibold text-[var(--color-navy)]">
            Meus pacientes
          </h1>
        </div>
        <button
          onClick={sair}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface)] shadow-sm"
          aria-label="Sair"
        >
          <LogOut size={20} className="text-[var(--color-ink-soft)]" />
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {pacientes.map((p) => {
          const s = STATUS[p.statusDia]
          return (
            <button
              key={p.id}
              onClick={() => navigate(`/paciente/${p.id}`)}
              className="flex w-full items-center justify-between rounded-2xl bg-[var(--color-surface)] p-4 text-left shadow-sm transition active:scale-[0.99]"
            >
              <div>
                <p className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-navy)]">
                  {p.nome}
                </p>
                <p className="text-sm text-[var(--color-ink-soft)]">{p.idade} anos</p>
              </div>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${s.bg} ${s.text}`}
              >
                <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                {s.label}
              </span>
            </button>
          )
        })}
      </div>
    </main>
  )
}