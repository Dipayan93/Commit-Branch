/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   // create a fake node that acts like a fake head of list pointing to the original head and it points to the original head...
   var fake = new ListNode(0);
   fake.next = head;
   var curr = fake;
   // Loop till curr.next not null...
   while(curr.next != null){
       // if we find the target val same as the value of curr.next...
       if(curr.next.val == val){
           // Skip that value and keep updating curr...
           curr.next = curr.next.next; 
       }
       // Otherwise, move curr forward...
       else{
           curr = curr.next;
       }
   }
   return fake.next; 
};