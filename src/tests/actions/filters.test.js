import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";
import moment from "moment";

test("Should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("Should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("Should generate set text filter action object with text parameter", () => {
  const action = setTextFilter("ghj");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "ghj",
  });
});

test("Should generate set text filter action object with out text parameter", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Anounymous",
  });
});

test("Should generate sort by amount action object", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("Should generate sort by date action object", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  });
});
