import { useApp } from "../../context/AppContext";

const TransactionTable = () => {
  const { transactions, search, setSearch, role } = useApp();

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-white">
      <input
        placeholder="Search..."
        className="mb-4 p-2 bg-white/10 border border-white/20 rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full">
        <thead>
          <tr className="text-yellow-400">
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((t) => (
            <tr key={t.id} className="text-center">
              <td>{t.date}</td>
              <td>₹ {t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {role === "admin" && (
        <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded">
          Add Transaction
        </button>
      )}
    </div>
  );
};

export default TransactionTable;
