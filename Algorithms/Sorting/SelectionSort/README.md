# Selection Sort

## Description

Sorting algorithm which divides the array into two parts: a sorted sublist of items built up from left to right at the front of the list and a sublist of the remaining unsorted items.
The sorted sublist is initially empty, and the unsorted sublist is the initial input list.
The algorithm proceeds by finding the smallest element in the unsorted sublist and swaps it with the leftmost unsorted element, and then moving the sublist boundary to the right.

### When To Use

* When the data structure is relatively short
* When memory space is limited

### Time Complexity

O(N^2)
