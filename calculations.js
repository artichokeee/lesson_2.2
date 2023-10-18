function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
  x -= y;
  return x;
}

function divideBalanceByAccounts(x, y, z) {
  x = (x + z) / y;
  return x;
}

// Через assignment operators можно организовать эту функцию так, но мне кажется, что в этом нет большого смысла
// function divideBalanceByAccounts(x, y, z) {
//   x += z;
//   x /= y;
//   return x;
// }

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

function incrementBalance(x, y) {
  x++;
  return x;
}

function decrementBalance(x, y) {
  x--;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));
console.log(incrementBalance(1000));
console.log(decrementBalance(1000));
