'use strict';
var yeoman = require('yeoman-generator'),
     chalk = require('chalk'),
     yosay = require('yosay'),
         _ = require('lodash'),
         s = require('underscore.string'),
        fs = require('fs'),
    prompt = require('../../lib/option-or-prompt.js');

// TODO: Refactor to remove prompt logic since the cli handles it
//       now that generation code has been merged with the cli
module.exports = yeoman.Base.extend({

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

    // This method adds support for a `--path` flag
    // This allows a url to be passed in at which the children
    // components of the routable Angular component can be reached
    this.option('path', { type: String });
  },

  askForModuleName: function () {

    var done = this.async();

    var modulesSource = 'src/';

    var prompts = [{
      type: 'list',
      name: 'module',
      default: 'app',
      message: 'Which module does this route belongs to?',
      choices: []
    },{
      type: 'input',
      name: 'name',
      message: 'What would you like to name this component?',
      default: ''
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
      this.props = props;
      // To access props later use this.props.someOption;

      this.moduleName = this.props.module;
      this.name = this.props.name || 'routable';

      this.slugifiedName = s(this.name).humanize().slugify().value();
      this.classifiedName = s(this.slugifiedName).classify().value();
      this.humanizedName = s(this.slugifiedName).humanize().value();
      this.camelizedName = s(this.slugifiedName).camelize().value();
      this.decapitalizedName = s(this.name).humanize().decapitalize().value();

      if (this.options.dest) {

        this.destination = this.options.dest;
      } else {

        this.destination = modulesSource + this.moduleName + '/' + this.slugifiedName + '/';
      }

      done();
    }.bind(this));
  },

  askForRouteDetails: function() {

    var done = this.async();

    this._prompt([{
      type: 'input',
      name: 'path',
      message: 'What would you like the route path to be?',
      default: this.slugifiedName
    }], function(props) {

        this.props = props;
        // To access props later use this.props.someOption;

        this.path = this.props.path;

        this.slugifiedRoutePath = s(this.path).slugify().value();
        done();
    }.bind(this));
  },

  writing: function () {

    // For dummy test
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );

    //** Generate `root` component
    this.fs.copyTpl(
      this.templatePath('components/_-root.component.ts'),
      this.destinationPath(this.destination + this.slugifiedName + '-root.component.ts'), {

        classifiedName: this.classifiedName,
        routePath: this.path,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName
      }
    );

    //** Generate `list` component
    this.fs.copyTpl(
      this.templatePath('components/list/_-list.component.ts'),
      this.destinationPath(this.destination + this.slugifiedName + '-list.component.ts'), {

        classifiedName: this.classifiedName,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName,
        camelizedName: this.camelizedName
      }
    );

    //** Generate `list` unit test
    this.fs.copyTpl(
      this.templatePath('components/list/_-list.component.spec.ts'),
      this.destinationPath(this.destination + this.slugifiedName + '-list.component.spec.ts'), {

        classifiedName: this.classifiedName,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName
      }
    );

    //** Generate `list` template
    this.fs.copyTpl(
      this.templatePath('components/list/_-list.component.html'),
      this.destinationPath(this.destination + this.slugifiedName + '-list.component.html'), {

        classifiedName: this.classifiedName,
        camelizedName: this.camelizedName
      }
    );

    //** Generate `list` styles
    this.fs.copy(
      this.templatePath('components/list/_-list.component.scss'),
      this.destinationPath(this.destination + this.slugifiedName + '-list.component.scss')
    );

    //** Generate `detail` component
    this.fs.copyTpl(
      this.templatePath('components/detail/_-detail.component.ts'),
      this.destinationPath(this.destination + this.slugifiedName + '-detail.component.ts'), {

        classifiedName: this.classifiedName,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName,
        camelizedName: this.camelizedName
      }
    );

    //** Generate `detail` unit test
    this.fs.copyTpl(
      this.templatePath('components/detail/_-detail.component.spec.ts'),
      this.destinationPath(this.destination + this.slugifiedName + '-detail.component.spec.ts'), {

        classifiedName: this.classifiedName,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName
      }
    );

    //** Generate `detail` template
    this.fs.copyTpl(
      this.templatePath('components/detail/_-detail.component.html'),
      this.destinationPath(this.destination + this.slugifiedName + '-detail.component.html'), {

        classifiedName: this.classifiedName,
        camelizedName: this.camelizedName
      }
    );

    //** Generate `detail` styles
    this.fs.copy(
      this.templatePath('components/detail/_-detail.component.scss'),
      this.destinationPath(this.destination + this.slugifiedName + '-detail.component.scss')
    );

    //** Generate `Angular` service
    this.fs.copyTpl(
      this.templatePath('services/_.service.ts'),
      this.destinationPath(this.destination + this.slugifiedName + '.service.ts'), {

        classifiedName: this.classifiedName
      }
    );

    //** Generate `Angular` service unit test
    this.fs.copyTpl(
      this.templatePath('services/_.service.spec.ts'),
      this.destinationPath(this.destination + this.slugifiedName + '.service.spec.ts'), {

        classifiedName: this.classifiedName,
        slugifiedName: this.slugifiedName,
        humanizedName: this.humanizedName,
        camelizedName: this.camelizedName
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
