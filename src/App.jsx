

import Title from './components/Title/Title'
import Counter from './components/Counter/Counter'

import Festa from "./assets/festa.jpg";
import './App.css'

function App() {

  return (
    <div className="App" style={{background: `url(${Festa})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2025"/>
        <div className="countdown-container">

          <Counter title="Dias" number={2}/>
          <Counter title="Horas" number={3}/>
          <Counter title="Minutos" number={4}/>
          <Counter title="Segundos" number={5}/>

        </div>
      </div>
    </div>
  )
}

export default App
