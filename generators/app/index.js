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
    },

    //** Copy application files
    //   This includes files such as `server.js`, our routes,
    //   `dist` directory and all other major files
    app: function() {

      //# Initial setup

      //** Gulp
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );

      this.fs.copy(
        this.templatePath('_gulpfile.conf.js'),
        this.destinationPath('gulpfile.conf.js')
      );

      //** Karma
      this.fs.copy(
        this.templatePath('_karma.conf.js'),
        this.destinationPath('karma.conf.js')
      );

      //** Protractor
      this.fs.copy(
        this.templatePath('_protractor.conf.js'),
        this.destinationPath('protractor.conf.js')
      );

      //** Server Configuration
      this.fs.copy(
        this.templatePath('_server.js'),
        this.destinationPath('server.js')
      );

      this.fs.copy(
        this.templatePath('_server.conf.js'),
        this.destinationPath('server.conf.js')
      );

      //** Test Bundle
      this.fs.copy(
        this.templatePath('_spec-bundle.js'),
        this.destinationPath('spec-bundle.js')
      );

      //** Webpack
      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );

      this.fs.copy(
        this.templatePath('_webpack.prod.config.js'),
        this.destinationPath('webpack.prod.config.js')
      );

      this.fs.copy(
        this.templatePath('_webpack.test.config.js'),
        this.destinationPath('webpack.test.config.js')
      );

      //** Webpack Helpers
      this.fs.copy(
        this.templatePath('_helpers.js'),
        this.destinationPath('helpers.js')
      );

      //# App Models

      //* User model for use with `PassportJS`
      this.fs.copy(
        this.templatePath('_app/_models/_user.model.js'),
        this.destinationPath('app/models/user.model.js')
      );

      //** `Auth` router for use with `PassportJS`
      this.fs.copy(
        this.templatePath('_app/_routes/__authentication.router.js'),
        this.destinationPath('app/routes/_authentication.router.js')
      );

      //** Main `Express` routes
      this.fs.copy(
        this.templatePath('_app/_routes.js'),
        this.destinationPath('app/routes.js')
      );

      //# Environment Configuration

      //** Environment configuration
      this.fs.copy(
        this.templatePath('_config/_env.conf.js'),
        this.destinationPath('config/env.conf.js')
      );

      //** Mongoose configuration
      this.fs.copy(
        this.templatePath('_config/_mongoose.conf.js'),
        this.destinationPath('config/mongoose.conf.js')
      );

      //** PassportJS configuration
      this.fs.copy(
        this.templatePath('_config/_passport.conf.js'),
        this.destinationPath('config/passport.conf.js')
      );

      //# `Socket.io`

      //** Base file
      this.fs.copy(
        this.templatePath('_sockets/_base.js'),
        this.destinationPath('sockets/base.js')
      );

      //# Utility `Directives`

      //** `router-active`
      this.fs.copy(
        this.templatePath('_src/_app/_directives/_router-active.ts'),
        this.destinationPath('src/app/directives/router-active.ts')
      );

      //# App Components

      //** Primary `Angular` `app` `component`
      this.fs.copy(
        this.templatePath('_src/_app/_app.ts'),
        this.destinationPath('src/app/app.ts')
      );

      //** `app` tests
      this.fs.copy(
        this.templatePath('_src/_app/_app.spec.ts'),
        this.destinationPath('src/app/app.spec.ts')
      );

      this.fs.copy(
        this.templatePath('_src/_app/_app.e2e.ts'),
        this.destinationPath('src/app/app.e2e.ts')
      );

      //** About Component
      this.fs.copy(
        this.templatePath('_src/_app/_about/_about.ts'),
        this.destinationPath('src/app/about/about.ts')
      );

      //** About Component Test
      this.fs.copy(
        this.templatePath('_src/_app/_about/_about.spec.ts'),
        this.destinationPath('src/app/about/about.spec.ts')
      );

      //** Home Component
      this.fs.copy(
        this.templatePath('_src/_app/_home/_home.ts'),
        this.destinationPath('src/app/home/home.ts')
      );

      //## Home Component Tests
      this.fs.copy(
        this.templatePath('_src/_app/_home/_home.spec.ts'),
        this.destinationPath('src/app/home/home.spec.ts')
      );

      this.fs.copy(
        this.templatePath('_src/_app/_home/_home.e2e.ts'),
        this.destinationPath('src/app/home/home.e2e.ts')
      );

      //** Home Component Template
      this.fs.copy(
        this.templatePath('_src/_app/_home/_home.html'),
        this.destinationPath('src/app/home/home.html')
      );

      //## Home Component Directives

      //** X-Large Directive
      this.fs.copy(
        this.templatePath('_src/_app/_home/_directives/_x-large.ts'),
        this.destinationPath('src/app/home/directives/x-large.ts')
      );

      //** X-Large Directive Test
      this.fs.copy(
        this.templatePath('_src/_app/_home/_directives/_x-large.spec.ts'),
        this.destinationPath('src/app/home/directives/x-large.spec.ts')
      );

      //** Home Component services

      //** Title Service
      this.fs.copy(
        this.templatePath('_src/_app/_home/_services/_title.ts'),
        this.destinationPath('src/app/home/services/title.ts')
      );

      //** Title Service Test
      this.fs.copy(
        this.templatePath('_src/_app/_home/_services/_title.spec.ts'),
        this.destinationPath('src/app/home/services/title.spec.ts')
      );

      //# Assets

      //** Browser Icon Stuff

      this.fs.copy(
        this.templatePath('_src/_assets/_icon/_browserconfig.xml'),
        this.destinationPath('src/assets/icon/browserconfig.xml')
      );

      this.fs.copy(
        this.templatePath('_src/_assets/_icon/_manifest.json'),
        this.destinationPath('src/assets/icon/manifest.json')
      );

      //** Angular image for home
      this.fs.copy(
        this.templatePath('_src/_assets/_img/_angular-logo.png'),
        this.destinationPath('src/assets/img/angular-logo.png')
      );

      //**Other Asset Stuff
      this.fs.copy(
        this.templatePath('_src/_assets/_data.json'),
        this.destinationPath('src/assets/data.json')
      );

      this.fs.copy(
        this.templatePath('_src/_assets/_humans.txt'),
        this.destinationPath('src/assets/humans.txt')
      );

      this.fs.copy(
        this.templatePath('_src/_assets/_manifest.json'),
        this.destinationPath('src/assets/manifest.json')
      );

      this.fs.copy(
        this.templatePath('_src/_assets/_robots.txt'),
        this.destinationPath('src/assets/robots.txt')
      );

      this.fs.copy(
        this.templatePath('_src/_assets/_service-worker.js'),
        this.destinationPath('src/assets/service-worker.js')
      );

      //# Sass

      //** Base
      this.fs.copy(
        this.templatePath('_src/_sass/_base/__animations.scss'),
        this.destinationPath('src/sass/base/_animations.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_base/__module.scss'),
        this.destinationPath('src/sass/base/_module.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_base/__typography.scss'),
        this.destinationPath('src/sass/base/_typography.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_base/_README.md'),
        this.destinationPath('src/sass/base/README.md')
      );

      //** Components
      this.fs.copy(
        this.templatePath('_src/_sass/_components/__buttons.scss'),
        this.destinationPath('src/sass/components/_buttons.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_components/__module.scss'),
        this.destinationPath('src/sass/components/_module.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_components/_README.md'),
        this.destinationPath('src/sass/components/README.md')
      );

      //** Layout
      this.fs.copy(
        this.templatePath('_src/_sass/_layout/__footer.scss'),
        this.destinationPath('src/sass/layout/_footer.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_layout/__forms.scss'),
        this.destinationPath('src/sass/layout/_forms.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_layout/__grid.scss'),
        this.destinationPath('src/sass/layout/_grid.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_layout/__header.scss'),
        this.destinationPath('src/sass/layout/_header.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_layout/__module.scss'),
        this.destinationPath('src/sass/layout/_module.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_layout/__sidebar.scss'),
        this.destinationPath('src/sass/layout/_sidebar.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_layout/_README.md'),
        this.destinationPath('src/sass/layout/README.md')
      );

      //** Pages
      this.fs.copy(
        this.templatePath('_src/_sass/_pages/__contact.scss'),
        this.destinationPath('src/sass/pages/_contact.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_pages/__home.scss'),
        this.destinationPath('src/sass/pages/_module.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_pages/_README.md'),
        this.destinationPath('src/sass/pages/README.md')
      );

      //** Themes
      this.fs.copy(
        this.templatePath('_src/_sass/_themes/__module.scss'),
        this.destinationPath('src/sass/themes/_module.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_themes/_README.md'),
        this.destinationPath('src/sass/themes/README.md')
      );

      //** Utils
      this.fs.copy(
        this.templatePath('_src/_sass/_utils/__functions.scss'),
        this.destinationPath('src/sass/utils/_functions.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_utils/__mixins.scss'),
        this.destinationPath('src/sass/utils/_mixins.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_utils/__module.scss'),
        this.destinationPath('src/sass/utils/_module.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_utils/__placeholders.scss'),
        this.destinationPath('src/sass/utils/_placeholders.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_utils/__variables.scss'),
        this.destinationPath('src/sass/utils/_variables.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_utils/_README.md'),
        this.destinationPath('src/sass/utils/README.md')
      );

      //** Vendors
      this.fs.copy(
        this.templatePath('_src/_sass/_vendors/__module.scss'),
        this.destinationPath('src/sass/vendors/_module.scss')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_vendors/_README.md'),
        this.destinationPath('src/sass/vendors/README.md')
      );

      this.fs.copy(
        this.templatePath('_src/_sass/_vendors/_vendors-extensions/_README.md'),
        this.destinationPath('src/sass/vendors/vendors-extensions/README.md')
      );

      //** Shame File
      this.fs.copy(
        this.templatePath('_src/_sass/__shame.scss'),
        this.destinationPath('src/sass/shame.scss')
      );

      //** Main Sass File
      this.fs.copy(
        this.templatePath('_src/_sass/_main.scss'),
        this.destinationPath('src/sass/main.scss')
      );

      //# Custom Typings
      this.fs.copy(
        this.templatePath('_src/_custom-typings.d.ts'),
        this.destinationPath('src/custom-typings.d.ts')
      );

      //# Index.html
      this.fs.copy(
        this.templatePath('_src/_index.html'),
        this.destinationPath('src/index.html')
      );

      //# Angular Application Bootstrap
      this.fs.copy(
        this.templatePath('_src/_main.ts'),
        this.destinationPath('src/main.ts')
      );

      //# Polyfills
      this.fs.copy(
        this.templatePath('_src/_polyfills.ts'),
        this.destinationPath('src/polyfills.ts')
      );
    }
  },
  //** Install dependencies
  install: function() {
    this.installDependencies();
  }

});
