const Card = ({ children }) => {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-4 shadow-lg hover:scale-105 transition">
      {children}
    </div>
  );
};

export default Card;
