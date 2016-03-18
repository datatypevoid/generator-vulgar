import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {<%= classifiedName %>App} from './<%= slugifiedName %>';

beforeEachProviders(() => [<%= classifiedName %>App]);

describe('App: <%= classifiedName %>', () => {
  it('should have the `defaultMeaning` as 42', inject([<%= classifiedName %>App], (app: <%= classifiedName %>App) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([<%= classifiedName %>App], (app: <%= classifiedName %>App) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});
