import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: '<%= camelizedName %>'
})
export class <%= classifiedName %> implements PipeTransform {

  transform(value: any, args?: any): any {

    return null;
  }

}
