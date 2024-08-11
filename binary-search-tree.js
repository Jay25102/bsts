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
    let currNode = this.root;
    let visitedNodes = [];
    let queue = [];
    queue.push(currNode);

    while (queue.length) {
      currNode = queue.shift();
      visitedNodes.push(currNode.val);
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right)
      }
    }

    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let nodeToRemove = this.root;
    let parent;

    while (nodeToRemove.val !== val) {
      parent = nodeToRemove;
      if (val < nodeToRemove.val) {
        nodeToRemove = nodeToRemove.left;
      } else {
        nodeToRemove = nodeToRemove.right;
      }
    }

    if (nodeToRemove !== this.root) {
      if (nodeToRemove.left === null && nodeToRemove.right === null) {
        if (parent.left === nodeToRemove) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else if (nodeToRemove.left !== null && nodeToRemove.right !== null) {
        let rightParent = nodeToRemove;
        let right = nodeToRemove.right;
        if (right.left === null) {
          right.left = nodeToRemove.left;
          if (parent.left === nodeToRemove) {
            parent.left = right;
          } else {
            parent.right = right;
          }
        } else {
          while (right.left !== null) {
            rightParent = right;
            right = right.left;
          }
          if (parent.left === nodeToRemove) {
            parent.left.val = right.val;
          } else {
            parent.right.val = right.val;
          }
          if (right.right !== null) {
            rightParent.left = right.right;
          } else {
            rightParent.left = null;
          }
        }
      } else {
        if (parent.left === nodeToRemove) {
          if (nodeToRemove.right === null) {
            parent.left = nodeToRemove.left;
          } else {
            parent.left = nodeToRemove.right;
          }
        } else {
          if (nodeToRemove.right === null) {
            parent.right = nodeToRemove.left;
          } else {
            parent.right = nodeToRemove.right;
          }
        }
      }
    }
    return nodeToRemove;
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(current = this.root) {
    if (current === null) return;
    return maxDepth(current) - minDepth(current) <= 1;

    function minDepth(current) {
      if (current === null) return 0;
      return 1 + Math.min(minDepth(current.left), minDepth(current.right));
    }

    function maxDepth(current) {
      if (current === null) return 0;
      return 1 + Math.max(maxDepth(current.left), maxDepth(current.right));
    }
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(current = this.root) {
    // if the tree is too small, return
    if (!this.root || (!this.root.left && !this.root.right)) return;

    while (current) {
      // Current is largest and has a left subtree and 2nd largest is the largest in that subtree
      if (current.left && !current.right) {
        return this.findSecondHighest(current.left);
      }
      // Current is parent of largest and largest has no children so current is 2nd largest
      if (current.right && (!current.right.left && !current.right.right)) {
        return current.val;
      }
      current = current.right;
    }
  }
}

module.exports = BinarySearchTree;
