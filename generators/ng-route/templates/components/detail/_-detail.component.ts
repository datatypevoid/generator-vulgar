// This file contains the main class as well as the necessary
// decorators for creating the  `<%= classifiedName %>DetailComponent`

/*
 * Angular 2 decorators and services
 */

import {Component, OnInit} from 'angular2/core';
import {<%= classifiedName %>, <%= classifiedName %>Service} from './<%= slugifiedName %>.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

/*
 * <%= humanizedName %>
 * Detail Component
 */

@Component({
  // Load our main `Sass` file into our `<%= classifiedName %>DetailComponent`
  styleUrls: [require('!style!css!sass!./<%= slugifiedName %>-detail.component.scss')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./<%= slugifiedName %>-detail.component.html')
})
export class <%= classifiedName %>DetailComponent implements OnInit, CanDeactivate {

  <%= camelizedName %>: <%= classifiedName %>;
  editName: string;

  constructor(
    private _service: <%= classifiedName %>Service,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.get(id).then(<%= camelizedName %> => {
      if (<%= camelizedName %>) {
        this.editName = <%= camelizedName %>.name;
        this.<%= camelizedName %> = <%= camelizedName %>;
      } else {
        this.gotoList();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.<%= camelizedName %> || this.<%= camelizedName %>.name === this.editName) {
      return true;
    }

    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.editName = this.<%= camelizedName %>.name;
    this.gotoList();
  }

  save() {
    this.<%= camelizedName %>.name = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['<%= classifiedName %>List']);
  }
}
