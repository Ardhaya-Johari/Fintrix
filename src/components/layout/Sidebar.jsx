const Sidebar = () => {
  return (
    <div className="w-64 p-5 border-r border-white/10 bg-white/5 backdrop-blur-lg text-white">
      <h1 className="text-2xl font-bold text-yellow-400 mb-8">FinTrack</h1>

      <ul className="space-y-4">
        <li className="hover:text-yellow-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-yellow-400 cursor-pointer">Transactions</li>
        <li className="hover:text-yellow-400 cursor-pointer">Insights</li>
      </ul>
    </div>
  );
};

export default Sidebar;
