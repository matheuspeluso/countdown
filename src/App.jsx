
import Festa from "./assets/festa.jpg";
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App" style={{background: `url(${Festa})`}}>
      <div className="container">
        
        <Outlet/>
      </div>
    </div>
  )
}

export default App
