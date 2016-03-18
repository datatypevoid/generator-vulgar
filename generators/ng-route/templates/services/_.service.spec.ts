import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {<%= classifiedName %>Service} from './<%= slugifiedName %>.service';

describe('<%= classifiedName %>Service', () => {

  beforeEachProviders(() => [<%= classifiedName %>Service]);

  it('should get all <%= humanizedName %>s', inject([<%= classifiedName %>Service], (<%= camelizedName %>Service:<%= classifiedName %>Service) => {
    <%= camelizedName %>Service.getAll().then(<%= camelizedName %>s => expect(<%= camelizedName %>s.length).toBe(3));
  }));

  it('should get one <%= humanizedName %>', inject(<%= classifiedName %>Service], (<%= camelizedName %>Service:<%= classifiedName %>Service) => {
    <%= camelizedName %>Service.get(1).then(<%= camelizedName %> => expect(<%= camelizedName %>.id).toBe(1));
  }));

});
