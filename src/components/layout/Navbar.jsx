import { useApp } from "../../context/AppContext";

const Navbar = () => {
  const { role, setRole } = useApp();

  return (
    <div className="flex justify-between items-center text-white">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default Navbar;
