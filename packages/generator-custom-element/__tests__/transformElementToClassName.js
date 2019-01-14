const transformElementToClassName = require("../helpers/transformElementToClassName");

describe("generator-custom-element:transformElementToClassName", () => {
  test("my-element should be transform to MyElement", () => {
    const className = transformElementToClassName("my-element");
    expect(className).toEqual("MyElement");
  });

  test("select-box should be transform to SelectBox", () => {
    const className = transformElementToClassName("select-box");
    expect(className).toEqual("SelectBox");
  });

  test("element should be transform to Element", () => {
    const className = transformElementToClassName("element");
    expect(className).toEqual("Element");
  });
});
