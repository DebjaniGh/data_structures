// Node class
class ListNode {
  value: number;
  next: ListNode | null = null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  private head: ListNode | null = null;

  // count the no of nodes in a list
  size(): number {
    let len = 0;
    let current = this.head;
    while (current) {
      len++;
      current = current.next;
    }
    return len;
  }

  // print the list
  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // add a new node at the end of the list
  addAtEnd(value: number): void {
    const newNode = new ListNode(value);
    let current = this.head;
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
  }

  // add a new node at the beginning of the list
  addAtBeginning(value: number): void {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // add a new node at any position of the list
  addAtPosition(index: number, value: number): void {
    if (index < 0 || index > this.size()) {
      console.log("Invalid index");
      return;
    }

    const newNode = new ListNode(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }

    let current = this.head;
    let currIndex = 1;
    while (currIndex < index && current) {
      current = current?.next;
      currIndex++;
    }
    if (newNode && current) {
      newNode.next = current?.next;
    }
    if (current?.next) {
      current.next = newNode;
    }
  }

  // delete a node from the beginning of the list
  delFromBeginning(): void {
    let current = this.head;
    // if list is empty, nothing to delete
    if (!current) {
      return;
    }

    if (this.head) {
      this.head = this.head?.next;
    }
    if (current?.next) {
      current.next = null;
    }
  }

  // delete a node from the end of the list
  delFromEnd(): void {
    let current = this.head;
    let prev = current;
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
  }

  // delete a node from any position of the list
  delFromPosition(index: number): void {
    if (index < 0 || index > this.size()) {
      console.log("Invalid index");
      return;
    }
    let current = this.head;
    // if list is empty, nothing to delete
    if (!current) {
      return;
    }
    // delete from beginning
    if (index === 0) {
      // only 1 node in the list
      if (this.head && !this.head.next) {
        this.head = this.head?.next;
      }
      // more than 1 node in the list
      if (current && this.head?.next) {
        this.head = this.head?.next;
        current.next = null;
      }
    }

    let currIndex = 1;
    let prev = current;
    while (currIndex <= index && current) {
      prev = current;
      current = current.next;
      currIndex++;
    }
    if (prev && current) {
      prev.next = current?.next;
      current.next = null;
    }
  }

  findNthNodeFromBeginning(head: ListNode | null, n: number) {
    let curr: ListNode | null = head;
    for (let i = 1; i < n; i++) {
      if (curr) {
        curr = curr.next;
      }
    }
    return curr;
  }

  lengthofList(head: ListNode | null): {
    length: number;
    tail: ListNode | null;
  } {
    let curr: ListNode | null = head;
    let len = 1;
    while (curr?.next) {
      len++;
      curr = curr.next;
    }

    return { length: len, tail: curr };
  }

  rotate(k: number): ListNode | null {
    // code here
    if (!this.head || !this.head.next) {
      return this.head;
    }
    let obj = this.lengthofList(this.head);
    let len = obj.length;
    let tailNode = obj.tail;
    let numRotations = k % len;

    if (numRotations === 0) {
      return this.head;
    }

    if (tailNode) {
      tailNode.next = this.head;
    }
    let kthNodeFromBeg = this.findNthNodeFromBeginning(this.head, k);
    if (kthNodeFromBeg) {
      this.head = kthNodeFromBeg.next;
      kthNodeFromBeg.next = null;
    }
    return this.head;
  }
}

const list = new LinkedList();
list.addAtEnd(1);
list.addAtEnd(2);
list.addAtEnd(3);
list.addAtEnd(4);
list.addAtEnd(5);
// list.addAtEnd(2);
// list.addAtEnd(1);
// console.log(list);
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
list.rotate(13);
console.log("-----------");
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

function isPalindrome(head: ListNode | null): boolean {
  let str1 = "";
  let str2 = "";
  // traverse the linked list till the end
  // in str1, keep adding the numbers in the same order as you travers ethe list
  // in str2, add the numbers in the reverse order of list traversal
  // compare str1 and str2
  let current = head;
  while (current) {
    str1 = `${str1}${current.value}`;
    str2 = `${current.value}${str2}`;
    current = current.next;
  }

  return str1 === str2;
}

function findIntersection(
  head1: ListNode | null,
  head2: ListNode | null
): ListNode | null {
  // your code here
  let c1 = head1,
    c2 = head2;
  let newListHead: ListNode | null = null;
  let c3: ListNode | null = null;

  while (c1 && c2) {
    if (c1.value === c2.value) {
      const newNode = new ListNode(c1.value);
      if (!newListHead) {
        newListHead = newNode;
        c3 = newListHead;
      } else {
        if (c3) {
          c3.next = newNode;
          c3 = newNode;
        }
      }
      c1 = c1.next;
      c2 = c2.next;
    } else if (c1.value < c2.value) {
      c1 = c1.next;
    } else {
      c2 = c2.next;
    }
  }
  return newListHead;
}
