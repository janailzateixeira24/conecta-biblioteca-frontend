import { useState } from 'react'

function Livros() {
  const [busca, setBusca] = useState('')

  const livros = [
    {
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      categoria: 'Romance',
      ano: '1899',
      exemplares: 5,
      disponivel: 3,
    },
    {
      titulo: 'O Cortiço',
      autor: 'Aluísio Azevedo',
      categoria: 'Romance',
      ano: '1890',
      exemplares: 4,
      disponivel: 2,
    },
    {
      titulo: 'Iracema',
      autor: 'José de Alencar',
      categoria: 'Literatura',
      ano: '1865',
      exemplares: 6,
      disponivel: 4,
    },
    {
      titulo: 'Vidas Secas',
      autor: 'Graciliano Ramos',
      categoria: 'Literatura',
      ano: '1938',
      exemplares: 3,
      disponivel: 1,
    },
  ]

  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo
      .toLowerCase()
      .includes(busca.toLowerCase())
  )

  return (
    <div>

      <div className="page-heading">
        <div>
          <h2>Acervo de livros</h2>
          <p>
            Consulte e gerencie os livros cadastrados.
          </p>
        </div>

        <button className="primary-button">
          + Cadastrar livro
        </button>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Pesquisar por título..."
          value={busca}
          onChange={(event) =>
            setBusca(event.target.value)
          }
        />
      </div>

      <div className="content-card">

        <div className="table-container">
          <table>

            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>Ano</th>
                <th>Exemplares</th>
                <th>Disponíveis</th>
              </tr>
            </thead>

            <tbody>
              {livrosFiltrados.map((livro, index) => (
                <tr key={index}>
                  <td>{livro.titulo}</td>
                  <td>{livro.autor}</td>
                  <td>{livro.categoria}</td>
                  <td>{livro.ano}</td>
                  <td>{livro.exemplares}</td>
                  <td>
                    <span className="status status-active">
                      {livro.disponivel}
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

export default Livros