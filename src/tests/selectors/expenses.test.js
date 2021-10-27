import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expense";

test("Should generate action object for text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };

  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([expenses[2], expenses[1]]);
});

test("Should generate action object by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };

  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([expenses[2], expenses[0]]);
});

test("Should filter by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days"),
  };

  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([expenses[0], expenses[1]]);
});

test("Should filter by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };

  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("Should filter by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };

  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([expenses[1], expenses[0], expenses[2]]);
});
