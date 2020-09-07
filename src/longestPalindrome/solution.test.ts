import findLongestPalindrome from "./solution";

describe('should find palindrome string', function () {
  it("should find in first part of string", function () {
    expect(findLongestPalindrome("cabacd")).toEqual("cabac");
  });

  it('should find in last part of string', function () {
    expect(findLongestPalindrome("banana")).toEqual("anana");
  });

  it('should find in middle', function () {
    expect(findLongestPalindrome("million")).toEqual("illi");
  });

  it('not in same order, not real palindrome', ()=>{
    expect(findLongestPalindrome("tracecars")).toEqual("racecar");
  })
});

