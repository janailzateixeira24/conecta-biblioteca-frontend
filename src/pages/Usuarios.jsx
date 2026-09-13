function Usuarios() {
  const usuarios = [
    {
      nome: 'Lucas Mendes',
      email: 'lucas@email.com',
      perfil: 'Leitor',
      status: 'Ativo',
    },
    {
      nome: 'Maria Clara',
      email: 'maria@email.com',
      perfil: 'Bibliotecário',
      status: 'Ativo',
    },
    {
      nome: 'Ana Souza',
      email: 'ana@email.com',
      perfil: 'Leitor',
      status: 'Ativo',
    },
    {
      nome: 'João Silva',
      email: 'joao@email.com',
      perfil: 'Leitor',
      status: 'Ativo',
    },
  ]

  return (
    <div>

      <div className="page-heading">
        <div>
          <h2>Usuários</h2>

          <p>
            Gerencie os usuários cadastrados.
          </p>
        </div>

        <button className="primary-button">
          + Cadastrar usuário
        </button>
      </div>

      <div className="content-card">

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Perfil</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>

                  <td>
                    {usuario.nome}
                  </td>

                  <td>
                    {usuario.email}
                  </td>

                  <td>
                    {usuario.perfil}
                  </td>

                  <td>
                    <span className="status status-active">
                      {usuario.status}
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

export default Usuarios