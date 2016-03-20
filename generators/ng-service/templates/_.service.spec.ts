import {
  it,
  describe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {<%= classifiedName %>} from './<%= slugifiedName %>';


describe('<%= classifiedName %> Service', () => {

  beforeEachProviders(() => [<%= classifiedName %>]);


  it('should ...', inject([<%= classifiedName %>], (service: <%= classifiedName %>) => {

  }));

});
