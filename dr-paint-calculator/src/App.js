import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';
import WallsProvider from './context/WallsProvider';

function App() {
  return (
    <div className="App">
      <WallsProvider>
        <Home />
      </WallsProvider>
    </div>
  );
}

export default App;
