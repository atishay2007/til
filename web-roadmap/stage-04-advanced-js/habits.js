const habits = [
  { name: "LeetCode", streak: 5, completedToday: true },
  { name: "Web Roadmap", streak: 4, completedToday: true },
  { name: "Reading", streak: 2, completedToday: false },
];

function markDone(list, habitName) {
  return list.map((habit) =>
    habit.name === habitName && !habit.completedToday
      ? { ...habit, streak: habit.streak + 1, completedToday: true }
      : habit
  );
}

function pendingHabits(list) {
  return list.filter(({ completedToday }) => !completedToday);
}

function summaryText(list) {
  const doneCount = list.reduce((acc, { completedToday }) => acc + (completedToday ? 1 : 0), 0);
  return `${doneCount}/${list.length} habits completed today`;
}

if (typeof module !== "undefined") {
  module.exports = { habits, markDone, pendingHabits, summaryText };
}
