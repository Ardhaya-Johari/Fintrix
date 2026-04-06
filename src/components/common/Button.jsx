const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-semibold transition 
      ${disabled 
        ? "bg-gray-500 cursor-not-allowed" 
        : "bg-yellow-400 text-black hover:scale-105"}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
