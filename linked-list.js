function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

function LinkedList() {
  let head = null;

  function _findEndOfList() {
    let nodePointer = head;
    while (nodePointer.nextNode != null) {
      nodePointer = nodePointer.nextNode;
    }
    return nodePointer;
  }

  function append(value) {
    let newNode = Node(value);

    if (head == null) {
      head = newNode;
    } else {
      let endNode = _findEndOfList();
      endNode.nextNode = newNode;
    }
  }

  function prepend(value) {
    let newNode = Node(value);

    if (head != null) {
      newNode.nextNode = head;
    }
    head = newNode;
  }

  function size() {
    let listSize = 0;
    let nodePointer = head;
    while (nodePointer) {
      nodePointer = nodePointer.nextNode;
      listSize++;
    }
    return listSize;
  }

  function getTail() {
    if (head) return _findEndOfList().value;

    return null;
  }

  function at(index) {
    if (index < 0 || index % 1 != 0 || !index) return "Enter correct Index";

    let nodePointer = head;
    while (index > 0) {
      if (nodePointer.nextNode == null) return "Index out of bound";
      nodePointer = nodePointer.nextNode;
      index--;
    }
    return nodePointer.value;
  }

  function pop() {
    if (!head) return "List is empty";

    let currentPointer = head;
    let nextPointer = head.nextNode;
    let poppedValue;
    while (nextPointer.nextNode != null) {
      currentPointer = currentPointer.nextNode;
      nextPointer = nextPointer.nextNode;
    }

    poppedValue = nextPointer.value;
    currentPointer.nextNode = null;

    return poppedValue;
  }

  return {
    get head() {
      return head;
    },
    append,
    prepend,
    size,
    getTail,
    at,
    pop,
  };
}

let list = LinkedList();

list.append(5);
list.append(9);
list.append(4);
// console.log(list.at("undefined"));
console.log(list.size());

console.log(list.pop());
console.log(list.size());
// console.log(Node(5));
