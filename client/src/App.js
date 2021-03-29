import { Switch, Route} from 'react-router-dom';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <div>
        <h1>start</h1>
        <Switch>
            <Route exact path='/' component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
