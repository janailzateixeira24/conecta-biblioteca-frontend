function Configuracoes() {
  return (
    <div>

      <div className="page-heading">
        <div>
          <h2>Configurações</h2>
          <p>
            Configure as informações do sistema.
          </p>
        </div>
      </div>

      <div className="content-card settings-card">

        <div className="setting-item">
          <div>
            <h3>Nome da biblioteca</h3>
            <p>Biblioteca Municipal de São Miguel da Baixa Grande</p>
          </div>

          <button className="secondary-button">
            Editar
          </button>
        </div>

        <div className="setting-item">
          <div>
            <h3>Prazo de empréstimo</h3>
            <p>7 dias</p>
          </div>

          <button className="secondary-button">
            Editar
          </button>
        </div>

        <div className="setting-item">
          <div>
            <h3>Notificações</h3>
            <p>Notificações de empréstimos e devoluções</p>
          </div>

          <button className="secondary-button">
            Configurar
          </button>
        </div>

      </div>

    </div>
  )
}

export default Configuracoes