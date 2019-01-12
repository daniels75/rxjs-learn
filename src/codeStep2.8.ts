import { interval } from 'rxjs';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

// BehaviorSubject example

// Behavior subject is a special type of subject whose only
// difference is that it will emit the last value upon
// a new observers subscription

var behaviorSubject = new BehaviorSubject('Test me');


behaviorSubject.subscribe(
    data => addItem(`Observer 1: ${data}`),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
)

behaviorSubject.next('The first thing has been set');


// important differenct between a Subject and BehaviorSubject
// here Observer2 will receive also 'The first thing has been set'
// this is the main difference
const observer2$ = behaviorSubject.subscribe(
    data => addItem(`Observer 2: ${data}`)
)

behaviorSubject.next('The second thing has been sent')
behaviorSubject.next('The third thing has been sent')

observer2$.unsubscribe();

behaviorSubject.next(' A final thing has been sent')

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}