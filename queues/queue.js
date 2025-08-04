class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  enqueue(element) {
    // push elements at back
    this.items.push(element);
  }

  dequeue() {
    // remove from the front of the queue
    if (this.isEmpty()) {
      return "empty queue. can't dequeue.";
    }

    return this.items.shift();
  }

  peek() {
    // returns element at the front of the queue
    if (this.isEmpty()) {
      return "empty queue. can't peek.";
    }
    return this.items[0];
  }

  print() {
    for (let i = 0; i < this.size(); i++) {
      console.log(this.items[i]);
    }
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

q.print();

console.log(q.peek());

q.dequeue();
console.log(q.peek());

q.print();
