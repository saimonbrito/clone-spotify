// src/SearchContext.js
import { createContext, useContext, useState, useEffect } from 'react'
interface SearchContextType {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  items: any[] // Você pode substituí-lo por um tipo mais específico se conhecer a estrutura
  error: string | null
}
const SearchContext = createContext<SearchContextType | null>(null)

export const useSearch = () => {
  return useContext(SearchContext)
}

export const SearchProvider = ({ children }: any) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      if (searchTerm.trim() === '') {
        setItems([])
        setError(null)
        return
      }

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`)
        }

        const data = await response.json()
        setItems(data)
        setError(null)
      } catch (err) {
        setError(error)
      }
    }

    const delayDebounceFn = setTimeout(() => {
      fetchItems()
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  const values = {
    searchTerm,
    setSearchTerm,
    items,
    error,
  }

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  )
}
