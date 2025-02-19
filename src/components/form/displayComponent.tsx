// src/DisplayComponent.js

import { useSearch } from './busca-api'

const DisplayComponent = () => {
  const { items, error, searchTerm }: any = useSearch()

  return (
    <div>
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      <h2>Itens Encontrados:</h2>
      <ul>
        {items}
        {searchTerm}
      </ul>
    </div>
  )
}

export default DisplayComponent
