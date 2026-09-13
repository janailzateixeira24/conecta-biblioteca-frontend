import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Livros from './pages/Livros'
import Emprestimos from './pages/Emprestimos'
import Devolucoes from './pages/Devolucoes'
import Relatorios from './pages/Relatorios'
import Usuarios from './pages/Usuarios'
import Configuracoes from './pages/Configuracoes'

function App() {
  // Controla se o usuário está logado
  const [loggedIn, setLoggedIn] = useState(false)

  // Controla qual página está aberta
  const [currentPage, setCurrentPage] = useState('dashboard')

  // ==============================
  // LOGIN
  // ==============================

  function handleLogin() {
    setLoggedIn(true)
    setCurrentPage('dashboard')
  }

  // ==============================
  // SAIR DO SISTEMA
  // ==============================

  function handleLogout() {
    setLoggedIn(false)
    setCurrentPage('dashboard')
  }

  // ==============================
  // SELECIONAR PÁGINA
  // ==============================

  function renderPage() {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />

      case 'livros':
        return <Livros />

      case 'emprestimos':
        return <Emprestimos />

      case 'devolucoes':
        return <Devolucoes />

      case 'relatorios':
        return <Relatorios />

      case 'usuarios':
        return <Usuarios />

      case 'configuracoes':
        return <Configuracoes />

      default:
        return <Dashboard />
    }
  }

  // ==============================
  // SE NÃO ESTIVER LOGADO
  // MOSTRA A TELA DE LOGIN
  // ==============================

  if (!loggedIn) {
    return (
      <Login onLogin={handleLogin} />
    )
  }

  // ==============================
  // SISTEMA PRINCIPAL
  // ==============================

  return (
    <div className="app">

      {/* MENU LATERAL */}
      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onLogout={handleLogout}
      />

      {/* ÁREA PRINCIPAL */}
      <main className="main-content">

        {/* CABEÇALHO */}
        <Header
          currentPage={currentPage}
        />

        {/* CONTEÚDO DA PÁGINA */}
        <section className="page-content">
          {renderPage()}
        </section>

      </main>

    </div>
  )
}

export default App