function findLengthOfLongestSubstring(input: string) {
    let cache : {[letter: string]: number} = {};
    let maxSeq = 0;
    let currentSeq = 0;

    for(const char of input){
        if(char in cache){
            maxSeq = Math.max(maxSeq, currentSeq);
            currentSeq = 0;
            cache = {};
            continue;
        }
        cache[char] = 1;
        currentSeq++
    }

    return maxSeq;
}

console.log(findLengthOfLongestSubstring('abrkaabcdefghijjxxx'))