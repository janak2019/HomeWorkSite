// Layout.jsx
export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-48 bg-gray-800 flex flex-col p-4">
        <h1 className="text-2xl font-bold text-blue-400 mb-6">VMS System</h1>
        <nav className="flex flex-col p-4 space-y-4">
          <a href="/live" className="hover:text-blue-400">Live View</a>
          <a href="/playback" className="hover:text-blue-400">Playback</a>
          <a href="/cameras" className="hover:text-blue-400">Cameras</a>
          <a href="/settings" className="hover:text-blue-400">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Live View</h2>
          <div className="flex items-center gap-4">
            <button className="text-sm bg-blue-500 px-3 py-1 rounded">+ Add Camera</button>
            <img src="/user.png" alt="User" className="w-8 h-8 rounded-full" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
