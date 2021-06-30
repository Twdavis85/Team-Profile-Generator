const { test, expect } = require("@jest/globals");
const Employee = require("../library/Employee");

test("Can make employee odject", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
});
test("set name", () => {
    const name = "Tyler"
    const e = new Employee(name);
    expect(e.name).toBe(name)
});
test("set id", () => {
    const id = 35
    const e = new Employee("foo", id);
    expect(e.id).toBe(id)
});
test("set email", () => {
    const email = "tyler@email.com"
    const e = new Employee("foo", 10, email);
    expect(e.email).toBe(email)
});
test("get name", () => {
    const name = "Tyler";
    const e = new Employee(name, 10, "email");
    expect(e.getName()).toBe(name)
});
test("get role", () => {
    const role = "Employee";
    const e = new Employee("foo", 10, "email");
    expect(e.getRole()).toBe(role)
});

