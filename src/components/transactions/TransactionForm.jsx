import { useState } from "react";
import { useApp } from "../../context/AppContext";
import Button from "../common/Button";

const TransactionForm = () => {
  const { transactions, setTransactions } = useApp();

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = () => {
    if (!form.date || !form.amount || !form.category) return;

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setTransactions([newTransaction, ...transactions]);

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <div className="bg-white/10 p-4 rounded-xl border border-white/20 space-y-3">
      <h3 className="text-yellow-400">Add Transaction</h3>

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="w-full p-2 bg-transparent border border-white/20 rounded"
      />

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="w-full p-2 bg-transparent border border-white/20 rounded"
      />

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="w-full p-2 bg-transparent border border-white/20 rounded"
      />

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="w-full p-2 bg-transparent border border-white/20 rounded"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <Button onClick={handleSubmit}>Add</Button>
    </div>
  );
};

export default TransactionForm;
