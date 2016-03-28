import {
  it,
  describe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide, Component} from 'angular2/core';
import {<%= classifiedName %>} from './<%= slugifiedName %>';


@Component({
  selector: 'test-component',
  template: `<div <%= slugifiedName %>></div>`
})
class TestComponent {}

describe('<%= classifiedName %> Directive', () => {

  beforeEachProviders((): any[] => []);


  it('should ...', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
