// This file contains the main class as well as the necessary
// decorators for creating the `<%= classifiedName %>Root` `component`

/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, RouterOutlet} from 'angular2/router';

import {<%= classifiedName %>ListComponent} from './<%= slugifiedName %>-list.component';
import {<%= classifiedName %>DetailComponent} from './<%= slugifiedName %>-detail.component';
import {<%= classifiedName %>Service} from './<%= slugifiedName %>.service';

/*
 * <%= humanizedName %>
 * Root Component
 */
@Component({
  providers: [<%= classifiedName %>Service],
  directives: [RouterOutlet],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {path:'/<%= routePath %>', name: '<%= classifiedName %>List', component: <%= classifiedName %>ListComponent, useAsDefault: true},
  {path:'/<%= routePath %>:id', name: '<%= classifiedName %>Detail', component: <%= classifiedName %>DetailComponent}
])
export class <%= classifiedName %>Root {

  constructor() {

  }
}
