import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/ExpenseDashboardPage";

test("Should render NotFoundPage.", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
