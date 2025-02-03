
//import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/header'
import { Sidebar } from './components/sidebar'
import {Main} from './components/main'

function App() {
  

  return (
    <div className='container'>
      <Header/>
      <div className='central-app'> 
        <Sidebar/>
        <Main/>
      </div>
      
    </div>
  )
}

export default App
