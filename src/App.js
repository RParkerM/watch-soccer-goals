import {Routes , Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import WatchPage from './components/WatchPage';

function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Watch' element={<WatchPage/>} />
      </Routes>
    </div>
  );
}

export default App;
