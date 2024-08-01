import { useState } from "react";

const useCountdown = (date) =>{

    const [day,setDay] = useState()
    const [hour,setHour] = useState()
    const [minute,setMinute] = useState()
    const [second,setSecond] = useState()


    const countdown = () =>{
        const countDate = new Date(date).getTime() //getTime() retorna a data em milessegundos
        const now = new Date().getTime(); // ao chamar new Date() sem passar nada coomo parametro , ela retorna a data de hoje!
        const interval = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hours = minute * 60;
        const day = hours * 24;

        const dayNumber = Math.floor(interval/ day);
        const hoursNumber = Math.floor((interval % day)/ hours);
        const minuteNumber = Math.floor((interval % hours)/ minute);
        const secondNumber = Math.floor((interval % minute)/ second);

        setDay(dayNumber);
        setHour(hoursNumber)
        setMinute(minuteNumber)
        setSecond(secondNumber)
    };

    setInterval(countdown, 1000); // dados serão atualizados a cada 1 segundo
    

    return [day,hour,minute,second];

}

export default useCountdown;