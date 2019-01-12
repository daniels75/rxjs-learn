import { Subject, Observable } from 'rxjs';


// Cold Observables - better example
const source = Observable.create((observer:any) => {
    observer.next(1);
    setTimeout(() => observer.next(2), 1000)
    setTimeout(() => {
        observer.next(3)
        observer.complete()
    }, 2000)
})

const subscription1$ = source.subscribe(
    (value: any) => addItem(`1st subscriber - value from Observable: ${value}`)
)

setTimeout(() => {
    const subscription1$ = source.subscribe(
        (value: any) => addItem(`2nd subscriber - value from Observable: ${value}`)
    )
}, 900)

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}