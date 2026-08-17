//Login simulado
const CHAVE_TOKEN = 'iris:token'

export async function login({email, senha}){
    //Quando tiver back-end trocar por:
    // const resp = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, senha }),
    // })
    // if (!resp.ok) throw new Error('E-mail ou senha inválidos.')
    // const dados = await resp.json()
    // salvarToken(dados.token)
    // return dados
    await new Promise((r) => setTimeout(r, 600))
    if (!email || !senha){
        throw new Error('Preencha e-mail e senha.')
    }
    const tokenFalso = 'demo-token'
    salvarToken(tokenFalso)
    return {token: tokenFalso, medico: {nome: 'Dr.Demo', email}}
}

export function salvarToken(token) {
  localStorage.setItem(CHAVE_TOKEN, token)
}

export function getToken() {
  return localStorage.getItem(CHAVE_TOKEN)
}

export function estaAutenticado() {
  return Boolean(getToken())
}

export function logout() {
  localStorage.removeItem(CHAVE_TOKEN)
}