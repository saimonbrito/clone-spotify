
//import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/header'
import { PaginaLateral } from './components/pagina-lateral'
import {Main} from './components/main'

function App() {
  

  return (
    <>
      <Header/>
      <div className='central-app'> 
        <PaginaLateral/>
        <Main/>
      </div>
      
    </>
  )
}

export default App
