import moment from "moment";
export default [
  {
    id: "1",
    description: "gum",
    notes: "ghj",
    amount: 12300,
    createdAt: 0,
  },
  {
    id: "2",
    description: "credit card",
    notes: "wsd",
    amount: 12400,
    createdAt: moment(0).subtract(4, "day").valueOf(),
  },
  {
    id: "3",
    description: "rent",
    notes: "rty",
    amount: 12200,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
