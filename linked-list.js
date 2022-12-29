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
    let poppedValue;
    while (currentPointer.nextNode.nextNode) {
      currentPointer = currentPointer.nextNode;
    }

    poppedValue = currentPointer.value;
    currentPointer.nextNode = null;

    return poppedValue;
  }

  function contains(value) {
    let currentPointer = head;

    while (currentPointer) {
      if (currentPointer.value == value) return true;
      currentPointer = currentPointer.nextNode;
    }

    return false;
  }

  function find(value) {
    let currentPointer = head;
    let index = 0;

    while (currentPointer) {
      if (currentPointer.value == value) return index;
      currentPointer = currentPointer.nextNode;
      index++;
    }

    return null;
  }

  function toString() {
    let currentPointer = head;
    let listString = "";
    while (currentPointer) {
      listString = listString + `( ${currentPointer.value} ) -> `;
      currentPointer = currentPointer.nextNode;
    }

    return listString + "null";
  }

  function insertAt(value, index) {
    let currentPointer = head;
    let newNode = Node(value);
    let currentIndex = 0;

    if (index > size()) return "Index out of bound";

    if (index == 0) {
      prepend(value);
      return;
    }

    while (currentIndex + 1 < index) {
      currentPointer = currentPointer.nextNode;
      currentIndex++;
    }
    newNode.nextNode = currentPointer.nextNode;
    currentPointer.nextNode = newNode;
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
    contains,
    find,
    toString,
    insertAt,
  };
}

let list = LinkedList();

list.append(5);
list.append(9);
list.append(4);
// console.log(list.at("undefined"));

// console.log(list.pop());
// console.log(list.contains(8));
// console.log(list.find(4));
// console.log(list.find(2));
console.log(list.toString());
console.log(list.insertAt(2, 2));
console.log(list.toString());
