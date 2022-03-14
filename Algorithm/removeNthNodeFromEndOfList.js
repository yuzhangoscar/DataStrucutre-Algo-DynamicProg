// Given the head of a linked list, remove the nth node from the end of the list and return its head.


// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

const removeNthFromEnd = (head, n) => {
    let currentNode = nthNodeFromCurrentNode = head;
    let m = n + 1;
    let lastNode = null;

    while(currentNode !== null) {
        if (m > 1 && currentNode.next !== null) {
            currentNode = currentNode.next;
            m--;
        }
        else if(currentNode.next !== null) {
            currentNode = currentNode.next;
            nthNodeFromCurrentNode = nthNodeFromCurrentNode.next;
        }
        else if (currentNode.next !== null) {
            lastNode = currentNode;
        }
    }

    nthNodeFromCurrentNode.next = lastNode;

    return head;
};