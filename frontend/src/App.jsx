import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes/RoutesConfig';
// import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div id="app-container">
        <nav id="side-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tasks">Tasks</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>

        <div id="main-content">
          {/*<Header title="My To-Do List" />*/}
          <RoutesConfig />
        </div>
      </div>
    </Router>
  );
};

export default App;