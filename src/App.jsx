
import Festa from "./assets/festa.jpg";
import './App.css'
import { Outlet } from 'react-router-dom';
import { useContext } from "react";
import { CountdownContext } from "./context/CountdownContext";

function App() {
  const {event} = useContext(CountdownContext);

  let eventImage = null;

  if(event) eventImage = event.image;

  return (
    <div className="App" style={eventImage 
      ? ({background: `url(${eventImage})`})
      : ({background: `url(${Festa})`})}>
      <div className="container">
        
        <Outlet/>
      </div>
    </div>
  )
}

export default App
