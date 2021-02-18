/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }

/**
 * first answer
 * runtime beats 79.88% (136ms), memory usage 16.07% (46MB)
 * 
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let output: ListNode = new ListNode()
  let currentNode: ListNode | null = output;
  let nodes: [ListNode, ListNode] = [l1, l2]

  while(nodes[0] || nodes[1]) {
    const firstValue = nodes[0]?.val ?? 0;
    const secondValue = nodes[1]?.val ?? 0;
    const sum = firstValue + secondValue;
    
    const [first, last] = sum >= 10 ? [1, sum - 10] : [0, sum]
    if (first === 0) {
      currentNode.val = last + (currentNode.val ?? 0)
      if (currentNode.val >= 10) {
        currentNode.val = 0
        currentNode.next = new ListNode(1)
      } else if (nodes[0]?.next || nodes[1]?.next) {
        currentNode.next = new ListNode()
      }
    } else {
      currentNode.val = last + (currentNode.val ?? 0)
      currentNode.next = new ListNode(first)
    }
    
    nodes = [nodes[0]?.next, nodes[1]?.next]
    currentNode = currentNode.next
  }

  return output
};
 * 
*/

/**
 * Pseudo code
 * 
 * 1. 현재 노드를 반환 목록의 더미 헤드로 초기화 합니다.
 * 2. carry를 0으로 초기화
 * 3. p와 q를 각각 L1, L2의 head로 초기화
 * 4. 끝에 도달할 때까지 L1, L2를 반복
 *  - x를 p의 값으로 설정 후 p가 L1의 끝에 도달하면 0으로 설정
 *  - y를 q의 값으로 설정 후 q가 L2의 끝에 도달하면 0으로 설정
 *  - sum의 값에 x + y + carry 대입
 *  - carry = sum / 10 으로 업데이트 
 *  - 새 노드를 생성하고 현재 노드의 next로 설정하고 current node 를 next node로 설정
 *  - p와 q를 전진
 * 5. carry가 1인지 확인하고 1이라면 value를 1로 설정한 뒤 새 노드를 추가
 * 6. dummy head의 다음 노드를 리턴
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  
  const dummyHead: ListNode = new ListNode(0)
  let current: ListNode = dummyHead
  
  let carry: number = 0
  
  let p: ListNode = l1
  let q: ListNode = l2
  
  while (p !== null || q !== null) {
    const x = p?.val ?? 0
    const y = q?.val ?? 0
    const sum = carry + x + y

    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next

    if (p !== null) p = p.next
    if (q !== null) q = q.next
  }

  if (carry > 0) {
    current.next = new ListNode(carry)
  }

  return dummyHead.next
  
};
// @lc code=end

