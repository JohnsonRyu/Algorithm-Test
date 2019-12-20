/* 
* Created by Ryu on 2019.12.20 11:15 p.m 
*/
function readNumbers(numbers: number[]) {
  let result: Array<string | number> = [];
  let combo: number = -1;     // -1 : Before Inspection , 0 : After Inspection , 0 < : Combo State

  for(let i = 0; i < numbers.length; i++) {
    if(combo === -1) {
      result.push(numbers[i]);
      combo++;
    } else {
      if(Number(result[result.length - 1]) + 1 === numbers[i]) {
        // Combo State
        result[result.length - 1] = numbers[i];
        combo++;
        // Last Index
        if(i === numbers.length - 1) {
          result[result.length - 1] = concatNumber(numbers[i] - combo, numbers[i]);
        }
      } else {
        // Noncontiguous State
        if(combo !== 0) {
          // Combo State End
          result[result.length - 1] = concatNumber(numbers[i - 1] - combo, numbers[i - 1]);
          combo = -1;
        }
        result.push(numbers[i]);
      }
    }
  }
  return result;
}

function concatNumber(head: number, tail: number) {
  return head+"~"+tail;
}

console.log(readNumbers([1])); // "1"
console.log(readNumbers([1, 3])); // "1, 3"
console.log(readNumbers([1, 2, 3])); // "1~3"
console.log(readNumbers([1, 2, 3, 6, 8, 9, 10])); // "1~3, 6, 8~10"
console.log(readNumbers([13, 14, 15, 16, 20, 23, 24, 25, 100])); // "13~16, 20, 23~25, 100"