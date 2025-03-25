
import './App.css';
import NavAside from '../navAside/NavAside';
import Mainfeed from '../mainfeed/Mainfeed';
import Cursor from '../cursor/Cursor';
import Style from './app.module.css';
import experience from './experienceData';
import projectData from '../app/projectData';



function App() {
  return (
    <div className={Style.mainAppContainer} data-testid="app" >
      <Cursor />
      <NavAside />
      <Mainfeed experience={experience} projectData={projectData}/>
    </div>
  );
}

export default App;
