import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filter, altFilter } from "../fixtures/filters";

let sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filter}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByAmount={sortByAmount}
    />
  );
});

test("Should render ExpenseListFilters", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseListFilters with altFilters", () => {
  wrapper.setProps({ filters: altFilter });
  expect(wrapper).toMatchSnapshot();
});

test("Should handle text change", () => {
  const value = "b";
  wrapper.find("input").simulate("change", {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("Should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilter,
  });
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("Should sort by amount", () => {
  const value = "amount";
  wrapper.setProps({
    filters: altFilter,
  });
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("Should handle date changes", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("Should handle date focus change", () => {
  const calendarFocused = "endDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
