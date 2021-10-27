const add = (a, b) => {
  return a + b;
};

const generateGreeting = (name = "Anounymous") => `Hi ${name}.`;

test("Should add two numbers.", () => {
  const result = add(7, 6);

  // if (result !== 12) {
  //   throw new Error(
  //     `You added 7 and 5. And you got the ${result}, expected 12.`
  //   );

  expect(result).toBe(13);
});

test("Should greet Mike.", () => {
  const result = generateGreeting("Mike");
  expect(result).toBe("Hi Mike.");
});

test("should greet with no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hi Anounymous.");
});
