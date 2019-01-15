"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const transformElementToClassName = require("../../helpers/transformElementToClassName");

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option("babel"); // This method adds support for a `--babel` flag
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the laudable ${chalk.red(
          "generator-custom-element"
        )} generator!`
      )
    );

    const prompts = yoPrompts();

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const elementName = this.props.elementName;
    const className = transformElementToClassName(elementName);
    const hasKarmaUnitTest = this.props.hasKarmaUnitTest;

    this.fs.copyTpl(
      this.templatePath("_element"),
      this.destinationPath(`${className}.js`),
      {
        elementName: elementName,
        className: className
      }
    );

    if (hasKarmaUnitTest) {
      this.fs.copyTpl(
        this.templatePath("_unittest"),
        this.destinationPath(`${className}.unittest.js`),
        {
          elementName: elementName,
          className: className
        }
      );
    }
  }
};

function yoPrompts() {
  return [
    {
      type: "input",
      name: "elementName",
      message: "What would you like your root element to be called?",
      default: "my-element"
    },
    {
      type: "list",
      name: "hasKarmaUnitTest",
      message: "Do you want karma and mocha test suite to be created?",
      choices: [
        {
          name: "No",
          value: false,
          checked: true
        },
        {
          name: "Yes",
          value: true,
          checked: false
        }
      ],
      default: false
    }
  ];
}
