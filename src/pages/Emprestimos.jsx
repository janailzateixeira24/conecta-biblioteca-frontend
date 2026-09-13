function Emprestimos() {
  const dados = [
    ['Lucas Mendes', 'Dom Casmurro', '10/09/2026', '17/09/2026', 'Ativo'],
    ['João Silva', 'O Cortiço', '09/09/2026', '16/09/2026', 'Ativo'],
    ['Ana Souza', 'Iracema', '01/09/2026', '08/09/2026', 'Atrasado'],
    ['Pedro Lima', 'Vidas Secas', '05/09/2026', '12/09/2026', 'Ativo'],
  ]

  return (
    <div>

      <div className="page-heading">
        <div>
          <h2>Empréstimos</h2>
          <p>
            Controle os empréstimos realizados.
          </p>
        </div>

        <button className="primary-button">
          + Novo empréstimo
        </button>
      </div>

      <div className="content-card">

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
              {dados.map((item, index) => (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>

                  <td>
                    <span
                      className={`status ${
                        item[4] === 'Atrasado'
                          ? 'status-late'
                          : 'status-active'
                      }`}
                    >
                      {item[4]}
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

export default Emprestimos