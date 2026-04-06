import Card from "../common/Card";

const SummaryCard = ({ title, value, color }) => {
  return (
    <Card>
      <h3 className="text-gray-300">{title}</h3>
      <p className={`text-2xl font-bold ${color}`}>₹ {value}</p>
    </Card>
  );
};

export default SummaryCard;
