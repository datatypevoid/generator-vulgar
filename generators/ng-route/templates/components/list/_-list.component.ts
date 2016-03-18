// This file contains the main class as well as the necessary
// decorators for creating the  `<%= classifiedName %>ListComponent`

/*
 * Angular 2 decorators and services
 */
import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {<%= classifiedName %>, <%= classifiedName %>Service} from './<%= slugifiedName %>.service';

/*
 * <%= humanizedName %>
 * List Component
 */
@Component({
  directives: [],
  // Load our main `Sass` file into our `<%= classifiedName %>ListComponent`
  styleUrls: [require('!style!css!sass!./<%= slugifiedName %>-list.component.scss')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./<%= slugifiedName %>-list.component.html')
})
export class <%= classifiedName %>ListComponent implements OnInit {

  <%= camelizedName %>s: <%= classifiedName %>[];

  constructor(private _service: <%= classifiedName %>Service) {

  }

  ngOnInit() {
    this._service
          .getAll()
            .then(<%= camelizedName %>s => this.<%= camelizedName %>s = <%= camelizedName %>s);
  }
}
