var myQueue = /** @class */ (function () {
    function myQueue() {
        this.items = [];
    }
    myQueue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    myQueue.prototype.size = function () {
        return this.items.length;
    };
    myQueue.prototype.enqueue = function (element) {
        this.items.push(element);
    };
    myQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return "queue is empty. can't dequeue";
        }
        return this.items.shift();
    };
    myQueue.prototype.peek = function () {
        if (this.isEmpty()) {
            return "queue is empty. can't dequeue";
        }
        return this.items[0];
    };
    myQueue.prototype.print = function () {
        for (var i = 0; i < this.size(); i++) {
            console.log(this.items[i]);
        }
    };
    return myQueue;
}());
var numQ = new myQueue();
numQ.enqueue(1);
numQ.enqueue(2);
numQ.enqueue(3);
numQ.enqueue(4);
numQ.enqueue(5);
numQ.print();
console.log(numQ.peek());
numQ.dequeue();
console.log(numQ.peek());
numQ.dequeue();
numQ.dequeue();
console.log(numQ.peek());
numQ.print();
var strQ = new myQueue();
strQ.enqueue("a");
strQ.enqueue("b");
strQ.enqueue("c");
strQ.enqueue("d");
strQ.enqueue("e");
strQ.print();
console.log(strQ.peek());
strQ.dequeue();
console.log(strQ.peek());
strQ.dequeue();
strQ.dequeue();
strQ.dequeue();
console.log(strQ.peek());
strQ.print();
