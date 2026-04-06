import { useApp } from "../../context/AppContext";

const FilterBar = () => {
  const { search, setSearch } = useApp();

  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 rounded bg-white/10 border border-white/20 text-white"
      />
    </div>
  );
};

export default FilterBar;
