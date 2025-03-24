
import './App.css';
import NavAside from '../navAside/Navaside';
import Mainfeed from '../mainfeed/Mainfeed';
import Cursor from '../cursor/Cursor';
import Style from './app.module.css';


function App() {
  return (
    <div className={Style.mainAppContainer} data-testid="app" >
      <Cursor />
      <NavAside />
      <Mainfeed />
    </div>
  );
}

export default App;
