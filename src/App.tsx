
//import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/header'
import { PaginaLateral } from './components/pagina-lateral'
import {Main} from './components/main'

function App() {
  

  return (
    <div className='container'>
      <Header/>
      <div className='central-app'> 
        <PaginaLateral/>
        <Main/>
      </div>
      
    </div>
  )
}

export default App
