"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

// Negative
describe("generator-custom-element: Unit test should be not exist", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ elementName: "custom-element" });
  });

  it("custom element should exist and unit test should be not created", () => {
    assert.file(["CustomElement.js"]);
    assert.noFile(["CustomElement.unittest.js"]);
  });
});

// Positive
describe("generator-custom-element: Unit test should exist", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ elementName: "custom-element" })
      .withPrompts({ hasKarmaUnitTest: true });
  });

  it("custom element and unit test should exist", () => {
    assert.file(["CustomElement.js"]);
    assert.file(["CustomElement.unittest.js"]);
  });

  it("CustomElement and custom-element be part of file content", () => {
    assert.fileContent(
      "CustomElement.unittest.js",
      /custom-element instanceof CustomElement/
    );
    assert.fileContent(
      "CustomElement.unittest.js",
      /custom-element should be define/
    );
  });
});
