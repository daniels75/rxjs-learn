import { Subject, Observable } from 'rxjs';
import {of} from 'rxjs';

var obser: Observable<any> = new Observable<any>();

var obsFrom  = of(1,2,3);

obsFrom.subscribe( {
    next: value => console.log(`Current value: ${value}`)
})