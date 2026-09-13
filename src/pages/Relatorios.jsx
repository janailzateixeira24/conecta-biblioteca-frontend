function Relatorios() {
  const relatorios = [
    {
      icon: '📊',
      titulo: 'Movimentação',
      descricao: 'Consulte empréstimos e devoluções por período.',
    },
    {
      icon: '📚',
      titulo: 'Livros mais solicitados',
      descricao: 'Identifique os livros mais emprestados.',
    },
    {
      icon: '👥',
      titulo: 'Histórico de usuários',
      descricao: 'Consulte o histórico de empréstimos dos usuários.',
    },
  ]

  return (
    <div>

      <div className="page-heading">
        <div>
          <h2>Relatórios</h2>
          <p>
            Gere relatórios para acompanhar a biblioteca.
          </p>
        </div>

        <button className="primary-button">
          Gerar relatório
        </button>
      </div>

      <div className="reports-grid">

        {relatorios.map((relatorio, index) => (
          <div className="report-card" key={index}>

            <div className="report-icon">
              {relatorio.icon}
            </div>

            <h3>{relatorio.titulo}</h3>

            <p>
              {relatorio.descricao}
            </p>

            <button className="secondary-button">
              Acessar relatório
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Relatorios