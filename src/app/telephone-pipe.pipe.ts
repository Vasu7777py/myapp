import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephonePipe'
})
export class TelephonePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.length != 10) {
      throw new Error("Invalid length for pipe transform"); 
    }
    let transform = "(" + value.slice(0, 3) + ")-" + value.slice(3, 7) + "-" + value.slice(7)
    return transform;
  }

}
