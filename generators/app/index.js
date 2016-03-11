'use strict';
//# Import required dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  //# Load configurations here

  //** Prompt user for input
  prompting: function() {

    // Use the async method to make sure the function
    // does not exit early
    var done = this.async();

    this.prompt({

      type: 'input',
      name: 'name',
      message: 'Your project name',
      // Defaults to the project's folder name if the
      // input is skipped
      default: this.appname

      // Callback which holds the values from the prompt(s)
      // `this.props` contains the answers
    }, function(answers) {
      this.props = answers;
      this.log(answers.name);
      done();
    }.bind(this));
  },

  //** Writing logic here
  writing: {
    //** Copy the configuration files
    //   This include files like `package.json` and other
    //   utility files for our project
    config: function() {

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
      );

      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );

      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );

      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );

      this.fs.copy(
        this.templatePath('_tsconfig.json'),
        this.destinationPath('tsconfig.json')
      );

      this.fs.copy(
        this.templatePath('_tslint.json'),
        this.destinationPath('tslint.json')
      );

      this.fs.copy(
        this.templatePath('_typedoc.json'),
        this.destinationPath('typedoc.json')
      );

      this.fs.copy(
        this.templatePath('_typings.json'),
        this.destinationPath('typings.json')
      );

      this.fs.copy(
        this.templatePath('_config/_config.json'),
        this.destinationPath('config/config.json')
      );
    }

    //** Copy application files
    //   This includes files such as `server.js`, our routes,
    //   `dist` directory and all other major files

    //** Install dependencies
  }

});
