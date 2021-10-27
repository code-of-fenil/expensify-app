import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import { v4 as uuid } from "uuid";

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123",
  });
});

test("Should setup edit expesne action object.", () => {
  const action = editExpense("123b", {
    note: "fg",
    description: "sdfsdf",
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123b",
    updates: { note: "fg", description: "sdfsdf" },
  });
});

test("Should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "1",
    note: "2",
    amount: "3",
    createdAt: 0,
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("Should setup add expense object action without given parameters", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
