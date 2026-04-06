import Card from "../common/Card";
import { useApp } from "../../context/AppContext";

const Insights = () => {
  const { transactions } = useApp();

  const expenses = transactions.filter(t => t.type === "expense");
  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <p>Total Expenses</p>
        <h2 className="text-yellow-400 text-xl">₹ {totalExpense}</h2>
      </Card>

      <Card>
        <p>Transactions</p>
        <h2 className="text-yellow-400 text-xl">{transactions.length}</h2>
      </Card>

      <Card>
        <p>Top Category</p>
        <h2 className="text-yellow-400 text-xl">Food</h2>
      </Card>
    </div>
  );
};

export default Insights;
