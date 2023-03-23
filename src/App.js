import './App.css';
import MemeGenerator from './components/MemeGenrator/MemeGenerator';
import MemeArray from './components/MemeGenrator/memeArray';

function App() {
  return (
    <div className="App">
      <MemeGenerator meme ={MemeArray}/>
    </div>
  );
}

export default App;
