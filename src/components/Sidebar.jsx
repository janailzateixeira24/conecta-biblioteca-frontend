function Sidebar({ currentPage, onNavigate, onLogout }) {
  const menuItems = [
    {
      id: 'dashboard',
      icon: '🏠',
      label: 'Dashboard',
    },
    {
      id: 'livros',
      icon: '📚',
      label: 'Livros',
    },
    {
      id: 'emprestimos',
      icon: '📖',
      label: 'Empréstimos',
    },
    {
      id: 'devolucoes',
      icon: '↩️',
      label: 'Devoluções',
    },
    {
      id: 'relatorios',
      icon: '📊',
      label: 'Relatórios',
    },
    {
      id: 'usuarios',
      icon: '👥',
      label: 'Usuários',
    },
  ]

  return (
    <aside className="sidebar">
      <div className="logo-area">
        <div className="logo-icon">
          📚
        </div>

        <div>
          <h2>Biblioteca</h2>
          <span>Conectada</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${
              currentPage === item.id ? 'active' : ''
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button
          className={`menu-item ${
            currentPage === 'configuracoes' ? 'active' : ''
          }`}
          onClick={() => onNavigate('configuracoes')}
        >
          <span className="menu-icon">⚙️</span>
          <span>Configurações</span>
        </button>

        <button
          className="menu-item logout"
          onClick={onLogout}
        >
          <span className="menu-icon">🚪</span>
          <span>Sair</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar