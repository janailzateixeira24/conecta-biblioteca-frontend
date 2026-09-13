import { useState } from 'react'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!email || !senha) {
      setErro('Preencha o e-mail e a senha.')
      return
    }

    if (senha.length < 6) {
      setErro('A senha deve possuir pelo menos 6 caracteres.')
      return
    }

    setErro('')
    onLogin()
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          📚
        </div>

        <h1>Biblioteca Conectada</h1>

        <p className="login-subtitle">
          Acesse o sistema de gestão da biblioteca
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">
              Senha
            </label>

            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) =>
                setSenha(event.target.value)
              }
            />
          </div>

          {erro && (
            <div className="login-error">
              {erro}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
          >
            Entrar
          </button>

        </form>

        <a href="#" className="forgot-password">
          Esqueci minha senha
        </a>

      </div>
    </div>
  )
}

export default Login