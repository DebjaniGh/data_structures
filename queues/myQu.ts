class myQueue<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  enqueue(element: T) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty. can't dequeue";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "queue is empty. can't dequeue";
    }
    return this.items[0];
  }

  print() {
    for (let i = 0; i < this.size(); i++) {
      console.log(this.items[i]);
    }
  }
}

const numQ = new myQueue<number>();
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

const strQ = new myQueue<string>();
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
