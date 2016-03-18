import {Injectable} from 'angular2/core';

export class <%= classifiedName %> {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class <%= classifiedName %>Service {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new <%= classifiedName %>(1, 'one'),
  new <%= classifiedName %>(2, 'two'),
  new <%= classifiedName %>(3, 'three')
];

let promise = Promise.resolve(mock);
