import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expense";

test("Should set the dafalut state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove the expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[0].id,
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1], expenses[2]]);
});

test("Should not remove if id is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "4",
      description: "opp",
      notes: "",
      amount: 2000,
      createdAt: undefined,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("Should edit an expenses", () => {
  const amount = 13123123;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      amount,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state[2].amount).toEqual(amount);
});

test("Should not edit expense if and expense not found", () => {
  const amount = 234324;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
