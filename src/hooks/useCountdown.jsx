import { useState } from "react";

const useCountdown = (date) =>{

    const countDate = new Date(date).getTime() //getTime() retorna a data em milessegundos
    const now = new Date().getTime(); // ao chamar new Date() sem passar nada coomo parametro , ela retorna a data de hoje!
    const interval = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hours = minute * 60;
    const day = hours * 24;

    return 1;

}

export default useCountdown;