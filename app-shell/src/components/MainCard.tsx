export const MainCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-xl p-8 border border-purple-100 text-center">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-2">app-shell</h1>
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Micro-Frontend Shell</h2>
        <div className="mb-6">
        <span className="inline-block bg-blue-200 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">React 18</span>
        <span className="inline-block bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">TypeScript</span>
        <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">Tailwind CSS</span>
        <span className="inline-block bg-purple-200 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">Webpack 5</span>
        <span className="inline-block bg-gray-200 text-gray-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">Module Federation</span>
        </div>
        <p className="text-gray-600 mb-4">This is the shell micro-frontend, built with React, styled with Tailwind CSS, and orchestrating other microfrontends.</p>
    </div>
    </div>
  );
}