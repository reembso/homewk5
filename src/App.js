import "./App.css";
import NewExpense from "../src/components/Expenses/Expenses"
import Expenses from "../src/components/Expenses/Expenses";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Туалетная бумага",
      price: 300,
      date: new Date(),
    },
    {
      title: "Зарядка",
      price: 400,
      date: new Date(),
    },
  ]);

  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };
  return (
    <div className="App">
      <NewExpense onNewExpenseadd={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
