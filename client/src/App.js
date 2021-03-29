import { Switch, Route} from 'react-router-dom';
import CreatePage from './components/Create/CreatePage';
import ProfilePage from './components/Profile/ProfilePage';
import DetailsPage from './components/Details/DetailsPage';
import LoginPage from './components/Auth/LoginPage';


function App() {
  return (
    <div>
        <h1>start</h1>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/create' component={CreatePage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/details/:id' component={DetailsPage} />
            <Route exact path='/login' component={LoginPage} />
        </Switch>
    </div>
  );
}

export default App;
