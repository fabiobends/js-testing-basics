const functions = require("../utils/functions");

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");
const nameCheck = () => console.log("Checking name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());
  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });
  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("Should be an object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Fábio",
    lastName: "Mendes",
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

test("User fetched name should be Leanne Graham", async () => {
  // expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
