import './index.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Routers from './routes/routes';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-purple-100 flex flex-col">
      <Router>
        <nav className="bg-white/80 shadow-lg rounded-b-2xl px-8 py-4 flex items-center justify-between mb-8 border-b border-purple-200">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-extrabold text-purple-700 tracking-tight">Microfrontend Shell</span>
          </div>
          <ul className="flex gap-6 text-lg font-semibold">
            <li>
              <Link className="hover:text-purple-600 transition" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-blue-600 transition" to="/react">React App</Link>
            </li>
            <li>
              <Link className="hover:text-green-600 transition" to="/vue">Vue App</Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-3xl bg-white/90 rounded-2xl shadow-xl p-8 border border-purple-100">
            <Routers />
          </div>
        </main>
        <footer className="text-center text-xs text-gray-400 py-4 mt-8">
          Zephyr Cloud Microfrontend Demo &copy; 2025
        </footer>
      </Router>
    </div>
  );
};

export default App;