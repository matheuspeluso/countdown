import Title from "../../components/Title/Title";
import Counter from "../../components/Counter/Counter";

import useCountdown from '../../hooks/useCountdown';

const Countdown = () => {
    const [day,hour,minute,second] = useCountdown("Aug 24, 2024 09:00:00");
  return (
    <>
      <Title title="Contagem regressiva para meu curso de Java fullstack começar!"/>
        <div className="countdown-container">

          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>

        </div>
    </>
  )
}

export default Countdown
