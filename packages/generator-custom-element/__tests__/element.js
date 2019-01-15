"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-custom-element: Creating an element", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ elementName: "custom-element" });
  });

  it("custom element exist", () => {
    assert.file(["CustomElement.js"]);
  });

  it("CustomElement and custom-element be part of file content", () => {
    assert.fileContent(
      "CustomElement.js",
      /export class CustomElement extends HTMLElement/
    );
    assert.fileContent(
      "CustomElement.js",
      /customElements.define\('custom-element', CustomElement/
    );
  });
});
