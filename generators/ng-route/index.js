'use strict';
var yeoman = require('yeoman-generator'),
     chalk = require('chalk'),
     yosay = require('yosay'),
         _ = require('lodash'),
         s = require('underscore.string'),
        fs = require('fs');

module.exports = yeoman.generators.Base.extend({
  askForModuleName: function () {

    var done = this.async();

    var modulesFolder = process.cwd() + '/src/modules/';

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sensational ' + chalk.red('generator-vulgar') + ' generator!'
    ));

    var prompts = [{
        type: 'list',
        name: 'moduleName',
        message: 'Which module will this route belong to?',
        default: 'core',
        choices: []
      },
      {
        type: 'input',
        name: 'routeName',
        message: 'What is the name of the route (leave it blank to inherit from module)?',
        default: ''
    }];

    //** Populate module choices for user to see
    if (fs.existsSync(modulesFolder)) {

      fs.readdirSync(modulesFolder).forEach(function (folder) {

        var stat = fs.statSync(modulesFolder + '/' + folder);

        if(stat.isDirectory()) {

          prompts[0].choices.push({
            value: folder,
            name: folder
          });
        }
      });
    }

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      this.moduleName = this.props.moduleName;
      this.routeName = this.props.routeName ||
                  this.props.moduleName;

      this.slugifiedModuleName = s(this.moduleName).slugify().value();
      this.humanizedModuleName = s(this.moduleName).humanize().value();
      this.decapitalizedModuleName = s(this.moduleName).humanize().decapitalize().value();

      this.slugifiedName = s(this.routeName).humanize().slugify().value();
      this.classifiedName = s(this.slugifiedName).classify().value();
      this.humanizedName = s(this.slugifiedName).humanize().value();
      this.camelizedName = s(this.slugifiedName).camelize().value();
      this.decapitalizedName = s(this.routeName).humanize().decapitalize().value();

      done();
    }.bind(this));
  },

  askForRouteDetails: function() {

    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sensational ' + chalk.red('generator-vulgar') + ' generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'routePath',
        message: 'What would you like the route path to be?',
        default: this.slugifiedName
      }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      this.routePath = this.props.routePath;

      this.slugifiedRoutePath = s(this.routePath).slugify().value();

      done();
    }.bind(this));
  },

  writing: function () {

    //** Generate main `Angular` `route` component
    this.fs.copyTpl(
      this.templatePath('_main.ts'),
      this.destinationPath('src/' + this.moduleName + '/' + this.slugifiedName + '.ts'), {

        classifiedName: this.classifiedName,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName
      }
    );

    //** Generate main `Angular` `route` template
    this.fs.copyTpl(
      this.templatePath('_main.html'),
      this.destinationPath('src/' + this.moduleName + '/' + this.slugifiedName + '.html'), {

        slugifiedName: this.slugifiedName
      }
    );

    //** Generate main `Angular` `route` component unit test
    this.fs.copyTpl(
      this.templatePath('_main.spec.ts'),
      this.destinationPath('src/' + this.moduleName + '/' + this.slugifiedName + '.spec.ts'), {

        classifiedName: this.classifiedName,
        slugifiedName: this.slugifiedName
      }
    );

    //** Generate `root` component
    this.fs.copyTpl(
      this.templatePath('components/_-root.component.ts'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '-root.component.ts'), {

        classifiedName: this.classifiedName,
        routePath: this.routePath,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName
      }
    );

    //** Generate `list` component
    this.fs.copyTpl(
      this.templatePath('components/list/_-list.component.ts'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '-list.component.ts'), {

        classifiedName: this.classifiedName,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName,
        camelizedName: this.camelizedName
      }
    );

    //** Generate `list` unit test
    this.fs.copyTpl(
      this.templatePath('components/list/_-list.component.spec.ts'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '-list.component.spec.ts'), {

        classifiedName: this.classifiedName,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName
      }
    );

    //** Generate `list` template
    this.fs.copyTpl(
      this.templatePath('components/list/_-list.component.html'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '-list.component.html'), {

        classifiedName: this.classifiedName,
        camelizedName: this.camelizedName
      }
    );

    //** Generate `list` styles
    this.fs.copy(
      this.templatePath('components/list/_-list.component.scss'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '-list.component.scss')
    );

    //** Generate `detail` component
    this.fs.copyTpl(
      this.templatePath('components/detail/_-detail.component.ts'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '-detail.component.ts'), {

        classifiedName: this.classifiedName,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName,
        camelizedName: this.camelizedName
      }
    );

    //** Generate `detail` unit test
    this.fs.copyTpl(
      this.templatePath('components/detail/_-detail.component.spec.ts'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '-detail.component.spec.ts'), {

        classifiedName: this.classifiedName,
        humanizedName: this.humanizedName,
        slugifiedName: this.slugifiedName
      }
    );

    //** Generate `detail` template
    this.fs.copyTpl(
      this.templatePath('components/detail/_-detail.component.html'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '-detail.component.html'), {

        classifiedName: this.classifiedName,
        camelizedName: this.camelizedName
      }
    );

    //** Generate `detail` styles
    this.fs.copy(
      this.templatePath('components/detail/_-detail.component.scss'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '-detail.component.scss')
    );

    //** Generate `Angular` service
    this.fs.copyTpl(
      this.templatePath('services/_.service.ts'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '.service.ts'), {

        classifiedName: this.classifiedName
      }
    );

    //** Generate `Angular` service unit test
    this.fs.copyTpl(
      this.templatePath('services/_.service.spec.ts'),
      this.destinationPath('src/' + this.moduleName + '/' + this.decapitalizedName + '/' + this.slugifiedName + '.service.spec.ts'), {

        classifiedName: this.classifiedName,
        slugifiedName: this.slugifiedName,
        humanizedName: this.humanizedName,
        camelizedName: this.camelizedName
      }
    );
  },

  install: function () {
    this.installDependencies();
  }
});
