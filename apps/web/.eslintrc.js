module.exports = {
  extends: ["@burger/eslint-config/next.js"],
  rules:{
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": "warn"
  }
};