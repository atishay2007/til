const sampleExpenses = [
  { id: 1, title: "Coffee", category: "food", amount: 120 },
  { id: 2, title: "Metro card", category: "travel", amount: 300 },
  { id: 3, title: "Lunch", category: "food", amount: 240 },
  { id: 4, title: "Notebook", category: "study", amount: 150 },
];

function addExpense(expenses, newItem) {
  const nextId = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
  return [...expenses, { id: nextId, ...newItem }];
}

function filterByCategory(expenses, category) {
  return expenses.filter((item) => item.category === category);
}

function totalSpent(expenses) {
  return expenses.reduce((sum, { amount }) => sum + amount, 0);
}

function findExpenseById(expenses, id) {
  return expenses.find((item) => item.id === id) || null;
}

function formatLines(expenses) {
  return expenses.map(({ title, category, amount }) => `${title} (${category}): Rs. ${amount}`);
}

if (typeof module !== "undefined") {
  module.exports = {
    sampleExpenses,
    addExpense,
    filterByCategory,
    totalSpent,
    findExpenseById,
    formatLines,
  };
}
