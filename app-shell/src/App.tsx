import { Link, BrowserRouter as Router } from 'react-router-dom';
import Routers from './routes/routes';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react">React App</Link>
          </li>
          <li>
            <Link to="/vue">Vue App</Link>
          </li>
        </ul>
      </nav>
      <Routers />
    </Router>
  );
};

export default App;