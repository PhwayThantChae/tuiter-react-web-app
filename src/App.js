import Labs from './labs';
import HelloWorld from './labs/a3/hello-world';
import Tuiter from './tuiter';
import './App.css';

function App() {
  return (
    <div className="container">
      <HelloWorld/>
      <Labs/>
      <Tuiter/>
    </div>
  );
}

export default App;
