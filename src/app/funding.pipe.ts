import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'funding',
  pure: false
})
export class FundingPipe implements PipeTransform {

  transform(input: Project[], desiredFundingRange) {
    var output: Project[] = [];
    if(desiredFundingRange === 'cheap') {
      for(let i = 0; i < input.length; i++) {
        if(parseInt(input[i].goal) < 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFundingRange === 'expensive') {
      for(let i = 0; i < input.length; i++) {
        if(parseInt(input[i].goal) >= 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
