export default function findLongestPalindrome(input: string): string {
  const len = input.length;

  // one letter only
  if (len <= 1) {
    return "";
  }

  // odd number of letters, check if whole input is palindrome
  if (len % 2 !== 0) {
    let hasDifferences = false;
    for (let i = 0; i < (len - 1) / 2; i++) {
      if (input[i] !== input[len - 1 - i]) {
        hasDifferences = true;
        break;
      }
    }

    if (!hasDifferences) {
      return input;
    }
  }

  let result = { offset: -1, anchor: -1 };

  let anchor = 0;
  let offset = 0;

  while (anchor <= len / 2) {
    offset++;

    const left = input[anchor - offset];
    const right = input[anchor + offset];

    if (left !== right) {
      offset--;
      if (result.offset < offset) {
        result = { anchor, offset };
      }
      anchor++;
      offset = 0;
    }
  }

  if (result.offset < offset) {
    result = { anchor, offset };
  }

  return input.substring(
    result.anchor - result.offset,
    result.anchor + result.offset + 1
  );
}
