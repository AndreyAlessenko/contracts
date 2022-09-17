import './App.scss';
import Navigation from './Components/Navigation/Navigation'
import Workers from './Components/Workers/Workers'
import {useSelector} from 'react-redux'





function App() {

  const workers = useSelector(state  => state.workers.workers)

  return (
      <div className="App">
        <Navigation/>
        <Workers
          workers={workers}
        />
      </div>
  );
}

export default App;
