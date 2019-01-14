"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-custom-element:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ elementName: "custom-element" });
  });

  it("custom element exist", () => {
    assert.file(["CustomElement.js"]);
  });

  it("assert a file content", () => {
    assert.fileContent("CustomElement.js", /CustomElement/);
    assert.fileContent("CustomElement.js", /custom-element/);
  });
});
