import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useApp } from "../../context/AppContext";
import { getMonthlyData } from "../../utils/helpers";

const BalanceChart = () => {
  const { transactions } = useApp();
  const data = getMonthlyData(transactions);

  return (
    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
      <h3 className="text-yellow-400 mb-4">Balance Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#facc15" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;
