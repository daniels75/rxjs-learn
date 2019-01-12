import { interval, Subject, Observable, of } from 'rxjs';
import {  merge } from 'rxjs';
import { map } from 'rxjs/operators';

// Operator example - map

Observable.create((observer:any) => {
    observer.next('Hej guys!');
})

.pipe(map ((val:any) => val.toUpperCase()))
.subscribe((val:any) => addItem(val))




function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}