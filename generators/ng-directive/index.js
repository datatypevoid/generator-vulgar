'use strict';
var yeoman = require('yeoman-generator'),
     chalk = require('chalk'),
     yosay = require('yosay'),
         _ = require('lodash'),
         s = require('underscore.string'),
        fs = require('fs'),
    prompt = require('../../lib/option-or-prompt.js');

var modulesSource = 'src/';

module.exports = yeoman.generators.Base.extend({

  _prompt: prompt,

  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.Base.apply(this, arguments);

    // This method adds support for a `--vulgarcli` flag
    this.option('vulgarcli', { type: Boolean, defaults: false, hide: true });

    // This method adds support for a `--dest` flag
    // This allows a destination to be passed in at the command line
    // Note that this path will be the final path FROM the root of the
    // project where the cli should be run
    this.option('dest', { type: String });

    // This method adds support for a `--module` flag
    // This allows the module name to be passed in from the command line
    this.option('module', { type: String });

    // This method adds support for a `--name` flag
    // This allows the name of the routable Angular component(s) to be
    // passed in at the command line
    this.option('name', { type: String });
  },

  askForModuleDirectory: function (cb) {

    var done = cb || this.async();

    var prompts = [{
      type: 'list',
      name: 'module',
      message: 'Where would you like to create this directive?',
      // Define some default choices
      choices: [{
        value: '../',
        name: '../'
      },
      {
        value: '',
        name: 'Select this directory'
      }]
    }];

    // Add module choices
    if (fs.existsSync(modulesSource)) {

      fs.readdirSync(modulesSource).forEach(function (folder) {
        var stat = fs.statSync(modulesSource + '/' + folder);

        if (stat.isDirectory()
              // Exclude the `assets` and `sass` directories
              && folder !== 'assets'
              && folder !== 'sass') {

          prompts[0].choices.push({
            value: folder,
            name: folder
          });
        }
      });
    }

    // Use custom prompt function which skips the prompt if
    // an option has been passed in
    this._prompt(prompts, function(props) {
      // this.props = props;
      // To access props later use this.props.someOption;

      modulesSource = modulesSource + '/' + props.module;

      // Continue to queue the user for a location
      // until no value is returned, which equates
      // to the `Select this directory` choice
      if(props.module) {
        this.askForModuleDirectory(done);
      } else {
        done();
      }
    }.bind(this));
  },

  askForModuleName: function () {

    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What would you like to name this directive?',
      default: 'ng-directive'
    }];

    // Use custom prompt function which skips the prompt if
    // an option has been passed in
    this._prompt(prompts, function(props) {
      this.props = props;
      // To access props later use this.props.someOption;

      this.name = this.props.name || 'ng-directive';

      this.slugifiedName = s(this.name).humanize().slugify().value();
      this.classifiedName = s(this.slugifiedName).classify().value();
      this.humanizedName = s(this.slugifiedName).humanize().value();
      this.camelizedName = s(this.slugifiedName).camelize().value();
      this.decapitalizedName = s(this.name).humanize().decapitalize().value();

      if (this.options.dest) {

        this.destination = this.options.dest;
      } else {

        this.destination = modulesSource + '/' + this.slugifiedName + '/';
      }

      done();
    }.bind(this));
  },

  writing: function () {

    //** Generate `Angular` directive
    this.fs.copyTpl(
      this.templatePath('_.directive.ts'),
      this.destinationPath(this.destination + this.slugifiedName + '.directive.ts'), {

        classifiedName: this.classifiedName,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName
      }
    );

    //** Generate `Angular` directive unit test
    this.fs.copyTpl(
      this.templatePath('_.directive.spec.ts'),
      this.destinationPath(this.destination + this.slugifiedName + '.directive.spec.ts'), {

        classifiedName: this.classifiedName,
        slugifiedName: this.slugifiedName
      }
    );
  },

  end: function() {

    if(!this.options.vulgarcli) {
      // Terminate process if run from console
      process.exit(0);
    } else if(this.options.vulgarcli === true) {
      // `return 0` to let `vulgar-cli` know everything went okay on our end
      return 0;
    }
  }
});
