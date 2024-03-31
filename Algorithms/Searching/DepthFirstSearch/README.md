# Depth First Search (DFS)

## Description

Searches a tree for all values starting from the root and exploring as far as possible along each branch before backtracking.

### Types of Depth First Search

#### PreOrder

Preorder traversal gives a list of the vertices in the order that they were first visited by the DFS algorithm. This is an easy way of describing the progress of the search. This takes a time complexity of O(N).

#### PostOrder

Preorder traversal gives a list of the vertices in the order that they were last visited by the DFS algorithm. Used to delete the tree. This takes a time complexity of O(N).

#### InOrder

Used with Binary Search Trees, inorder traversal gives nodes in non-decreasing order. This takes a time complexity of O(N).

### When To Use

* When you need to visit every node, and the order matters
* When you want to find the longest path between two nodes
* When the tree is very wide
* When you wish to visit child nodes before sibling nodes
* When creating a decision tree

### Time Complexity

O(n)
