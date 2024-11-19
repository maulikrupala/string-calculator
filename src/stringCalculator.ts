export function add(numbers: string): number {
  if (numbers === '') return 0;

  let delimiter = /[,\n]/;
  let numbersToAdd = numbers;

  if (numbers.startsWith('//')) {
    const delimiterEnd = numbers.indexOf('\n');
    delimiter = new RegExp(numbers.substring(2, delimiterEnd));
    numbersToAdd = numbers.substring(delimiterEnd + 1);
  }

  const nums = numbersToAdd.split(delimiter).map(Number);
  
  if (nums.some(isNaN)) {
    throw new Error('invalid input: string is not allowed');
  }

  const negatives = nums.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}