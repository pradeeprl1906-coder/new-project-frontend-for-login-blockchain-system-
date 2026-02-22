import { useState, useEffect } from "react";

function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        id: Date.now(),
        message: "New block verified ✔",
        time: new Date().toLocaleTimeString(),
      };
      setLogs((prev) => [newLog, ...prev.slice(0, 4)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 p-6 border-r border-green-500">
        <h2 className="text-2xl text-green-400 font-bold mb-8">
          🔐 SecureChain
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li className="hover:text-green-400 cursor-pointer">Dashboard</li>
          <li className="hover:text-green-400 cursor-pointer">Audit Logs</li>
          <li className="hover:text-green-400 cursor-pointer">Blockchain</li>
          <li className="hover:text-green-400 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold text-green-400 mb-8">
          🚀 Blockchain Security Dashboard
        </h1>

        {/* Status Card */}
        <div className="bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg mb-10 w-96">
          <h2 className="text-xl mb-4 text-green-300">System Status</h2>
          <p className="text-green-400">✔ Logs Immutable</p>
          <p className="text-green-400">✔ Blockchain Active</p>
          <p className="text-green-400">✔ Security Verified</p>
        </div>

        {/* Live Logs */}
        <div className="bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg">
          <h2 className="text-xl mb-4 text-green-300">Live Blockchain Logs</h2>

          <div className="space-y-3">
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex justify-between bg-black p-3 rounded border border-gray-700"
              >
                <span>{log.message}</span>
                <span className="text-gray-400 text-sm">{log.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;