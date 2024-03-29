let mergeKLists = (lists) => {
  if (!lists || lists.length === 0) return lists;
  let mergeSort = (start, end) => {
    if (start === end) return lists[start];
    if (start < end) {
      let mid = Math.floor((start + end) / 2);
      let l1 = mergeSort(start, mid);
      let l2 = mergeSort(mid + 1, end);
      return merge(l1, l2);
    }
  }
  let merge = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val <= l2.val) {
      l1.next = merge(l1.next, l2);
      return l1;
    } else {
      l2.next = merge(l1, l2.next);
      return l2;
    }
  }
  return mergeSort(0, lists.length - 1);
}