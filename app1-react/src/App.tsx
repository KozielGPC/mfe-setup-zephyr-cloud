import './index.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-lg text-center border-4 border-blue-400">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">app1-react</h1>
        <h2 className="text-xl font-semibold text-purple-600 mb-4">Micro-Frontend</h2>
        <div className="mb-6">
          <span className="inline-block bg-blue-200 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">React 18</span>
          <span className="inline-block bg-purple-200 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">TypeScript</span>
          <span className="inline-block bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">Tailwind CSS</span>
          <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">Webpack 5</span>
        </div>
        <p className="text-gray-600 mb-4">This is a micro-frontend built using React, styled with Tailwind CSS, and bundled with Webpack.</p>
      </div>
    </div>
  );
}

export default App;