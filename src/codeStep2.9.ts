import { interval } from 'rxjs';
import { Subject, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

// ReplaySubject example

// Replay subject allows you to dispach any desinated number of values

// we can specify the number of event or values to dispatch to new observers
var replaySubject = new ReplaySubject(2);


replaySubject.subscribe(
    data => addItem(`Observer 1: ${data}`),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
)

replaySubject.next('The first thing has been set');
replaySubject.next('The second thing has been sent')
replaySubject.next('The third thing has been sent')

const observer2$ = replaySubject.subscribe(
    data => addItem(`Observer 2: ${data}`)
)


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}