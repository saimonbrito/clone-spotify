import api from './serverAPI'
import { useEffect, useState } from 'react'
import styles from './buscaAPI.module.css'
import { CardsMain } from '../../cards-main'
import img1 from '../../assets/playlist/1.jpeg'

type Pokemon = {
  genres: string
  name: string
  id: number
  urlImg: string
}
export function BuscaPokeapi() {
  const [data, setData] = useState<Pokemon[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/artists')
        if (response.status !== 200) {
          throw new Error('API não disponível')
        }
        const datas = response.data
        setData(datas)
      } catch (error) {
        console.error(
          'Erro ao buscar dados da API, usando dados locais::',
          error
        )
        return (
          <CardsMain
            title={'setembro sempre e setempo'}
            name={'set'}
            imegem={img1}
          />
        )
      }
    }
    fetchData().then(data => {
      console.log('Dados:', data)
    })
  }, [])

  return (
    <div className={styles.container}>
      {data.map(item => (
        <div key={item.id} className={styles.containerCard}>
          <h1>{item.name}</h1>
          <p>{item.genres}</p>
          <img src={item.urlImg} width={100} height={100} />
        </div>
      ))}
    </div>
  )
}
