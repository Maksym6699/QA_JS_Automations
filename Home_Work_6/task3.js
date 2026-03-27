function checkOrder(available, ordered) {
  if (available < ordered) {
    return 'Your order is too large, we don’t have enough goods.';
  } else if (available > ordered) {
    return 'Your order is empty';
  } else {
    return 'Your order is accepted';
  }
}

console.log(checkOrder(5, 10));
console.log(checkOrder(10, 5));
console.log(checkOrder(10, 10));
