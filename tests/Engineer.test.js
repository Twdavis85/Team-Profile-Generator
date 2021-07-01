const { test, expect } = require("@jest/globals");
const Engineer = require("../library/Engineer");

test("Can make Engineer odject", () => {
  const e = new Engineer();
  expect(typeof e).toBe("object");
});
test("set GitHub", () => {
  const gitHub = "Twdavis85";
  const e = new Engineer("foo", 10, "email", gitHub);
  expect(e.gitHub).toBe(gitHub);
});
test("get role", () => {
  const role = "Engineer";
  const e = new Engineer("foo", 10, "email", "GitHub");
  expect(e.getRole()).toBe(role);
});
test("get GitHub", () => {
  const gitHub = "Twdavis85";
  const e = new Engineer("foo", 10, "email", gitHub);
  expect(e.getGitHub()).toBe(gitHub);
});
