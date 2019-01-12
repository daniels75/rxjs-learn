import { interval } from 'rxjs';
import { Subject, Observable } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

// Subject example

// Subject in contract to and Observable is simply an observer that's 
// also able to emit values, so it's both an observable and an
// observer simultaneously 

var subject = new Subject();


subject.subscribe(
    data => addItem(`Observer 1: ${data}`),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
)

subject.next('The first thing has been set');

const observer2$ = subject.subscribe(
    data => addItem(`Observer 2: ${data}`)
)

subject.next('The second thing has been sent')
subject.next('The third thing has been sent')

observer2$.unsubscribe();

subject.next(' A final thing has been sent')

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}