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

  function getHead() {
    if (head) return head.value;

    return head;
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

  return {
    head,
    append,
    prepend,
    size,
    getHead,
    getTail,
    at,
  };
}

let list = LinkedList();

list.append(5);
list.append(9);
// list.append(4);
console.log(list.at("undefined"));
// console.log(LinkedList().head);

// console.log(Node(5));
