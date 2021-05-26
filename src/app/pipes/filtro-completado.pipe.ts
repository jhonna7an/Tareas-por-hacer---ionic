import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(value: Lista[], completada: boolean = true): Lista[] {
    
    return value.filter(x => x.terminada === completada);;
  }

}
