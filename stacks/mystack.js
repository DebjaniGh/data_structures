"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyStack = void 0;
var MyStack = /** @class */ (function () {
    function MyStack() {
        this.items = [];
    }
    MyStack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    MyStack.prototype.size = function () {
        return this.items.length;
    };
    MyStack.prototype.push = function (element) {
        this.items.push(element);
    };
    MyStack.prototype.pop = function () {
        if (this.isEmpty()) {
            return "empty stack. can't pop.";
        }
        return this.items.pop();
    };
    MyStack.prototype.peek = function () {
        if (this.isEmpty()) {
            return "empty stack. can't peek.";
        }
        return this.items[this.size() - 1];
    };
    MyStack.prototype.print = function () {
        for (var i = 0; i < this.size(); i++) {
            console.log(this.items[i]);
        }
    };
    return MyStack;
}());
exports.MyStack = MyStack;
// const stk = new MyStack();
// stk.push(1);
// stk.push(2);
// stk.push(3);
// stk.push(4);
// stk.push(5);
// // do some random push, pop, peek operations and console.log the stk after pop and peek
// stk.push(6);
// stk.push(7);
// stk.print();
// stk.pop();
// stk.print();
// stk.pop();
// stk.pop();
// stk.print();
// console.log(stk.peek());
