// Node class
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    // count the no of nodes in a list
    LinkedList.prototype.size = function () {
        var len = 0;
        var current = this.head;
        while (current) {
            len++;
            current = current.next;
        }
        return len;
    };
    // print the list
    LinkedList.prototype.print = function () {
        var current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    // add a new node at the end of the list
    LinkedList.prototype.addAtEnd = function (value) {
        var newNode = new ListNode(value);
        var current = this.head;
        // if the list is empty, add the new node as the head
        if (!current) {
            this.head = newNode;
            return;
        }
        // else traverse till the end of the list
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    };
    // add a new node at the beginning of the list
    LinkedList.prototype.addAtBeginning = function (value) {
        var newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    };
    // add a new node at any position of the list
    LinkedList.prototype.addAtPosition = function (index, value) {
        if (index < 0 || index > this.size()) {
            console.log("Invalid index");
            return;
        }
        var newNode = new ListNode(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        var current = this.head;
        var currIndex = 1;
        while (currIndex < index && current) {
            current = current === null || current === void 0 ? void 0 : current.next;
            currIndex++;
        }
        if (newNode && current) {
            newNode.next = current === null || current === void 0 ? void 0 : current.next;
        }
        if (current === null || current === void 0 ? void 0 : current.next) {
            current.next = newNode;
        }
    };
    // delete a node from the beginning of the list
    LinkedList.prototype.delFromBeginning = function () {
        var _a;
        var current = this.head;
        // if list is empty, nothing to delete
        if (!current) {
            return;
        }
        if (this.head) {
            this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
        }
        if (current === null || current === void 0 ? void 0 : current.next) {
            current.next = null;
        }
    };
    // delete a node from the end of the list
    LinkedList.prototype.delFromEnd = function () {
        var current = this.head;
        var prev = current;
        // if list is empty, nothing to delete
        if (!current) {
            return;
        }
        while (prev && current.next) {
            prev = current;
            current = current.next;
        }
        if (prev) {
            prev.next = null;
        }
    };
    // delete a node from any position of the list
    LinkedList.prototype.delFromPosition = function (index) {
        var _a, _b, _c;
        if (index < 0 || index > this.size()) {
            console.log("Invalid index");
            return;
        }
        var current = this.head;
        // if list is empty, nothing to delete
        if (!current) {
            return;
        }
        // delete from beginning
        if (index === 0) {
            // only 1 node in the list
            if (this.head && !this.head.next) {
                this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
            }
            // more than 1 node in the list
            if (current && ((_b = this.head) === null || _b === void 0 ? void 0 : _b.next)) {
                this.head = (_c = this.head) === null || _c === void 0 ? void 0 : _c.next;
                current.next = null;
            }
        }
        var currIndex = 1;
        var prev = current;
        while (currIndex <= index && current) {
            prev = current;
            current = current.next;
            currIndex++;
        }
        if (prev && current) {
            prev.next = current === null || current === void 0 ? void 0 : current.next;
            current.next = null;
        }
    };
    return LinkedList;
}());
var list = new LinkedList();
list.addAtEnd(1);
list.addAtEnd(2);
list.addAtEnd(2);
list.addAtEnd(1);
console.log(list);
// list.addAtEnd(3);
// list.addAtEnd(5);
// list.addAtEnd(6);
// list.addAtEnd(10);
// console.log("size of list: " + list.size());
// list.print();
//list.addAtBeginning(0);
// list.print();
// console.log("--------------");
// list.addAtPosition(4, 4);
list.print();
// 0 1 2 3 4 5 6 10
// console.log("--------------");
// list.delFromBeginning();
// list.print();
//console.log("--------------");
// list.delFromEnd();
// list.print();
// list.delFromPosition(5);
// list.print();
function isPalindrome(head) {
    var str1 = "";
    var str2 = "";
    // traverse the linked list till the end
    // in str1, keep adding the numbers in the same order as you travers ethe list
    // in str2, add the numbers in the reverse order of list traversal
    // compare str1 and str2
    var current = head;
    while (current) {
        str1 += current.value;
        var tempStr = str2;
        str2 = current.value + str2;
    }
    return str1 === str2;
}
