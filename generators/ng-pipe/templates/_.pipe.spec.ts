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


describe('<%= classifiedName %> Pipe', () => {

  beforeEachProviders(() => [<%= classifiedName %>]);


  it('should transform the input', inject([<%= classifiedName %>], (pipe: <%=classifiedName %>) => {
      expect(pipe.transform(true)).toBe(null);
  }));

});
