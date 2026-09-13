function Header({ currentPage }) {
  const titles = {
    dashboard: 'Dashboard',
    livros: 'Livros',
    emprestimos: 'Empréstimos',
    devolucoes: 'Devoluções',
    relatorios: 'Relatórios',
    usuarios: 'Usuários',
    configuracoes: 'Configurações',
  }

  return (
    <header className="header">
      <div>
        <h1>{titles[currentPage] || 'Dashboard'}</h1>

        <p>
          Bem-vindo à Biblioteca Conectada
        </p>
      </div>

      <div className="header-user">
        <button className="notification-button">
          🔔
        </button>

        <div className="user-avatar">
          MC
        </div>

        <div className="user-info">
          <strong>Maria Clara</strong>
          <span>Bibliotecária</span>
        </div>
      </div>
    </header>
  )
}

export default Header