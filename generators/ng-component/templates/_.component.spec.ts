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


describe('<%= classifiedName %> Component', () => {

  beforeEachProviders((): any[] => []);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(<%= classifiedName %>).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
