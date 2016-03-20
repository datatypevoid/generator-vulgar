// This file contains the main class as well as the necessary
// decorators for creating the `<%= classifiedName %>` component

/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

/*
 * <%= humanizedName %>
 * Component
 */
@Component({
  selector: '<%= slugifiedName %>',
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./<%= slugifiedName %>.component.html')
  // Load our main `Sass` file into our `<%= classifiedName %>` component
  styleUrls: [require('!style!css!sass!./<%= slugifiedName %>.component.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class <%= classifiedName %> {

  constructor() {}
}
