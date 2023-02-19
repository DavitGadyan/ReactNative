import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpenseOutput
      expenses={recentExpenses}
      expensesPeriod="Recent 7 days"
      fallBackText="No expenses registered for the last 7 days!!"
    />
  );
}

export default RecentExpenses;
