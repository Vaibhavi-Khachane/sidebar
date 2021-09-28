// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Dashboard from './components/pages/dashboard';
import Overview from './components/pages/overview';
import Tickets from './components/pages/tickets';
import Ideas from './components/pages/ideas';
import Contacts from './components/pages/contacts';
import Agent from './components/pages/agent';
import Articals from './components/pages/articals';
import Subscription from './components/pages/subscription';
import Settings from './components/pages/settings';
import Logout from './components/pages/logout';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Route path='/'component={Sidebar}/>
     <Route path='/dashboard' component={Dashboard}/>
     <Route path='/overview' component={Overview}/>
     <Route path='/tickets' component={Tickets}/>
     <Route path='/ideas' component={Ideas}/>
     <Route path='/contacts' component={Contacts}/>
     <Route path='/agent' component={Agent}/>
     <Route path='/articals' component={Articals}/>
     <Route path='/subscription' component={Subscription}/>
     <Route path='/settings' component={Settings}/>
     <Route path='/logout' component={Logout}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
