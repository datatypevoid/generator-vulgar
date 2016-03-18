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
import {<%= classifiedName %>DetailComponent} from './<%= slugifiedName %>-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {<%= classifiedName %>, <%= classifiedName %>Service} from './<%= slugifiedName %>.service';

class Mock<%= classifiedName %>Service {
  get() { return Promise.resolve(new <%= classifiedName %>(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('<%= classifiedName %>DetailComponent', () => {

  beforeEachProviders(() => [
    provide(<%= classifiedName %>Service, {useClass: Mock<%= classifiedName %>Service}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(<%= classifiedName %>DetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
