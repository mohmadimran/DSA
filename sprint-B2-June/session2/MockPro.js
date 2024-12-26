// Given a string S and a string T, find the maximum window in S which will contain all the character in T in complexity O(n), if there is no  such window in S that covers all the characters in the T, return the empty string "".  S=ADOBECODEBANC, and T = BANC


function minWindow(s, t) {


    // Initialize frequency maps for t and the current window in s
    const tFreq = new Map();
    const windowFreq = new Map();
    
    // Build frequency map for string t
    for (let char of t) {
        tFreq.set(char, (tFreq.get(char) || 0) + 1);
    }
    
    let required = tFreq.size;  // Number of unique characters in t
    let formed = 0;
    let left = 0, right = 0;
    let minLen = Infinity, minLeft = 0;
    
    while (right < s.length) {
        let char = s[right];
        windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
        
        if (tFreq.has(char) && windowFreq.get(char) === tFreq.get(char)) {
            formed++;
        }
        
        while (left <= right && formed === required) {
            char = s[left];
            
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minLeft = left;
            }
            
            windowFreq.set(char, windowFreq.get(char) - 1);
            if (tFreq.has(char) && windowFreq.get(char) < tFreq.get(char)) {
                formed--;
            }
            left++;
        }
        
        right++;
    }
    
    return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
}

// Example usage
const S = "ADOBECODEBANC";
const T = "BANC";
console.log(minWindow(S, T));  // Output: "BANC"
