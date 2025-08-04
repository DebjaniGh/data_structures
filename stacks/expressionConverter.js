"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mystack_1 = require("./mystack");
function precedence(c) {
    switch (c) {
        case "^":
            return 3;
        case "*":
        case "/":
            return 2;
        case "+":
        case "-":
            return 1;
        default:
            return 0;
    }
}
function infixToPostfix(s) {
    var exprStk = new mystack_1.MyStack();
    var postfix = "";
    var n = s.length;
    // (A+B)*C-D/E*(F+G)
    /**
     * stk
     * postfix AB+C*DE/FG+*-
     */
    for (var i = 0; i < n; i++) {
        // current char is an operand, append it to postfix
        if ((s[i] >= "A" && s[i] <= "Z") ||
            (s[i] >= "a" && s[i] <= "z") ||
            (s[i] >= "0" && s[i] <= "9")) {
            postfix += s[i];
        }
        else if (s[i] === "(") {
            // push opening parantheses into stack
            exprStk.push(s[i]);
        }
        else if (s[i] === ")") {
            // pop until '(' is encountered
            while (exprStk.size() && exprStk.peek() !== "(") {
                postfix += exprStk.pop();
            }
            exprStk.pop(); // pop the '('
        }
        else {
            // operator
            while (exprStk.size() && precedence(s[i]) <= precedence(exprStk.peek())) {
                postfix += exprStk.pop();
            }
            exprStk.push(s[i]);
        }
    }
    while (exprStk.size()) {
        postfix += exprStk.pop();
    }
    return postfix;
}
function infixToPrefix(s) {
    // reverse the string, if there is an '(' then make it ')' and if ')' then make it '('
    var str = s.split("").reverse().join("");
    str = str.replace(/\(/g, "X").replace(/\)/g, "(").replace(/X/g, ")");
    // convert to postfix
    var postfixOfS = infixToPostfix(str);
    // reverse the postfix
    return postfixOfS.split("").reverse().join("");
}
//console.log(infixToPostfix("A+B*C-D/E")); // ABC*+DE/-
//console.log(infixToPostfix("A+B*C-D/E*F")); // ABC*+DE/*F
//console.log(infixToPostfix("(A+B)*C-D/E*(F+G)")); // stk -    postfix - AB+C*DE/FG+*-
console.log(infixToPrefix("a+b"));
console.log(infixToPrefix("(a+b)*c-d/e*(f+g)"));
