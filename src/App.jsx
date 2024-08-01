
import useCountdown from './hooks/useCountdown';

import Title from './components/Title/Title'
import Counter from './components/Counter/Counter'

import Festa from "./assets/festa.jpg";
import './App.css'

function App() {

  const [day,hour,minute,second] = useCountdown("Aug 24, 2024 09:00:00");

  return (
    <div className="App" style={{background: `url(${Festa})`}}>
      <div className="container">
        <Title title="Contagem regressiva para meu curso de Java fullstack começar!"/>
        <div className="countdown-container">

          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>

        </div>
      </div>
    </div>
  )
}

export default App
