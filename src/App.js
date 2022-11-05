import './App.scss';
import Navigation from './Components/Navigation/Navigation'
import Workers from './Components/Workers/Workers'
import Contracts from './Components/Contracts/Contracts'
import {useSelector} from 'react-redux'
import { Routes, Route } from 'react-router-dom'




function App() {

  const workers = useSelector(state  => state.workers.workers)

  return (
      <div className="App">
        <Navigation/>

        <Routes>
          <Route path={'/workers'} element={<Workers workers={workers}/>}/>
          <Route path={'/contracts'} element={<Contracts />}/>
          <Route path={'/*'} element={<Workers workers={workers}/>}/>
        </Routes>
      </div>
  );
}

export default App;
