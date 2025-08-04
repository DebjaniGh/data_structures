class Stack {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "empty stack. can't pop.";
    }
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "empty stack. can't peek.";
    }
    return this.items[this.size() - 1];
  }
  print() {
    for (let i = 0; i < this.size(); i++) {
      console.log(this.items[i]);
    }
  }
}

const stk = new Stack();
stk.push(1);
stk.push(2);
stk.push(3);
stk.push(4);
stk.push(5);
// do some random push, pop, peek operations and console.log the stk after pop and peek
stk.push(6);
stk.push(7);
stk.print();
stk.pop();
stk.print();
stk.pop();
stk.pop();
stk.print();
console.log(stk.peek());
