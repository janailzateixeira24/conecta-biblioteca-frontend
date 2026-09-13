import Card from '../components/Card'

function Dashboard() {
  const emprestimos = [
    {
      usuario: 'Lucas Mendes',
      livro: 'Dom Casmurro',
      data: '10/09/2026',
      devolucao: '17/09/2026',
      status: 'Ativo',
    },
    {
      usuario: 'João Silva',
      livro: 'O Cortiço',
      data: '09/09/2026',
      devolucao: '16/09/2026',
      status: 'Ativo',
    },
    {
      usuario: 'Ana Souza',
      livro: 'Iracema',
      data: '01/09/2026',
      devolucao: '08/09/2026',
      status: 'Atrasado',
    },
  ]

  return (
    <div>

      <div className="page-heading">
        <div>
          <h2>Visão geral</h2>
          <p>
            Acompanhe as principais informações da biblioteca.
          </p>
        </div>

        <button className="primary-button">
          + Novo empréstimo
        </button>
      </div>

      <div className="cards-grid">

        <Card
          title="Total de livros"
          value="1.250"
          description="Livros cadastrados"
          icon="📚"
        />

        <Card
          title="Empréstimos ativos"
          value="86"
          description="Em andamento"
          icon="📖"
        />

        <Card
          title="Usuários"
          value="342"
          description="Usuários cadastrados"
          icon="👥"
        />

        <Card
          title="Atrasados"
          value="12"
          description="Precisam de atenção"
          icon="⚠️"
        />

      </div>

      <div className="content-card">

        <div className="content-card-header">
          <div>
            <h3>Empréstimos recentes</h3>

            <p>
              Últimos empréstimos registrados no sistema.
            </p>
          </div>

          <button className="secondary-button">
            Ver todos
          </button>
        </div>

        <div className="table-container">
          <table>

            <thead>
              <tr>
                <th>Usuário</th>
                <th>Livro</th>
                <th>Data</th>
                <th>Devolução</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {emprestimos.map((item, index) => (
                <tr key={index}>
                  <td>{item.usuario}</td>
                  <td>{item.livro}</td>
                  <td>{item.data}</td>
                  <td>{item.devolucao}</td>

                  <td>
                    <span
                      className={`status ${
                        item.status === 'Atrasado'
                          ? 'status-late'
                          : 'status-active'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  )
}

export default Dashboard