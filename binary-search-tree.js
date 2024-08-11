class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let currNode = this.root;
    while (true) {
      if (val < currNode.val) {
        if (currNode.left) {
          currNode = currNode.left;
        }
        else {
          currNode.left = new Node(val);
          return this;
        }
      }
      else {
        if (currNode.right) {
          currNode = currNode.right;
        }
        else {
          currNode.right = new Node(val);
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currNode = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < currNode.val) {
      if (currNode.left) {
        this.insertRecursively(val, currNode.left);
      }
      else {
        currNode.left = new Node(val);
        return this;
      }
    }
    else {
      if (currNode.right) {
        this.insertRecursively(val, currNode.right);
      }
      else {
        currNode.right = new Node(val);
        return this;
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    let found = false;

    if (val === currNode.val) {
      return currNode;
    }

    while (currNode && !found) {
      if (val < currNode.val) {
        currNode = currNode.left;
      }
      else if (val > currNode.val) {
        currNode = currNode.right;
      }
      else {
        found = true;
      }
    }

    if (found) {
      return currNode;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode = this.root) {
    if (this.root === null) {
      return undefined;
    }

    if (val < currNode.val) {
      if (currNode.left) {
        return this.findRecursively(val, currNode.left);
      }
      else {
        return undefined;
      }
    }
    else if (val > currNode.val) {
      if (currNode.right) {
        return this.findRecursively(val, currNode.right);
      }
      else {
        return undefined;
      }
    }

    return currNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = [];
    let root = this.root;

    function traversePreOrder(currNode = root) {
      visitedNodes.push(currNode.val);
      if (currNode.left) traversePreOrder(currNode.left);
      if (currNode.right) traversePreOrder(currNode.right);
    }

    traversePreOrder();
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = [];
    let root = this.root;

    function traverseInOrder(currNode = root) {
      if (currNode.left) traverseInOrder(currNode.left);
      visitedNodes.push(currNode.val);
      if (currNode.right) traverseInOrder(currNode.right);
    }

    traverseInOrder();
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = [];
    let root = this.root;

    function traversePostOrder(currNode = root) {
      if (currNode.left) traversePostOrder(currNode.left);
      if (currNode.right) traversePostOrder(currNode.right);
      visitedNodes.push(currNode.val);
    }

    traversePostOrder();
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
