'use strict';
var yeoman = require('yeoman-generator'),
     chalk = require('chalk'),
         _ = require('lodash');

module.exports = yeoman.Base.extend({

  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.Base.apply(this, arguments);

    // This method adds support for a `--dest` flag
    this.option('dest', { type: String });

    // This method adds support for a `--vulgarcli` flag
    this.option('vulgarcli', { type: Boolean, defaults: false, hide: true });
  },

  writing: function () {

    // For dummy test
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );

   // Optional flag with a desination modifier for use with
   this.destination = this.options.dest;

   this.vulgarcli = this.options.vulgarcli;

    if(this.destination) {

      this.fs.copy(
        this.templatePath('_config/_config.json'),
        this.destinationPath(this.destination)
      );
    } else {

      this.fs.copy(
        this.templatePath('_config/_config.json'),
        this.destinationPath('config/config.json')
      );
    }
  },

  end: function() {

    if(!this.vulgarcli) {
      // Terminate process if run from console
      process.exit(0);
    } else if(this.vulgarcli === true) {
      // `return 0` to let `vulgar-cli` know everything went okay on our end
      return 0;
    }
  }
});
