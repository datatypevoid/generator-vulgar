'use strict';

// import the `mongoose` helper utilities
let utils = require('./utils');
import chai from 'chai';
let should = chai.should();

// import our `<%= classifiedName %>` mongoose model
import <%= classifiedName %> from '../app/models/<%= slugifiedName %>/<%= slugifiedName %>.model';

describe('<%= classifiedName %>: models', () => {

  describe('create()', () => {

    it('should create a new <%= classifiedName %>', (done) => {

      // Create a `<%= classifiedName %>` object to pass to `<%= classifiedName %>.create()``
      let t = {

        text: 'Write better tests... <.<'
      };

      <%= classifiedName %>.create(t, (err, created<%= classifiedName %>) => {

        // Confirm that that an error does not exist
        should.not.exist(err);

        // verify that the returned `<%= classifiedName %>` is what we expect
        created<%= classifiedName %>.text.should.equal('Write better tests... <.<');

        // Call done to tell mocha that we are done with this test
        done();
      });
    });
  });
});
