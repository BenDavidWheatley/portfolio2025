
import './App.css';
import NavAside from '../navAside/Navaside';
import Mainfeed from '../mainfeed/Mainfeed';
import Style from './app.module.css';

function App() {
  return (
    <div className={Style.mainAppContainer} data-testid="app" >
      <NavAside />
      <Mainfeed />
    </div>
  );
}

export default App;
