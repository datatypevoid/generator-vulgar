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
import {<%= classifiedName %>ListComponent} from './{<%= slugifiedName %>-list.component';
import {<%= classifiedName %>, {<%= classifiedName %>Service} from './{<%= slugifiedName %>.service';

class Mock{<%= classifiedName %>Service {
  getAll() { return Promise.resolve([new {<%= classifiedName %>(1, 'one')]); }
}

describe('<%= classifiedName %>ListComponent', () => {

  beforeEachProviders(() => [
    provide({<%= classifiedName %>Service, {useClass: Mock{<%= classifiedName %>Service}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync({<%= classifiedName %>ListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
