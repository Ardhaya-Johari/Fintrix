export const getTotal = (transactions, type) => {
  return transactions
    .filter(t => t.type === type)
    .reduce((sum, t) => sum + t.amount, 0);
};

export const getBalance = (transactions) => {
  const income = getTotal(transactions, "income");
  const expense = getTotal(transactions, "expense");
  return income - expense;
};

export const getCategoryData = (transactions) => {
  const map = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(map).map(key => ({
    name: key,
    value: map[key],
  }));
};

export const getMonthlyData = (transactions) => {
  const map = {};

  transactions.forEach(t => {
    const month = t.date.slice(0, 7);

    map[month] = (map[month] || 0) + (t.type === "income" ? t.amount : -t.amount);
  });

  return Object.keys(map).map(key => ({
    month: key,
    balance: map[key],
  }));
};
