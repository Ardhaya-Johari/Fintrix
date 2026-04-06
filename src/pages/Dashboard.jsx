import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import SummaryCard from "../components/dashboard/SummaryCard";
import Insights from "../components/dashboard/Insights";
import TransactionTable from "../components/transactions/TransactionTable";
import BalanceChart from "../components/dashboard/BalanceChart";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import TransactionForm from "../components/transactions/TransactionForm";
import FilterBar from "../components/transactions/FilterBar";
import { useApp } from "../context/AppContext";

const Dashboard = () => {
  const { transactions } = useApp();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="flex min-h-screen text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">

        {/* Navbar */}
        <Navbar />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SummaryCard title="Balance" value={balance} color="text-yellow-400" />
          <SummaryCard title="Income" value={income} color="text-green-400" />
          <SummaryCard title="Expense" value={expense} color="text-red-400" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BalanceChart />
          <ExpenseChart />
        </div>

        {/* Insights */}
        <Insights />

        {/* Filters */}
        <FilterBar />

        {/* Transaction Table */}
        <TransactionTable />

        {/* Add Transaction Form (only admin sees meaningful use) */}
        <TransactionForm />

      </div>
    </div>
  );
};

export default Dashboard;
