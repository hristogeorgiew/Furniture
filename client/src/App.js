import { Switch, Route} from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import CreatePage from './components/Create/CreatePage';
import ProfilePage from './components/Profile/ProfilePage';
import DetailsPage from './components/Details/DetailsPage';
import LoginPage from './components/Auth/LoginPage';
import NotFound from './components/Common/NotFound';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';


function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/create' component={CreatePage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/details/:id' component={DetailsPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact  component={NotFound} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
