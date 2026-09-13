function Devolucoes() {
  return (
    <div>

      <div className="page-heading">
        <div>
          <h2>Devoluções</h2>
          <p>
            Registre e acompanhe as devoluções dos livros.
          </p>
        </div>
      </div>

      <div className="content-card empty-state">
        <div className="empty-icon">
          📚
        </div>

        <h3>Nenhuma devolução registrada</h3>

        <p>
          As devoluções realizadas aparecerão nesta tela.
        </p>

        <button className="primary-button">
          Registrar devolução
        </button>
      </div>

    </div>
  )
}

export default Devolucoes