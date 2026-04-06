import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useApp } from "../../context/AppContext";
import { getCategoryData } from "../../utils/helpers";

const COLORS = ["#facc15", "#22c55e", "#ef4444", "#3b82f6", "#a855f7"];

const ExpenseChart = () => {
  const { transactions } = useApp();
  const data = getCategoryData(transactions);

  return (
    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
      <h3 className="text-yellow-400 mb-4">Expense Breakdown</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
