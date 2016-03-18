// This file contains the main class as well as the necessary
// decorators for creating the primary `<%= classifiedName %>` `component`

/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

/*
 * <%= humanizedName %> Component
 * Top Level Component
 */
@Component({
  selector: '<%= slugifiedName %>',
  providers: [],
  directives: [],
  pipes: [],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./<%= slugifiedName %>.html')
})
@RouteConfig([

])
export class <%= classifiedName %> {

  defaultMeaning: number = 42;

  constructor() {

  }

  meaningOfLife(meaning?: number) {
    
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
