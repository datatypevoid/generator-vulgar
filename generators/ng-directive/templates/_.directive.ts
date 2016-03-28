// This file contains the main class as well as the necessary
// decorators for creating the `<%= classifiedName %>` directive

/*
 * Angular 2 decorators and services
 */
import {Directive} from 'angular2/core';

/*
 * <%= humanizedName %>
 * Directive
 */

@Directive({
  selector: '<%= slugifiedName %>',
  providers: [],
  host: {},

})
export class <%= classifiedName %> {

  constructor() {}

}
