module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["src"],
  testPathIgnorePatterns: [`__tests__/fixtures`, ".util.ts"],
};
