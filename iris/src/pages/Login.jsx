import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/auth'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function handleEntrar() {
    setErro('')
    setCarregando(true)
    try {
      await login({ email, senha })
      navigate('/')
    } catch (e) {
      setErro(e.message)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <div className="mb-8 text-center">
        <h1 className="font-[var(--font-display)] text-4xl font-semibold text-[var(--color-navy)]">
          iris
        </h1>
        <p className="mt-2 text-[var(--color-ink-soft)]">Acompanhamento clínico</p>
      </div>

      <div className="rounded-3xl bg-[var(--color-surface)] p-6 shadow-sm">
        <label className="block text-sm font-medium text-[var(--color-ink)]">E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="medico@exemplo.com"
          className="mt-1 w-full rounded-xl border border-black/10 px-4 py-3 text-base outline-none focus:border-[var(--color-navy)]"
        />

        <label className="mt-4 block text-sm font-medium text-[var(--color-ink)]">Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="••••••••"
          className="mt-1 w-full rounded-xl border border-black/10 px-4 py-3 text-base outline-none focus:border-[var(--color-navy)]"
        />

        {erro && <p className="mt-3 text-sm text-[var(--color-warn)]">{erro}</p>}

        <button
          onClick={handleEntrar}
          disabled={carregando}
          className="mt-6 w-full rounded-xl bg-[var(--color-navy)] py-3 text-base font-semibold text-white disabled:opacity-60"
        >
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
      </div>
    </main>
  )
}